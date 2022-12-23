import { ITraits } from "../../interface.js";

function selectClimateTrait(i: number, arr: Array<ITraits>): void { 

  const traitDescriptionTitle: HTMLElement = document.querySelector(".climate__descr-title");
  const traitDescriptionImage: HTMLImageElement = document.querySelector(".climate__descr-image");
  const traitDescriptionPlanet: HTMLElement = document.querySelector(".climate__descr-text");
  const traitActive: HTMLElement | null = document.querySelector(".climate__trait-container_active");
  if (traitActive) {
    traitActive.classList.remove("climate__trait-container_active");
  }

  traitDescriptionTitle.textContent = arr[i].nameEN;
  traitDescriptionImage.src = arr[i].image;
  traitDescriptionImage.alt = arr[i].nameEN;
  traitDescriptionPlanet.textContent = arr[i].descrEN;
}

export { selectClimateTrait }