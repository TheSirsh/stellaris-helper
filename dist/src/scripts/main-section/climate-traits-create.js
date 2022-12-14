import { mainSectionContent } from "../objects/main-section-text.js";
import { speciesClimateTraits } from "../objects/species-climate-traits.js";
import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "../create-functions.js";
import { selectClimateTrait } from "./climate-trait-selector.js";
import { nextTraitStage } from "./biological-traits-create.js";
function createMainSectionClimateTrait() {
    const mainSection = document.querySelector(".main-section");
    const container = document.querySelector(".main-section__container");
    container.remove();
    const mainSectionContainer = createNewSimpleElement("div", "main-section__container", mainSection);
    const mainSectionTitle = createNewTextElement("h2", "main-section__title", mainSectionContainer, mainSectionContent[1].titleEN);
    const mainSectionSubTitle = createNewTextElement("h3", "main-section__subtitle", mainSectionContainer, mainSectionContent[1].subtitleEN);
    const mainSectionWorkedPlace = createNewSimpleElement("div", "main-section__workedplace", mainSectionContainer);
    const mainSectionTraitList = createNewSimpleElement("ol", "main-section__traitlist", mainSectionWorkedPlace);
    for (let i = 0; i < Object.keys(speciesClimateTraits).length; i++) {
        const traitContainer = createNewSimpleElement("li", "workedplace__trait-container", mainSectionTraitList);
        const traitContainerImage = createNewImageElement("workedplace__trait-container-image", traitContainer, speciesClimateTraits[i].icon, speciesClimateTraits[i].nameEN);
        const traitContainerName = createNewTextElement("span", "workedplace__trait-container-name", traitContainer, speciesClimateTraits[i].nameEN);
    }
    const mainSectionTraitDescription = createNewSimpleElement("div", "main-section__trait-descr", mainSectionWorkedPlace);
    const traitDescriptionTitle = createNewTextElement("h3", "trait-descr__title", mainSectionTraitDescription, mainSectionContent[2].titleEN);
    const traitDescriptionImage = createNewImageElement("trait-descr__image", mainSectionTraitDescription, mainSectionContent[2].image, mainSectionContent[2].nameEN);
    const traitDescriptionPlanet = createNewTextElement("p", "trait-descr__planet", mainSectionTraitDescription, mainSectionContent[2].planetDecrEN);
    const traitDescriptionButton = createNewTextElement("div", "trait-descr__button", mainSectionTraitDescription, mainSectionContent[2].buttonEN);
    const traitContainerArr = document.querySelectorAll(".workedplace__trait-container");
    traitContainerArr.forEach(function (elem, i) {
        elem.addEventListener("click", function () {
            selectClimateTrait(i);
            localStorage.setItem("climate", speciesClimateTraits[i].trait);
            elem.classList.toggle("workedplace__trait-container_active");
            traitDescriptionButton.classList.add("trait-descr__button_active");
            traitDescriptionButton.addEventListener("click", nextTraitStage);
        });
    });
}
export { createMainSectionClimateTrait };
