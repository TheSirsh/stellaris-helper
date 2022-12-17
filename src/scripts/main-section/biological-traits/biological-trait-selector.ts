import { speciesBiologicalTraits } from "../../objects/species-initial-traits.js";
import { createNewTextElement } from "../../create-functions.js";

function selectBiologicalTrait(i: number): void { 

  const traitDescriptionTitle: HTMLElement = document.querySelector(".biological__descr-title")!;
  traitDescriptionTitle.textContent = speciesBiologicalTraits[i].nameEN;
  
    const traitDescriptionTrait: HTMLElement = document.querySelector(".biological__descr-text")!;
    traitDescriptionTrait.textContent = "";
    for (let j = 0; j < speciesBiologicalTraits[i].traits.length; j++) {
      if (speciesBiologicalTraits[i].traits[j][0] === "bad") {
        const traitDescriptionNumber = createNewTextElement("span", "red", traitDescriptionTrait, speciesBiologicalTraits[i].traits[j][1]);
      } else if (speciesBiologicalTraits[i].traits[j][0] === "good") {
        const traitDescriptionNumber = createNewTextElement("span", "green", traitDescriptionTrait, speciesBiologicalTraits[i].traits[j][1]);
      }
      traitDescriptionTrait.innerHTML += " " + speciesBiologicalTraits[i].traits[j][2]
    }
}

export { selectBiologicalTrait }