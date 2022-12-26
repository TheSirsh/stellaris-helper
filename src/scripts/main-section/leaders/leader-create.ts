import { createWorkedPlace, createTraitList, createDescrBlock }from "../../create-worked-place.js";
import { leaderSectionText } from "../../objects/leaders/leader-section-text.js";
import { species, leaders, } from "../../objects/leaders/leader.js";
import { createNewSimpleElement } from "../../create-functions.js";
import { selectLeaderSpecies } from "./leader-species-selector.js";

function createLeader() {
  
  createWorkedPlace("leader", leaderSectionText);
  const workedplace = document.querySelector(".leader__workedplace");
  const traitlistBlock = createNewSimpleElement("div", "leader__traitlist-block", workedplace);
  createTraitList(traitlistBlock, species, "leader-species");
  createDescrBlock("leader", leaderSectionText);

  const speciesContainerArray: NodeListOf<HTMLElement> = document.querySelectorAll(".leader-species__trait-container");

  speciesContainerArray.forEach(function(elem: Element, i: number) {
    elem.addEventListener("click", function(): void {
      selectLeaderSpecies()
      localStorage.setItem("leader-species", species[i].trait);
      elem.classList.toggle("leader-species__trait-container_active");
    })
  })
}

export { createLeader }