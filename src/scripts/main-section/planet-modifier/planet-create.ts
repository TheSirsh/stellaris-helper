import { changeButton } from "../../change-button.js";
import { createWorkedPlace, createTraitList, createDescrBlock }from "../../create-worked-place.js";
import { planetModifierText } from "./planet-modifier-text.js";
import { planetModifier } from "../../objects/planet-modifier.js";
import { selectPlanetModifier } from "./planet-modifier-selector.js";

function createPlanetModifier() {
  
  createWorkedPlace("planet", planetModifierText);
  const workedplace: HTMLElement = document.querySelector(".planet__workedplace");
  createTraitList(workedplace, planetModifier, "planet");
  createDescrBlock("planet", planetModifierText);

  const speciesContainerArray: NodeListOf<HTMLElement> = document.querySelectorAll(".planet__trait-container");

  speciesContainerArray.forEach(function(elem: Element, i: number) {
    elem.addEventListener("click", function(): void {
      selectPlanetModifier(i);
      localStorage.setItem("planet", planetModifier[i].trait);
      elem.classList.toggle("planet__trait-container_active");

      const button: HTMLElement = document.querySelector(".planet__button");
      if (button) {
        changeButton(button, "planet")
      }
    })
  })
}

export { createPlanetModifier }