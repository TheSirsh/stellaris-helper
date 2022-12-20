import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "../../create-functions.js";
import { mainSectionContent } from "../../objects/main-section-text.js";
import { speciesBiologicalTraits } from "../../objects/species-initial-traits.js";
import { selectBiologicalTrait } from "./biological-trait-selector.js";
function nextTraitStage() {
    const container = document.querySelector(".main-section__container");
    container.remove();
    const mainSection = document.querySelector(".main-section");
    const mainSectionContainer = createNewSimpleElement("div", "main-section__container", mainSection);
    const mainSectionTitle = createNewTextElement("h2", "main-section__title", mainSectionContainer, mainSectionContent.titleEN);
    const mainSectionSubTitle = createNewTextElement("h3", "main-section__subtitle", mainSectionContainer, mainSectionContent.subtitleEN);
    const mainSectionWorkedPlace = createNewSimpleElement("div", "biological__workedplace", mainSectionContainer);
    const mainSectionTraitList = createNewSimpleElement("ul", "biological__traitlist", mainSectionWorkedPlace);
    for (let i = 0; i < Object.keys(speciesBiologicalTraits).length; i++) {
        const traitContainer = createNewSimpleElement("li", "biological__trait-container", mainSectionTraitList);
        const traitContainerImage = createNewImageElement("biological__trait-container-image", traitContainer, speciesBiologicalTraits[i].icon, speciesBiologicalTraits[i].nameEN);
        const traitContainerName = createNewTextElement("span", "biological__trait-container-name", traitContainer, speciesBiologicalTraits[i].nameEN);
    }
    const mainSectionTraitDescription = createNewSimpleElement("div", "biological__descr-block", mainSectionWorkedPlace);
    const traitDescriptionTitle = createNewTextElement("h3", "biological__descr-title", mainSectionTraitDescription, mainSectionContent.descriptionBlockTitleEN);
    const traitDescriptionTrait = createNewTextElement("p", "biological__descr-text", mainSectionTraitDescription, mainSectionContent.descriptionBlockTextEN);
    const traitContainerArr = document.querySelectorAll(".biological__trait-container");
    traitContainerArr.forEach(function (elem, i) {
        elem.addEventListener("click", function () {
            traitContainerArr[i].classList.toggle("biological__trait-container_active");
            selectBiologicalTrait(i);
        });
    });
}
export { nextTraitStage };
