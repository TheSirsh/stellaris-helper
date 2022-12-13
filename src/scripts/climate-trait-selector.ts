import { speciesClimateTraits } from "./species-climate-traits.js"

function selectClimateTrait(i: number): void { 

  const traitDescriptionTitle: HTMLElement = document.querySelector(".trait-descr__title");
  const traitDescriptionImage: HTMLImageElement = document.querySelector(".trait-descr__image");
  const traitDescriptionPlanet: HTMLElement = document.querySelector(".trait-descr__planet");
  const traitActive: HTMLElement | null = document.querySelector(".workedplace__trait-container_active");
  if (traitActive) {
    traitActive.classList.remove("workedplace__trait-container_active");
  }

  traitDescriptionTitle.textContent = speciesClimateTraits[i].nameEN;
  traitDescriptionImage.src = speciesClimateTraits[i].image;
  traitDescriptionImage.alt = speciesClimateTraits[i].nameEN;
  traitDescriptionPlanet.textContent = speciesClimateTraits[i].descrEN;
}

export {selectClimateTrait}