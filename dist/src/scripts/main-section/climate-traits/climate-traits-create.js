import { climateSectionText } from "../../objects/climate-section-text.js";
import { speciesClimateTraits } from "../../objects/species-climate-traits.js";
import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "../../create-functions.js";
import { selectClimateTrait } from "./climate-trait-selector.js";
import { nextTraitStage } from "../biological-traits/biological-traits-create.js";
function createMainSectionClimateTrait() {
    let validPlanet = [];
    for (let i = 0; i < speciesClimateTraits.length; i++) {
        if (speciesClimateTraits[i].exclude == undefined) {
            validPlanet.push(speciesClimateTraits[i]);
        }
        else {
            let isValid = true;
            for (let j = 0; j < speciesClimateTraits[i].exclude.length; j++) {
                if (speciesClimateTraits[i].exclude[j] === localStorage.getItem("species")) {
                    isValid = false;
                }
            }
            if (isValid === true) {
                validPlanet.push(speciesClimateTraits[i]);
            }
        }
    }
    const mainSection = document.querySelector(".main-section");
    const container = document.querySelector(".main-section__container");
    container.remove();
    const mainSectionContainer = createNewSimpleElement("div", "main-section__container", mainSection);
    const mainSectionTitle = createNewTextElement("h2", "main-section__title", mainSectionContainer, climateSectionText["titleEN"]);
    const mainSectionSubTitle = createNewTextElement("h3", "main-section__subtitle", mainSectionContainer, climateSectionText["subtitleEN"]);
    const mainSectionWorkedPlace = createNewSimpleElement("div", "climate__workedplace", mainSectionContainer);
    const mainSectionTraitList = createNewSimpleElement("ul", "climate__traitlist", mainSectionWorkedPlace);
    for (let i = 0; i < validPlanet.length; i++) {
        const traitContainer = createNewSimpleElement("li", "climate__trait-container", mainSectionTraitList);
        const traitContainerImage = createNewImageElement("climate__trait-container-image", traitContainer, validPlanet[i].icon, validPlanet[i].nameEN);
        const traitContainerName = createNewTextElement("span", "climate__trait-container-name", traitContainer, validPlanet[i].nameEN);
    }
    const mainSectionTraitDescription = createNewSimpleElement("div", "climate__descr-block", mainSectionWorkedPlace);
    const traitDescriptionTitle = createNewTextElement("h3", "climate__descr-title", mainSectionTraitDescription, climateSectionText["descriptionBlockTitleEN"]);
    const traitDescriptionImage = createNewImageElement("climate__descr-image", mainSectionTraitDescription, climateSectionText["image"], climateSectionText["imageAltEN"]);
    const traitDescriptionPlanet = createNewTextElement("p", "climate__descr-planet", mainSectionTraitDescription, climateSectionText["descriptionBlockTextEN"]);
    const traitDescriptionButton = createNewTextElement("div", "climate__button", mainSectionTraitDescription, climateSectionText["buttonEN"]);
    const traitContainerArr = document.querySelectorAll(".climate__trait-container");
    traitContainerArr.forEach(function (elem, i) {
        elem.addEventListener("click", function () {
            selectClimateTrait(i, validPlanet);
            localStorage.setItem("climate", validPlanet[i].trait);
            elem.classList.toggle("climate__trait-container_active");
            traitDescriptionButton.classList.add("climate__button_active");
            traitDescriptionButton.addEventListener("click", nextTraitStage);
        });
    });
}
export { createMainSectionClimateTrait, };
