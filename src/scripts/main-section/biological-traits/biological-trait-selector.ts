import { speciesBiologicalTraits } from "../../objects/species-initial-traits.js";
import { createNewTextElement } from "../../create-functions.js";

function selectBiologicalTrait(i: number): void { 

  const traitDescriptionTitle: HTMLElement = document.querySelector(".biological__descr-title")!;
  traitDescriptionTitle.textContent = speciesBiologicalTraits[i].nameEN;

  if (speciesBiologicalTraits[i].exclude !== undefined) {
    const traitActive: NodeListOf<HTMLElement> = document.querySelectorAll(".biological__trait-container_active");
    for (let j = 0; j < traitActive.length; j++) {
      for (let k = 0; k< speciesBiologicalTraits[i].exclude.length; k++) {

        if (traitActive[j].classList.contains(`${speciesBiologicalTraits[i].exclude[k]}`)) {

          console.log(traitActive[j].classList.contains(`${speciesBiologicalTraits[i].exclude[k]}`))
          traitActive[j].classList.remove("biological__trait-container_active")
        }
      }
    }
  }


  
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