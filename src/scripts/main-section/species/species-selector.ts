import { species, speciesTraitsNotHiveMind, speciesTraitsBiological} from "../../objects/species.js"
import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "../../create-functions.js";

function selectSpecies(i: number): void {
  const speciesActive: HTMLElement | null = document.querySelector(".species__container_active");
  if (speciesActive) { speciesActive.classList.toggle("species__container_active"); }

  const speciesTraitlistAdditional: NodeListOf<HTMLElement> | null = document.querySelectorAll(".species__traitlist_additional");
  if (speciesTraitlistAdditional) { speciesTraitlistAdditional.forEach(element => {element.remove()}); }
  
  if (i !== 0) {
    const speciesTraitBlock: HTMLElement = document.querySelector(".species__traitlist-block");

    if (i !== 1 ) {
      const speciesTraitlistAdditional = createNewSimpleElement("ul", "species__traitlist_additional", speciesTraitBlock);
      for (let i = 0; i < Object.keys(speciesTraitsNotHiveMind).length; i++) {
        const traitContainer = createNewSimpleElement("li", "species__container", speciesTraitlistAdditional);
          const traitContainerImage = createNewImageElement("species__container-image", traitContainer, speciesTraitsNotHiveMind[i].icon, speciesTraitsNotHiveMind[i].nameEN);
          const traitContainerName = createNewTextElement("span", "species__container-name", traitContainer, speciesTraitsNotHiveMind[i].nameEN);
      }
    }
    
    const speciesTraitlistAdditional = createNewSimpleElement("ul", "species__traitlist_additional", speciesTraitBlock);
    for (let i = 0; i < Object.keys(speciesTraitsBiological).length; i++) {
      const traitContainer = createNewSimpleElement("li", "species__container", speciesTraitlistAdditional);
        const traitContainerImage = createNewImageElement("species__container-image", traitContainer, speciesTraitsBiological[i].icon, speciesTraitsBiological[i].nameEN);
        const traitContainerName = createNewTextElement("span", "species__container-name", traitContainer, speciesTraitsBiological[i].nameEN);
    }
  }

  const speciesDescriptionTitle: HTMLElement = document.querySelector(".species__descr-title");
  speciesDescriptionTitle.textContent = species[i].nameEN;
  const speciesDescriptionText: HTMLElement = document.querySelector(".species__descr-text");
  speciesDescriptionText.textContent = "";
  for (let j = 0; j < species[i].traits.length; j++) {
    if (species[i].traits[j][0] === "bad") {
      const speciesDescription = createNewTextElement("span", "red", speciesDescriptionText, species[i].traits[j][1]);
    } else if (species[i].traits[j][0] === "good") {
      const speciesDescription = createNewTextElement("span", "green", speciesDescriptionText, species[i].traits[j][1]);
    }
   speciesDescriptionText.innerHTML += " " + species[i].traits[j][2] + "<br>";
  }
}

export { selectSpecies }