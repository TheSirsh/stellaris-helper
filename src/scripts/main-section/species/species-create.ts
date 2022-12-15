import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "../../create-functions.js";
import { speciesSectionText } from "../../objects/species-section-text.js";
import { species } from "../../objects/species.js";
import { selectSpecies } from "./species-selector.js";
import { createMainSectionClimateTrait } from "../climate-traits/climate-traits-create.js"

function createSpecies(): void {
const container: HTMLElement = document.querySelector(".main-section__container")!;
container.remove();

const mainSection: HTMLElement = document.querySelector(".main-section")!;

const mainSectionContainer = createNewSimpleElement("div", "main-section__container", mainSection);
  const mainSectionTitle = createNewTextElement("h2", "main-section__title", mainSectionContainer, speciesSectionText["titleEN"]);
  const mainSectionSubTitle = createNewTextElement("h3", "main-section__subtitle", mainSectionContainer, speciesSectionText["subtitleEN"]);

  const speciesWorkedPlace = createNewSimpleElement("div", "species-workedplace", mainSectionContainer);
  const speciesTraitlistBlock = createNewSimpleElement("div", "species__traitlist-block", speciesWorkedPlace);
    const speciesTraitListOrigin = createNewSimpleElement("ul", "species__traitlist_origin", speciesTraitlistBlock);

  for (let i = 0; i < Object.keys(species).length; i++) {
    const traitContainer = createNewSimpleElement("li", "species__container", speciesTraitListOrigin);
    const traitContainerImage = createNewImageElement("species__container-image", traitContainer, species[i].icon, species[i].nameEN);
      const traitContainerName = createNewTextElement("span", "species__container-name", traitContainer, species[i].nameEN);
  }

  const speciesDescriptionBlock = createNewSimpleElement("div", "species__descr-block", speciesWorkedPlace);
    const speciesDescriptionTitle = createNewTextElement("h3", "species__descr-title", speciesDescriptionBlock, speciesSectionText["descriptionBlockTitleEN"]);
    const speciesDescriptionText = createNewTextElement("p", "species__descr-text", speciesDescriptionBlock, speciesSectionText["descriptionBlockTitleEN"]);
    const speciesButton = createNewTextElement("div", "species__button", speciesDescriptionBlock, speciesSectionText["buttonEN"]);

    const speciesContainerArr: NodeListOf<HTMLElement> | null = document.querySelectorAll(".species__container");
    speciesContainerArr.forEach(function(elem: Element, i: number) {
      elem.addEventListener("click", function(): void {
        localStorage.setItem("species", species[i].trait);
        selectSpecies(i);
        speciesContainerArr[i].classList.toggle("species__container_active");
        speciesButton.classList.remove("species__button");
        speciesButton.classList.add("species__button_active");
        speciesButton.addEventListener("click", createMainSectionClimateTrait)
      })
    })
  }

export { createSpecies }