import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "../../create-functions.js";
import { mainSectionContent } from "../../objects/main-section-text.js";
import { species } from "../../objects/species.js";
import { selectSpecies } from "./species-selector.js";
function createSpecies() {
    const container = document.querySelector(".main-section__container");
    container.remove();
    const mainSection = document.querySelector(".main-section");
    const mainSectionContainer = createNewSimpleElement("div", "main-section__container", mainSection);
    const mainSectionTitle = createNewTextElement("h2", "main-section__title", mainSectionContainer, mainSectionContent[0].titleEN);
    const mainSectionSubTitle = createNewTextElement("h3", "main-section__subtitle", mainSectionContainer, mainSectionContent[0].subtitleEN);
    const speciesWorkedPlace = createNewSimpleElement("div", "species-workedplace", mainSectionContainer);
    const speciesTraitlistBlock = createNewSimpleElement("div", "species__traitlist-block", speciesWorkedPlace);
    const speciesTraitListOrigin = createNewSimpleElement("ul", "species__traitlist_origin", speciesTraitlistBlock);
    for (let i = 0; i < Object.keys(species).length; i++) {
        const traitContainer = createNewSimpleElement("li", "species__container", speciesTraitListOrigin);
        const traitContainerImage = createNewImageElement("species__container-image", traitContainer, species[i].icon, species[i].nameEN);
        const traitContainerName = createNewTextElement("span", "species__container-name", traitContainer, species[i].nameEN);
    }
    const speciesContainerArr = document.querySelectorAll(".species__container");
    speciesContainerArr.forEach(function (elem, i) {
        elem.addEventListener("click", function () {
            selectSpecies(i);
            speciesContainerArr[i].classList.toggle("species__container_active");
        });
    });
}
export { createSpecies };
