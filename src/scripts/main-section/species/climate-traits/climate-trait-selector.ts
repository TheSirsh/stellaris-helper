import { ITraits } from "../../../interface.js";

function selectClimateTrait(i: number, arr: Array<ITraits>): void { 

  const traitDescriptionTitle: HTMLElement = document.querySelector(".descr-title");
  const traitDescriptionImage: HTMLImageElement = document.querySelector(".descr-image");
  const traitDescriptionPlanet: HTMLElement = document.querySelector(".descr-text");
  const traitActive: HTMLElement | null = document.querySelector(".trait-container_active");
  if (traitActive) {
    traitActive.classList.remove("trait-container_active");
  }

  traitDescriptionTitle.textContent = arr[i].nameEN;
  traitDescriptionImage.src = arr[i].image;
  traitDescriptionImage.alt = arr[i].nameEN;
  traitDescriptionPlanet.textContent = arr[i].descrEN;
}

export { selectClimateTrait }