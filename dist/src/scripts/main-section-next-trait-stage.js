import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "./create-functions.js";
import { mainSectionContent } from "./objects/main-section-text.js";
import { speciesBiologicalTraits } from "./objects/species-initial-traits.js";
import { selectInitialTrait } from "./initial-trait-selector.js";
function nextTraitStage() {
    const container = document.querySelector(".main-section__container");
    container.remove();
    const mainSection = document.querySelector(".main-section");
    const mainSectionContainer = createNewSimpleElement("div", "main-section__container", mainSection);
    const mainSectionTitle = createNewTextElement("h2", "main-section__title", mainSectionContainer, mainSectionContent[2].titleEN);
    const mainSectionSubTitle = createNewTextElement("h3", "main-section__subtitle", mainSectionContainer, mainSectionContent[2].subtitleEN);
    const mainSectionWorkedPlace = createNewSimpleElement("div", "main-section__workedplace", mainSectionContainer);
    const mainSectionTraitList = createNewSimpleElement("ol", "main-section__traitlist", mainSectionWorkedPlace);
    for (let i = 0; i < Object.keys(speciesBiologicalTraits).length; i++) {
        const traitContainer = createNewSimpleElement("li", "workedplace__trait-container", mainSectionTraitList);
        const traitContainerImage = createNewImageElement("workedplace__trait-container-image", traitContainer, speciesBiologicalTraits[i].icon, speciesBiologicalTraits[i].nameEN);
        const traitContainerName = createNewTextElement("span", "workedplace__trait-container-name", traitContainer, speciesBiologicalTraits[i].nameEN);
    }
    const mainSectionTraitDescription = createNewSimpleElement("div", "main-section__trait-descr", mainSectionWorkedPlace);
    const traitDescriptionTitle = createNewTextElement("h3", "trait-descr__title", mainSectionTraitDescription, mainSectionContent[3].titleEN);
    const traitDescriptionTrait = createNewTextElement("p", "trait-descr__trait", mainSectionTraitDescription, mainSectionContent[3].traitDecrEN);
    const traitContainerArr = document.querySelectorAll(".workedplace__trait-container");
    traitContainerArr.forEach(function (elem, i) {
        elem.addEventListener("click", function () {
            selectInitialTrait(i);
            traitContainerArr[i].classList.toggle("workedplace__trait-container_active");
        });
    });
}
export { nextTraitStage };
