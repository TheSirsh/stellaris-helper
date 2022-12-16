import { climateSectionText } from "../../objects/climate-section-text.js";
import { speciesClimateTraits } from "../../objects/species-climate-traits.js";
import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "../../create-functions.js";
import { selectClimateTrait } from "./climate-trait-selector.js"
import { nextTraitStage } from "../biological-traits/biological-traits-create.js"

function createMainSectionClimateTrait(): void {  
  const mainSection: HTMLElement = document.querySelector(".main-section")!;
  const container: HTMLElement = document.querySelector(".main-section__container")!;
  container.remove();

  const mainSectionContainer = createNewSimpleElement("div", "main-section__container", mainSection);
    const mainSectionTitle = createNewTextElement("h2", "main-section__title", mainSectionContainer, climateSectionText["titleEN"]);
    const mainSectionSubTitle = createNewTextElement("h3", "main-section__subtitle", mainSectionContainer, climateSectionText["subtitleEN"]);
  
    const mainSectionWorkedPlace = createNewSimpleElement("div", "climate__workedplace", mainSectionContainer);
      const mainSectionTraitList = createNewSimpleElement("ol", "climate__traitlist", mainSectionWorkedPlace);
  
        for (let i = 0; i < Object.keys(speciesClimateTraits).length; i++) {
          const traitContainer = createNewSimpleElement("li", "climate__trait-container", mainSectionTraitList);
            const traitContainerImage = createNewImageElement("climate__trait-container-image", traitContainer, speciesClimateTraits[i].icon, speciesClimateTraits[i].nameEN);
            const traitContainerName = createNewTextElement("span", "climate__trait-container-name", traitContainer, speciesClimateTraits[i].nameEN);
        }
  
      const mainSectionTraitDescription = createNewSimpleElement("div", "climate__descr-block", mainSectionWorkedPlace);
        const traitDescriptionTitle = createNewTextElement("h3", "climate__descr-title", mainSectionTraitDescription, climateSectionText["descriptionBlockTitleEN"]);
        const traitDescriptionImage = createNewImageElement("climate__descr-image", mainSectionTraitDescription, climateSectionText["image"], climateSectionText["imageAltEN"]);
        const traitDescriptionPlanet = createNewTextElement("p", "climate__descr-planet", mainSectionTraitDescription, climateSectionText["descriptionBlockTextEN"]);
        const traitDescriptionButton = createNewTextElement("div", "climate__button", mainSectionTraitDescription, climateSectionText["buttonEN"])
      

  const traitContainerArr = document.querySelectorAll(".climate__trait-container");

  traitContainerArr.forEach(function(elem: Element, i: number) {
    elem.addEventListener("click", function(): void{
      selectClimateTrait(i);
      localStorage.setItem("climate", speciesClimateTraits[i].trait)
      elem.classList.toggle("workedplace__trait-container_active");
      traitDescriptionButton.classList.add("trait-descr__button_active");
      traitDescriptionButton.addEventListener("click", nextTraitStage);
    })
  })
}

export { createMainSectionClimateTrait }