import { speciesBiologicalTraits } from "./objects/species-initial-traits.js";
import { createNewTextElement } from "./create-functions.js";
function selectInitialTrait(i) {
    const traitDescriptionTitle = document.querySelector(".trait-descr__title");
    traitDescriptionTitle.textContent = speciesBiologicalTraits[i].nameEN;
    const traitDescriptionTrait = document.querySelector(".trait-descr__trait");
    traitDescriptionTrait.textContent = "";
    const traitDescriptionNumber = createNewTextElement("span", "green", traitDescriptionTrait, speciesBiologicalTraits[i].number1);
    const traitDescriptionDescr = createNewTextElement("span", "white", traitDescriptionTrait, speciesBiologicalTraits[i].text1EN);
    if (speciesBiologicalTraits[i].number2) {
        traitDescriptionTrait.innerHTML += "<br\/>";
        const traitDescriptionNumber = createNewTextElement("span", "green", traitDescriptionTrait, speciesBiologicalTraits[i].number2);
        const traitDescriptionDescr = createNewTextElement("span", "white", traitDescriptionTrait, speciesBiologicalTraits[i].text2EN);
    }
}
export { selectInitialTrait };
