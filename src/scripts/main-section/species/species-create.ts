import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "../../create-functions.js";
import { speciesSectionText } from "../../objects/species-section-text.js";
import { species } from "../../objects/species.js";
import { selectSpecies } from "./species-selector.js";
import { createMainSectionClimateTrait } from "../climate-traits/climate-traits-create.js"
import { createWorkedPlace, createTraitList, createDescrBlock } from "../../create-worked-place.js";

function createSpecies(): void {

  createWorkedPlace("species", speciesSectionText);
  const workedplace = document.querySelector(".species__workedplace");

  const traitlistBlock = createNewSimpleElement("div", "species__traitlist-block", workedplace)

  createTraitList(traitlistBlock, species, "species");
  createDescrBlock("species", speciesSectionText);

  const speciesContainerArr: NodeListOf<HTMLElement> | null = document.querySelectorAll(".species__trait-container");

  speciesContainerArr.forEach(function(elem: Element, i: number) {
    elem.addEventListener("click", function(): void {
      selectSpecies(i);
      localStorage.setItem("species", species[i].trait);
      speciesContainerArr[i].classList.toggle("species__trait-container_active");

      const speciesButton = document.querySelector(".species__button");
      if (speciesButton) {
        speciesButton.classList.remove("species__button");
        speciesButton.classList.add("species__button_active");
        speciesButton.addEventListener("click", createMainSectionClimateTrait);
      }
    })
  })
}

export { createSpecies }