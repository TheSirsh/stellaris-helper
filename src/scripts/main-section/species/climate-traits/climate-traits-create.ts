import { climateSectionText } from "./climate-section-text.js";
import { climateTraits } from "./climate-traits-list.js";
import { selectClimateTrait } from "./climate-trait-selector.js";
import { nextTraitStage } from "../biological-traits/biological-traits-create.js";
import { ITraits } from "../../../interface.js";
import { createValidArray } from "../../../create-valid-array-function.js";
import { createWorkedPlace, createTraitList, createDescrBlock } from "../../../create-worked-place.js";
import { changeButton } from "../../../change-button.js";

function createMainSectionClimateTrait(): void { 

  let validPlanet: Array<ITraits> = createValidArray(climateTraits, "species");
  if (localStorage.getItem("bio") !== undefined) {validPlanet = createValidArray(climateTraits, "bio");}

  createWorkedPlace("climate", climateSectionText);
  createTraitList(document.querySelector(".climate__workedplace"), validPlanet, "climate");
  createDescrBlock("climate", climateSectionText, true);
      
  const traitContainerArr = document.querySelectorAll(".climate__trait-container");

  traitContainerArr.forEach(function(elem: Element, i: number) {
    elem.addEventListener("click", function(): void{
      selectClimateTrait(i, validPlanet);
      localStorage.setItem("climate", validPlanet[i].trait);
      elem.classList.toggle("climate__trait-container_active");

      const traitDescriptionButton: HTMLElement = document.querySelector(".climate__button");
      if (traitDescriptionButton) {
        changeButton(traitDescriptionButton, "climate");
        traitDescriptionButton.addEventListener("click", nextTraitStage)
      }
    })
  })
}

export { createMainSectionClimateTrait }