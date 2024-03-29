import { createTraitList } from "../../../create-worked-place.js";
import { leaders, } from "./leaders-list.js";
import { createLeaderTraits } from "../leaders-traits/leader-traits-create.js";
import { changeButton } from "../../../change-button.js";
function selectLeaderSpecies() {
    const speciesActive = document.querySelector(".species__trait-container_active");
    if (speciesActive) {
        speciesActive.classList.toggle("species__trait-container_active");
    }
    const leadersList = document.querySelector(".traitlist");
    if (leadersList) {
        leadersList.remove();
    }
    const speciesTraitBlock = document.querySelector(".species__traitlist-block");
    createTraitList(speciesTraitBlock, leaders, "");
    const leaderContainerArray = document.querySelectorAll(".trait-container");
    leaderContainerArray.forEach(function (elem, i) {
        elem.addEventListener("click", function () {
            const leaderActive = document.querySelector(".trait-container_active");
            if (leaderActive) {
                leaderActive.classList.toggle("trait-container_active");
            }
            localStorage.setItem("leader", leaders[i].trait);
            elem.classList.toggle("trait-container_active");
            const leaderButton = document.querySelector(".button");
            if (leaderButton) {
                changeButton(leaderButton, "");
                leaderButton.addEventListener("click", createLeaderTraits);
            }
        });
    });
}
export { selectLeaderSpecies };
