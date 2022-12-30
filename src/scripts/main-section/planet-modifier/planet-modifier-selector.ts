import { planetModifier } from "../../objects/planet-modifier.js";
import { createNewTextElement } from "../../create-functions.js";


function selectPlanetModifier(i: number): void {
  const planetActive: HTMLElement | null = document.querySelector(".planet__trait-container_active");
  if (planetActive) {planetActive.classList.toggle("planet__trait-container_active")}

  const planetDescriptionTitle: HTMLElement = document.querySelector(".planet__descr-title");
  planetDescriptionTitle.textContent = planetModifier[i].nameEN;
  const planetDescriptionText: HTMLElement = document.querySelector(".planet__descr-text");
  planetDescriptionText.textContent = "";
  for (let j = 0; j < planetModifier[i].traits.length; j++) {
    if (planetModifier[i].traits[j][0] === "bad") {
      createNewTextElement("span", "red", planetDescriptionText, planetModifier[i].traits[j][1]);
    } else if (planetModifier[i].traits[j][0] === "good") {
      createNewTextElement("span", "green", planetDescriptionText, planetModifier[i].traits[j][1]);
    }
  planetDescriptionText.innerHTML += " " + planetModifier[i].traits[j][2] + "<br>";
  }
}

  export { selectPlanetModifier }

