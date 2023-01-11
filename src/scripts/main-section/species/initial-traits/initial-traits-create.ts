import { ITraits } from "../../../interface.js";
import { initialTraitSectionContent } from "./initial-trait-text.js";
import { speciesBiologicalTraits, speciesBotanicalTraits, speciesLithoidTraits, speciesCyborgTraits, speciesRobotTraits } from "./initial-traits-list.js";
import { selectBiologicalTrait } from "./initial-trait-selector.js";
import { createValidArray } from "../../../create-valid-array-function.js";
import { createWorkedPlace, createTraitList, createDescrBlock } from "../../../create-worked-place.js";
import { completeSpeciesTrait } from "../complete-species-traits/complete-species-traits.js"; 
import { changeButton } from "../../../change-button.js";

function nextTraitStage(): void {

  let validTraits: Array<ITraits> = [];
  if (localStorage.getItem("species") === "trait_machine_unit") { validTraits = speciesRobotTraits }
  else if (localStorage.getItem("species") === "trait_hive_mind") { validTraits = createValidArray(speciesBiologicalTraits, "species")}
  else {validTraits = speciesBiologicalTraits}

  if (localStorage.getItem("origin") === "trait_cybernetic") {
    validTraits = createValidArray(speciesBiologicalTraits, "origin")
    validTraits = validTraits.concat(speciesCyborgTraits)
  }

  if (localStorage.getItem("bio") === "trait_lithoid") {
    validTraits = createValidArray(validTraits, "bio");
    validTraits = validTraits.concat(speciesLithoidTraits);
  } else if (localStorage.getItem("bio") === "NOTVALUEABLE-botanical") {
    validTraits = validTraits.concat(speciesBotanicalTraits);
  }

  createWorkedPlace("biological", initialTraitSectionContent);
  createTraitList(document.querySelector(".biological__workedplace"), validTraits, "biological");
  createDescrBlock("biological", initialTraitSectionContent);

  
  const button: HTMLElement = document.querySelector(".biological__button");
  changeButton(button, "biological")

  button.addEventListener("click", function() {
    let traits = document.querySelectorAll(".biological__trait-container");
    let traitsActive: Array<ITraits> = [];
    for (let i = 0; i < traits.length; i++) {
      if (traits[i].classList.contains("biological__trait-container_active")) {
        traitsActive.push(validTraits[i])
      }
    }
    localStorage.setItem("traits", JSON.stringify(traitsActive))
    completeSpeciesTrait()
  })

  const traitContainerArr = document.querySelectorAll(".biological__trait-container");

  traitContainerArr.forEach(function(elem: Element, i: number) {
    elem.addEventListener("click", function(): void {
      traitContainerArr[i].classList.remove("red");
      let isActive: boolean;
      if (traitContainerArr[i].classList.contains("biological__trait-container_active")) {
        isActive = true;
        traitContainerArr[i].classList.remove("biological__trait-container_active");
      } else {
        isActive = false;
        traitContainerArr[i].classList.add("biological__trait-container_active");
      }
      selectBiologicalTrait(i, validTraits, isActive);
    })
  })
}

export { nextTraitStage }