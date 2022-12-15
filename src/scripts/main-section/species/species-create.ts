import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "../../create-functions.js";
import { mainSectionContent } from "../../objects/main-section-text.js";
import { species } from "../../objects/species.js";
import { selectSpecies } from "./species-selector.js";

function createSpecies(): void {
const container: HTMLElement = document.querySelector(".main-section__container")!;
container.remove();

const mainSection: HTMLElement = document.querySelector(".main-section")!;

const mainSectionContainer = createNewSimpleElement("div", "main-section__container", mainSection);
  const mainSectionTitle = createNewTextElement("h2", "main-section__title", mainSectionContainer, mainSectionContent[0].titleEN);
  const mainSectionSubTitle = createNewTextElement("h3", "main-section__subtitle", mainSectionContainer, mainSectionContent[0].subtitleEN);

  const mainSectionWorkedPlace = createNewSimpleElement("div", "main-section__workedplace_species", mainSectionContainer);
    const mainSectionTraitList = createNewSimpleElement("ul", "main-section__species", mainSectionWorkedPlace);

  for (let i = 0; i < Object.keys(species).length; i++) {
    const traitContainer = createNewSimpleElement("li", "workedplace__trait-container", mainSectionTraitList);
    const traitContainerImage = createNewImageElement("workedplace__trait-container-image", traitContainer, species[i].icon, species[i].nameEN);
      const traitContainerName = createNewTextElement("span", "workedplace__trait-container-name", traitContainer, species[i].nameEN);
  }

  const speciesContainerArr: NodeListOf<HTMLElement> | null = document.querySelectorAll(".workedplace__trait-container");

  speciesContainerArr.forEach(function(elem: Element, i: number) {
    elem.addEventListener("click", function(): void {
      selectSpecies(i);
      speciesContainerArr[i].classList.toggle("workedplace__trait-container_active");
    })
  })
}

export { createSpecies }