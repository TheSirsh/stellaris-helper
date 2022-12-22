import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "../../create-functions.js";
import { ITraits } from "../../interface";
import { mainSectionContent } from "../../objects/main-section-text.js";
import { speciesBiologicalTraits, speciesBotanicalTraits, speciesLithoidTraits, speciesCyborgTraits, speciesRobotTraits } from "../../objects/species-initial-traits.js"
import { selectBiologicalTrait } from "./biological-trait-selector.js";
import { createValidArray } from "../../create-valid-array-function.js";

function nextTraitStage():void {

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

  const container: HTMLElement = document.querySelector(".main-section__container")!;
  container.remove();

  const mainSection: HTMLElement = document.querySelector(".main-section")!;

  const mainSectionContainer = createNewSimpleElement("div", "main-section__container", mainSection);
    const mainSectionTitle = createNewTextElement("h2", "main-section__title", mainSectionContainer, mainSectionContent.titleEN);
    const mainSectionSubTitle = createNewTextElement("h3", "main-section__subtitle", mainSectionContainer, mainSectionContent.subtitleEN);

    const mainSectionWorkedPlace = createNewSimpleElement("div", "biological__workedplace", mainSectionContainer);
      const mainSectionTraitList = createNewSimpleElement("ul", "biological__traitlist", mainSectionWorkedPlace);
        for (let i = 0; i < validTraits.length; i++) {
          const traitContainer = createNewSimpleElement("li", "biological__trait-container", mainSectionTraitList);
          traitContainer.classList.add(`${validTraits[i].trait}`)
            const traitContainerImage = createNewImageElement("biological__trait-container-image", traitContainer, validTraits[i].icon, validTraits[i].nameEN);
            const traitContainerName = createNewTextElement("span", "biological__trait-container-name", traitContainer, validTraits[i].nameEN);
        }

      const mainSectionTraitDescription = createNewSimpleElement("div", "biological__descr-block", mainSectionWorkedPlace);
        const traitDescriptionTitle = createNewTextElement("h3", "biological__descr-title", mainSectionTraitDescription, mainSectionContent.descriptionBlockTitleEN);
        const traitDescriptionTrait = createNewTextElement("p", "biological__descr-text", mainSectionTraitDescription, mainSectionContent.descriptionBlockTextEN);

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