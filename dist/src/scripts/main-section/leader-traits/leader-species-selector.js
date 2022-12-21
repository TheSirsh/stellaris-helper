import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "../../create-functions.js";
import { leaders, } from "../../objects/leader.js";
import { createLeaderTraits } from "./leader-traits-create.js";
function selectSpecies(i) {
    const speciesTraitBlock = document.querySelector(".leader__traitlist-block");
    const speciesActive = document.querySelector(".leader__trait-container_active");
    if (speciesActive) {
        speciesActive.classList.toggle("leader__trait-container_active");
    }
    const speciesTraitlistAdditional = createNewSimpleElement("ul", "species__traitlist_additional", speciesTraitBlock);
    for (let i = 0; i < leaders.length; i++) {
        const traitContainer = createNewSimpleElement("li", "species__container_leader", speciesTraitlistAdditional);
        const traitContainerImage = createNewImageElement("species__container-image", traitContainer, leaders[i].icon, leaders[i].nameEN);
        const traitContainerName = createNewTextElement("span", "species__container-name", traitContainer, leaders[i].nameEN);
    }
    const speciesLeaderArray = document.querySelectorAll(".species__container_leader");
    speciesLeaderArray.forEach(function (elem, i) {
        elem.addEventListener("click", function () {
            localStorage.setItem("leader", leaders[i].nameEN);
            createLeaderTraits();
        });
    });
}
export { selectSpecies };
