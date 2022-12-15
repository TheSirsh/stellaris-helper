import { species, speciesTraitsNotHiveMind, speciesTraitsBiological} from "../../objects/species.js";
import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "../../create-functions.js";

function selectSpeciesNotHM(i: number): void {
    const speciesActiveNotHM: HTMLElement | null = document.querySelector(".species__container_not_active");
    if (speciesActiveNotHM) {speciesActiveNotHM.classList.toggle("species__container_not_active")}


  const speciesDescriptionTitle: HTMLElement = document.querySelector(".species__descr-title");
  speciesDescriptionTitle.textContent = speciesTraitsNotHiveMind[i].nameEN;
  const speciesDescriptionText: HTMLElement = document.querySelector(".species__descr-text");
  speciesDescriptionText.textContent = "";
  for (let j = 0; j < speciesTraitsNotHiveMind[i].traits.length; j++) {
    if (speciesTraitsNotHiveMind[i].traits[j][0] === "bad") {
      const speciesDescription = createNewTextElement("span", "red", speciesDescriptionText, speciesTraitsNotHiveMind[i].traits[j][1]);
    } else if (speciesTraitsNotHiveMind[i].traits[j][0] === "good") {
      const speciesDescription = createNewTextElement("span", "green", speciesDescriptionText, speciesTraitsNotHiveMind[i].traits[j][1]);
    }
   speciesDescriptionText.innerHTML += " " + speciesTraitsNotHiveMind[i].traits[j][2] + "<br>";
  }
}

export { selectSpeciesNotHM }