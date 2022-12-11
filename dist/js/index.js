import { mainSectionContent } from "../src/js/main-section-text.js";
import { speciesTraitPrefernce } from "../src/js/species-traits-preference.js";
import { createHeader } from "../src/js/header.js";
import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "../src/js/create-functions.js";
const body = document.querySelector(".body");
createHeader();
const mainSection = createNewSimpleElement("section", "main-section", body);
const mainSectionContainer = createNewSimpleElement("div", "main-section__container", mainSection);
const mainSectionTitle = createNewTextElement("h2", "main-section__title", mainSectionContainer, mainSectionContent[0].title);
const mainSectionSubTitle = createNewTextElement("h3", "main-section__subtitle", mainSectionContainer, mainSectionContent[0].subtitle);
const mainSectionWorkedPlace = createNewSimpleElement("div", "main-section__workedplace", mainSectionContainer);
for (let i = 0; i < Object.keys(speciesTraitPrefernce).length; i++) {
    const traitContainer = createNewSimpleElement("div", "workedplace__trait-container", mainSectionWorkedPlace);
    const traitContainerImage = createNewImageElement("workedplace__trait-container-image", traitContainer, speciesTraitPrefernce[i].icon, speciesTraitPrefernce[i].nameEN);
    const traitContainerName = createNewTextElement("span", "workedplace__trait-container-name", traitContainer, speciesTraitPrefernce[i].nameEN);
}
