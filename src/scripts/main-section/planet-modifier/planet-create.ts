import { changeButton } from "../../change-button.js";
import { createWorkedPlace, createTraitList, createDescrBlock }from "../../create-worked-place.js";
import { planetModifierText } from "./planet-modifier-text.js";
import { planetModifier } from "./planet-modifier-list.js";
import { mutuallyChecking } from "../../mutually-checking.js";

function createPlanetModifier() {
  
  createWorkedPlace(planetModifierText);
  const workedplace: HTMLElement = document.querySelector(".workedplace");
  createTraitList(workedplace, planetModifier, "");
  createDescrBlock("", planetModifierText);

  const speciesContainerArray: NodeListOf<HTMLElement> = document.querySelectorAll(".trait-container");

  speciesContainerArray.forEach(function(elem: Element, i: number) {
    elem.addEventListener("click", function(): void {

      speciesContainerArray[i].classList.remove("red");
      let isActive: boolean;
      if (speciesContainerArray[i].classList.contains("trait-container_active")) {
        isActive = true;
        speciesContainerArray[i].classList.remove("trait-container_active");
      } else {
        isActive = false;
        speciesContainerArray[i].classList.add("trait-container_active");
      }
      mutuallyChecking(i, planetModifier, isActive, "");

      const button: HTMLElement = document.querySelector(".button");
      if (button) {
        changeButton(button, "")
      }
    })
  })
}

export { createPlanetModifier }