import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "../../create-functions.js";
import { leaderSectionText } from "../../objects/leader-section-text.js";
import { species, } from "../../objects/leader.js";
import { selectSpecies } from "./leader-species-selector.js";
function createLeaderTraits() {
    const mainSection = document.querySelector(".main-section");
    const container = document.querySelector(".main-section__container");
    container.remove();
    const mainSectionContainer = createNewSimpleElement("div", "main-section__container", mainSection);
    const mainSectionTitle = createNewTextElement("h2", "main-section__title", mainSectionContainer, leaderSectionText["titleEN"]);
    const mainSectionSubTitle = createNewTextElement("h3", "main-section__subtitle", mainSectionContainer, leaderSectionText["subtitleEN"]);
    const mainSectionWorkedPlace = createNewSimpleElement("div", "leader__workedplace", mainSectionContainer);
    const leaderTraitlistBlock = createNewSimpleElement("div", "leader__traitlist-block", mainSectionWorkedPlace);
    const leaderTraitListOrigin = createNewSimpleElement("ul", "leader__traitlist_origin", leaderTraitlistBlock);
    for (let i = 0; i < species.length; i++) {
        const traitContainer = createNewSimpleElement("li", "leader__trait-container", leaderTraitListOrigin);
        const traitContainerImage = createNewImageElement("leader__trait-container-image", traitContainer, species[i].icon, species[i].nameEN);
        const traitContainerName = createNewTextElement("span", "leader__trait-container-name", traitContainer, species[i].nameEN);
    }
    const traitContainerArr = document.querySelectorAll(".leader__trait-container");
    traitContainerArr.forEach(function (elem, i) {
        elem.addEventListener("click", function () {
            selectSpecies(i);
            localStorage.setItem("origin", species[i].trait);
            elem.classList.toggle("leader__trait-container_active");
        });
    });
}
export { createLeaderTraits };
