import {speciesTraitPrefernce} from "../scripts/species-traits-preference.js"

function selectClimateTrait(i: number): void { 

  const traitDescriptionTitle: HTMLElement = document.querySelector(".trait-descr__title");
  const traitDescriptionImage: HTMLImageElement = document.querySelector(".trait-descr__image");
  const traitDescriptionPlanet: HTMLElement = document.querySelector(".trait-descr__planet");
  const traitActive: HTMLElement | null = document.querySelector(".workedplace__trait-container_active");
  if (traitActive) {
    traitActive.classList.remove("workedplace__trait-container_active");
  }

  traitDescriptionTitle.textContent = speciesTraitPrefernce[i].nameEN;
  traitDescriptionImage.src = speciesTraitPrefernce[i].image;
  traitDescriptionImage.alt = speciesTraitPrefernce[i].nameEN;
  traitDescriptionPlanet.textContent = speciesTraitPrefernce[i].descrEN;
}

export {selectClimateTrait}