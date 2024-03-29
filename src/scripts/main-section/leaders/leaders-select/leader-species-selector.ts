import { createTraitList } from "../../../create-worked-place.js";
import { leaders, } from "./leaders-list.js";
import { createLeaderTraits } from "../leaders-traits/leader-traits-create.js";
import { changeButton } from "../../../change-button.js";

function selectLeaderSpecies(): void {

  const speciesActive: HTMLElement | null = document.querySelector(".species__trait-container_active");
  if (speciesActive) { speciesActive.classList.toggle("species__trait-container_active"); }

  const leadersList : HTMLElement | null = document.querySelector(".traitlist");
  if (leadersList) { leadersList.remove() } 

  const speciesTraitBlock: HTMLElement = document.querySelector(".species__traitlist-block");

  createTraitList(speciesTraitBlock, leaders, "");

  const leaderContainerArray: NodeListOf<HTMLElement> = document.querySelectorAll(".trait-container");

  leaderContainerArray.forEach(function(elem: Element, i: number) {
    elem.addEventListener("click", function(): void {
      const leaderActive: HTMLElement | null = document.querySelector(".trait-container_active");
      if (leaderActive) {leaderActive.classList.toggle("trait-container_active")}

      localStorage.setItem("leader", leaders[i].trait);
      elem.classList.toggle("trait-container_active");

      const leaderButton: HTMLElement = document.querySelector(".button");
      if (leaderButton) {
        changeButton(leaderButton, "")
        leaderButton.addEventListener("click", createLeaderTraits);
      }
    })
  })
}

export { selectLeaderSpecies }