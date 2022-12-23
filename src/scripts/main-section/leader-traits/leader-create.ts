import { createWorkedPlace, createTraitList, createDescrBlock }from "../../create-worked-place.js";
import { leaderSectionText } from "../../objects/leaders/leader-section-text.js";
import { species, leaders, } from "../../objects/leaders/leader.js";
import { createNewSimpleElement } from "../../create-functions.js";

function createLeader() {

  createWorkedPlace("leader", leaderSectionText);
  const workedplace = document.querySelector(".leader__workedplace");
  const traitlistBlock = createNewSimpleElement("div", "leader__traitlist-block", workedplace);
  createTraitList(traitlistBlock, species, "leader");
  createDescrBlock("leader", leaderSectionText);

  const speciesContainerArray: NodeListOf<HTMLElement> = document.querySelectorAll(".leader__trait-container");

  speciesContainerArray.forEach(function(elem: Element, i: number) {
    elem.addEventListener("click", function(): void {
      localStorage.setItem("leader", species[i].trait);
      elem.classList.toggle("leader__trait-container_active");

 //     selected(i, arr)

      const speciesButton: HTMLElement = document.querySelector("leader__button");
      if (speciesButton) {
        speciesButton.classList.add("leader__button_active");
        speciesButton.classList.remove("leader__button");
//        speciesButton.addEventListener("click", nextStage);
      }

    })
  })
}

export { createLeader }