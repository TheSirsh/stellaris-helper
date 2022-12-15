import { speciesTraitsNotHiveMind, speciesTraitsBiological} from "../../objects/species.js"
import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "../../create-functions.js";

function selectSpecies(i: number): void {
  const speciesActive: HTMLElement | null = document.querySelector(".workedplace__trait-container_active");
  if (speciesActive) { speciesActive.classList.toggle("workedplace__trait-container_active"); }

  const mainSectionTraitList: NodeListOf<HTMLElement> | null = document.querySelectorAll(".main-section__species-list");
  if (mainSectionTraitList) { mainSectionTraitList.forEach(element => {element.remove()}); }
  
  if (i !== 0) {
    const mainSectionWorkedPlace: HTMLElement = document.querySelector(".main-section__workedplace_species");

    if (i !== 1 ) {
      const mainSectionTraitList = createNewSimpleElement("ul", "main-section__species-list", mainSectionWorkedPlace);
      for (let i = 0; i < Object.keys(speciesTraitsNotHiveMind).length; i++) {
        const traitContainer = createNewSimpleElement("li", "workedplace__trait-container", mainSectionTraitList);
          const traitContainerImage = createNewImageElement("workedplace__trait-container-image", traitContainer, speciesTraitsNotHiveMind[i].icon, speciesTraitsNotHiveMind[i].nameEN);
          const traitContainerName = createNewTextElement("span", "workedplace__trait-container-name", traitContainer, speciesTraitsNotHiveMind[i].nameEN);
      }
    }
    
    const mainSectionTraitList = createNewSimpleElement("ul", "main-section__species-list", mainSectionWorkedPlace);
    for (let i = 0; i < Object.keys(speciesTraitsBiological).length; i++) {
      const traitContainer = createNewSimpleElement("li", "workedplace__trait-container", mainSectionTraitList);
        const traitContainerImage = createNewImageElement("workedplace__trait-container-image", traitContainer, speciesTraitsBiological[i].icon, speciesTraitsBiological[i].nameEN);
        const traitContainerName = createNewTextElement("span", "workedplace__trait-container-name", traitContainer, speciesTraitsBiological[i].nameEN);
    }
  }
}

export { selectSpecies }