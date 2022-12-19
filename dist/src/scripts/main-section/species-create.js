import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "../create-functions.js";
import { mainSectionContent } from "../objects/main-section-text.js";
import { species, speciesTraits } from "../objects/species.js";
function createSpecies() {
    const container = document.querySelector(".main-section__container");
    container.remove();
    const mainSection = document.querySelector(".main-section");
    const mainSectionContainer = createNewSimpleElement("div", "main-section__container", mainSection);
    const mainSectionTitle = createNewTextElement("h2", "main-section__title", mainSectionContainer, mainSectionContent[0].titleEN);
    const mainSectionSubTitle = createNewTextElement("h3", "main-section__subtitle", mainSectionContainer, mainSectionContent[0].subtitleEN);
    const mainSectionWorkedPlace = createNewSimpleElement("div", "main-section__workedplace_species", mainSectionContainer);
    const mainSectionTraitList = createNewSimpleElement("ul", "main-section__species", mainSectionWorkedPlace);
    for (let i = 0; i < Object.keys(species).length; i++) {
        const traitContainer = createNewSimpleElement("li", "workedplace__trait-container", mainSectionTraitList);
        const traitContainerImage = createNewImageElement("workedplace__trait-container-image", traitContainer, species[i].icon, species[i].nameEN);
        const traitContainerName = createNewTextElement("span", "workedplace__trait-container-name", traitContainer, species[i].nameEN);
    }
    const speciesContainerArr = document.querySelectorAll(".workedplace__trait-container");
    speciesContainerArr.forEach(function (elem, i) {
        elem.addEventListener("click", function () {
            const mainSectionTraitList = document.querySelector(".main-section__species-list");
            if (mainSectionTraitList) {
                mainSectionTraitList.remove();
            }
            if (i !== 0) {
                const mainSectionTraitList = createNewSimpleElement("ul", "main-section__species-list", mainSectionWorkedPlace);
                for (let i = 0; i < Object.keys(speciesTraits).length; i++) {
                    const traitContainer = createNewSimpleElement("li", "workedplace__trait-container", mainSectionTraitList);
                    const traitContainerImage = createNewImageElement("workedplace__trait-container-image", traitContainer, speciesTraits[i].icon, speciesTraits[i].nameEN);
                    const traitContainerName = createNewTextElement("span", "workedplace__trait-container-name", traitContainer, speciesTraits[i].nameEN);
                }
            }
        });
    });
}
export { createSpecies };
