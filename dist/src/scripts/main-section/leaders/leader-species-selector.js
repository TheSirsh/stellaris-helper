import { createTraitList } from "../../create-worked-place.js";
import { leaders, } from "../../objects/leaders/leader.js";
import { createLeaderTraits } from "../leaders-traits/leader-traits-create.js";
import { changeButton } from "../../change-button.js";
function selectLeaderSpecies() {
    const speciesActive = document.querySelector(".leader-species__trait-container_active");
    if (speciesActive) {
        speciesActive.classList.toggle("leader-species__trait-container_active");
    }
    const leadersList = document.querySelector(".leader__traitlist");
    if (leadersList) {
        leadersList.remove();
    }
    const speciesTraitBlock = document.querySelector(".leader__traitlist-block");
    createTraitList(speciesTraitBlock, leaders, "leader");
    const leaderContainerArray = document.querySelectorAll(".leader__trait-container");
    leaderContainerArray.forEach(function (elem, i) {
        elem.addEventListener("click", function () {
            const leaderActive = document.querySelector(".leader__trait-container_active");
            if (leaderActive) {
                leaderActive.classList.toggle("leader__trait-container_active");
            }
            localStorage.setItem("leader", leaders[i].trait);
            elem.classList.toggle("leader__trait-container_active");
            const leaderButton = document.querySelector(".leader__button");
            if (leaderButton) {
                changeButton(leaderButton, "leader");
                leaderButton.addEventListener("click", createLeaderTraits);
            }
        });
    });
}
export { selectLeaderSpecies };
