import { changeButton } from "../../change-button.js";
import { createWorkedPlace, createTraitList, createDescrBlock }from "../../create-worked-place.js";
import { planetModifierText } from "./planet-modifier-text.js";
import { planetModifier } from "../../objects/planet-modifier.js";
import { mutuallyChecking } from "../../mutually-checking.js";

function createPlanetModifier() {
  
  createWorkedPlace(planetModifierText);
  const workedplace: HTMLElement = document.querySelector(".workedplace");
  createTraitList(workedplace, planetModifier, "planet");
  createDescrBlock("planet", planetModifierText);

  const speciesContainerArray: NodeListOf<HTMLElement> = document.querySelectorAll(".planet__trait-container");

  speciesContainerArray.forEach(function(elem: Element, i: number) {
    elem.addEventListener("click", function(): void {

      speciesContainerArray[i].classList.remove("red");
      let isActive: boolean;
      if (speciesContainerArray[i].classList.contains("planet__trait-container_active")) {
        isActive = true;
        speciesContainerArray[i].classList.remove("planet__trait-container_active");
      } else {
        isActive = false;
        speciesContainerArray[i].classList.add("planet__trait-container_active");
      }
      mutuallyChecking(i, planetModifier, isActive, "planet");

      const button: HTMLElement = document.querySelector(".planet__button");
      if (button) {
        changeButton(button, "planet")
      }
    })
  })
}

export { createPlanetModifier }