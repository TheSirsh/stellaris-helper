import { speciesTraitsBiological } from "../../objects/species.js";
import { createNewTextElement } from "../../create-functions.js";

function selectSpeciesNotHM(i: number): void {
    const speciesActiveNotHM: HTMLElement | null = document.querySelector(".species-bio__trait-container_active");
    if (speciesActiveNotHM) {speciesActiveNotHM.classList.toggle("species-bio__trait-container_active")}


  const speciesDescriptionTitle: HTMLElement = document.querySelector(".species__descr-title");
  speciesDescriptionTitle.textContent = speciesTraitsBiological[i].nameEN;
  const speciesDescriptionText: HTMLElement = document.querySelector(".species__descr-text");
  speciesDescriptionText.textContent = "";
  for (let j = 0; j < speciesTraitsBiological[i].traits.length; j++) {
    if (speciesTraitsBiological[i].traits[j][0] === "bad") {
      createNewTextElement("span", "red", speciesDescriptionText, speciesTraitsBiological[i].traits[j][1]);
    } else if (speciesTraitsBiological[i].traits[j][0] === "good") {
      createNewTextElement("span", "green", speciesDescriptionText, speciesTraitsBiological[i].traits[j][1]);
    }
   speciesDescriptionText.innerHTML += " " + speciesTraitsBiological[i].traits[j][2] + "<br>";
  }
}

export { selectSpeciesNotHM }