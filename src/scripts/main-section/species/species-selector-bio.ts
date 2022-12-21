import { species, speciesTraitsBiological } from "../../objects/species.js";
import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "../../create-functions.js";

function selectSpeciesBio(i: number): void {
  const speciesActiveBio: HTMLElement | null = document.querySelector(".species__container_bio_active");
  if (speciesActiveBio) {speciesActiveBio.classList.toggle("species__container_bio_active")}

const speciesDescriptionTitle: HTMLElement = document.querySelector(".species__descr-title");
speciesDescriptionTitle.textContent = speciesTraitsBiological[i].nameEN;
const speciesDescriptionText: HTMLElement = document.querySelector(".species__descr-text");
speciesDescriptionText.textContent = "";
for (let j = 0; j < speciesTraitsBiological[i].traits.length; j++) {
  if (speciesTraitsBiological[i].traits[j][0] === "bad") {
    const speciesDescription = createNewTextElement("span", "red", speciesDescriptionText, speciesTraitsBiological[i].traits[j][1]);
  } else if (speciesTraitsBiological[i].traits[j][0] === "good") {
    const speciesDescription = createNewTextElement("span", "green", speciesDescriptionText, speciesTraitsBiological[i].traits[j][1]);
  }
 speciesDescriptionText.innerHTML += " " + speciesTraitsBiological[i].traits[j][2] + "<br>";
}
}

export { selectSpeciesBio }