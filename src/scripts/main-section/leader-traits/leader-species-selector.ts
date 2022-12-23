import { createTraitList } from "../../create-worked-place.js";
import { species, leaders, } from "../../objects/leaders/leader.js";

function selectLeaderSpecies(): void {

  const speciesActive: HTMLElement | null = document.querySelector(".leader-species__trait-container_active");
  if (speciesActive) { speciesActive.classList.toggle("leader-species__trait-container_active"); }

  const leadersList : HTMLElement | null = document.querySelector(".leader__traitlist");
  if (leadersList) { leadersList.remove() } 

  const speciesTraitBlock: HTMLElement = document.querySelector(".leader__traitlist-block");

  createTraitList(speciesTraitBlock, leaders, "leader");

  const leaderContainerArray: NodeListOf<HTMLElement> = document.querySelectorAll(".leader__trait-container");

  leaderContainerArray.forEach(function(elem: Element, i: number) {
    elem.addEventListener("click", function(): void {
      const leaderActive: HTMLElement | null = document.querySelector(".leader__trait-container_active");
      if (leaderActive) {leaderActive.classList.toggle("leader__trait-container_active")}

      localStorage.setItem("leader", leaders[i].trait);
      elem.classList.toggle("leader__trait-container_active");

      const leaderButton: HTMLElement = document.querySelector(".leader__button");
      if (leaderButton) {
        leaderButton.classList.add("leader__button_active");
        leaderButton.classList.remove("leader__button");
//        speciesButton.addEventListener("click", nextStage);
      }
    })
  })
}

export { selectLeaderSpecies }