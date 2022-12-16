import { speciesClimateTraits } from "../../objects/species-climate-traits.js"

function selectClimateTrait(i: number): void { 

  const traitDescriptionTitle: HTMLElement = document.querySelector(".climate__descr-title");
  const traitDescriptionImage: HTMLImageElement = document.querySelector(".climate__descr-image");
  const traitDescriptionPlanet: HTMLElement = document.querySelector(".climate__descr-planet");
  const traitActive: HTMLElement | null = document.querySelector(".climate__trait-container_active");
  if (traitActive) {
    traitActive.classList.remove("climate__trait-container_active");
  }

  traitDescriptionTitle.textContent = speciesClimateTraits[i].nameEN;
  traitDescriptionImage.src = speciesClimateTraits[i].image;
  traitDescriptionImage.alt = speciesClimateTraits[i].nameEN;
  traitDescriptionPlanet.textContent = speciesClimateTraits[i].descrEN;
}

export {selectClimateTrait}