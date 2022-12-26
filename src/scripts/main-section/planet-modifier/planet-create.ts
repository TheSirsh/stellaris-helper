import { createWorkedPlace, createTraitList, createDescrBlock }from "../../create-worked-place.js";
import { createNewSimpleElement } from "../../create-functions.js";
import { planetModifierText } from "../../objects/planet-modifier-text.js";
import { planetModifier } from "../../objects/planet-modifier.js";

function createPlanetModifier() {
  
  createWorkedPlace("planet", planetModifierText);
  const workedplace = document.querySelector(".planet__workedplace");
  const traitlistBlock = createNewSimpleElement("div", "planet__traitlist-block", workedplace);
  createTraitList(traitlistBlock, planetModifier, "planet");
  createDescrBlock("planet", planetModifierText);

  const speciesContainerArray: NodeListOf<HTMLElement> = document.querySelectorAll(".planet__trait-container");

  speciesContainerArray.forEach(function(elem: Element, i: number) {
    elem.addEventListener("click", function(): void {
//      selectLeaderSpecies()
      localStorage.setItem("planet", planetModifier[i].trait);
      elem.classList.toggle("planet__trait-container_active");
    })
  })
}

export { createPlanetModifier }