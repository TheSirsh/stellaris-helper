import { speciesBiologicalTraits } from "../../objects/species-initial-traits.js";
import { createNewTextElement } from "../../create-functions.js";

function selectBiologicalTrait(i: number): void { 

  const traitDescriptionTitle: HTMLElement = document.querySelector(".biological__descr-title")!;
  traitDescriptionTitle.textContent = speciesBiologicalTraits[i].nameEN;
  
    const traitDescriptionTrait: HTMLElement = document.querySelector(".biological__descr-text")!;
    traitDescriptionTrait.textContent = "";
      const traitDescriptionNumber = createNewTextElement("span", "green", traitDescriptionTrait, speciesBiologicalTraits[i].number1);
      const traitDescriptionDescr = createNewTextElement("span", "white", traitDescriptionTrait, speciesBiologicalTraits[i].text1EN);
      if (speciesBiologicalTraits[i].number2) {
        traitDescriptionTrait.innerHTML += "<br\/>"
        const traitDescriptionNumber = createNewTextElement("span", "green", traitDescriptionTrait, speciesBiologicalTraits[i].number2);
        const traitDescriptionDescr = createNewTextElement("span", "white", traitDescriptionTrait, speciesBiologicalTraits[i].text2EN);
        }
}

export { selectBiologicalTrait }