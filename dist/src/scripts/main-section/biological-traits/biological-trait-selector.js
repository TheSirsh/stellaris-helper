import { speciesBiologicalTraits, speciesRobotTraits } from "../../objects/species-initial-traits.js";
import { createNewTextElement } from "../../create-functions.js";
function selectBiologicalTrait(i) {
    let selectedSpecies = speciesRobotTraits;
    if (localStorage.getItem("species") != "trait_machine_unit") {
        selectedSpecies = speciesBiologicalTraits;
    }
    const traitDescriptionTitle = document.querySelector(".biological__descr-title");
    traitDescriptionTitle.textContent = selectedSpecies[i].nameEN;
    if (selectedSpecies[i].exclude !== undefined) {
        const traitActive = document.querySelectorAll(".biological__trait-container_active");
        for (let j = 0; j < traitActive.length; j++) {
            for (let k = 0; k < selectedSpecies[i].exclude.length; k++) {
                if (traitActive[j].classList.contains(`${selectedSpecies[i].exclude[k]}`)) {
                    console.log(traitActive[j].classList.contains(`${selectedSpecies[i].exclude[k]}`));
                    traitActive[j].classList.remove("biological__trait-container_active");
                }
            }
        }
    }
    const traitDescriptionTrait = document.querySelector(".biological__descr-text");
    traitDescriptionTrait.textContent = "";
    for (let j = 0; j < selectedSpecies[i].traits.length; j++) {
        if (selectedSpecies[i].traits[j][0] === "bad") {
            const traitDescriptionNumber = createNewTextElement("span", "red", traitDescriptionTrait, selectedSpecies[i].traits[j][1]);
        }
        else if (selectedSpecies[i].traits[j][0] === "good") {
            const traitDescriptionNumber = createNewTextElement("span", "green", traitDescriptionTrait, selectedSpecies[i].traits[j][1]);
        }
        traitDescriptionTrait.innerHTML += " " + selectedSpecies[i].traits[j][2];
    }
}
export { selectBiologicalTrait };
