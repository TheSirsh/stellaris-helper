import { species, speciesTraitsBiological, speciesTraitsHimeMind } from "../../objects/species.js"
import { createNewTextElement } from "../../create-functions.js";
import { selectSpeciesNotHM } from "../species/species-selector-nothm.js";
import { selectSpeciesBio } from "../species/species-selector-bio.js";
import { createTraitList } from "../../create-worked-place.js";

function selectSpecies(i: number): void {

    const speciesActive: HTMLElement | null = document.querySelector(".species__trait-container_active");
    if (speciesActive) { speciesActive.classList.toggle("species__trait-container_active"); }

  const speciesHM: HTMLElement | null = document.querySelector(".species-hm__traitlist");
  if (speciesHM) { speciesHM.remove()} 
  const speciesBio: HTMLElement | null = document.querySelector(".species-bio__traitlist");
  if (speciesBio) { speciesBio.remove()} 
  
  if (i !== 0) {
    const speciesTraitBlock: HTMLElement = document.querySelector(".species__traitlist-block");

    if (i !== 1 ) {

      createTraitList(speciesTraitBlock, speciesTraitsBiological, "species-bio");

      const speciesTraitNotHM: NodeListOf<HTMLElement> | null = document.querySelectorAll(".species-bio__trait-container");

      speciesTraitNotHM.forEach(function(elem: Element, n: number) {
        elem.addEventListener("click", function(): void {
          selectSpeciesNotHM(n);
          localStorage.setItem("origin", speciesTraitsBiological[n].trait);
          elem.classList.toggle("species-bio__trait-container_active");
        })
      })
    }

    createTraitList(speciesTraitBlock, speciesTraitsHimeMind, "species-hm")

    const speciesTraitBio: NodeListOf<HTMLElement> | null = document.querySelectorAll(".species-hm__trait-container");
    speciesTraitBio.forEach(function(elem: Element, n: number) {
      elem.addEventListener("click", function(): void {
        selectSpeciesBio(n);
        localStorage.setItem("bio", speciesTraitsHimeMind[n].trait);
        speciesTraitBio[n].classList.toggle("species-hm__trait-container_active");
      })
    })
  }

  const speciesDescriptionTitle: HTMLElement = document.querySelector(".species__descr-title");
  speciesDescriptionTitle.textContent = species[i].nameEN;
  const speciesDescriptionText: HTMLElement = document.querySelector(".species__descr-text");
  speciesDescriptionText.textContent = "";
  for (let j = 0; j < species[i].traits.length; j++) {
    if (species[i].traits[j][0] === "bad") {
      createNewTextElement("span", "red", speciesDescriptionText, species[i].traits[j][1]);
    } else if (species[i].traits[j][0] === "good") {
      createNewTextElement("span", "green", speciesDescriptionText, species[i].traits[j][1]);
    }
   speciesDescriptionText.innerHTML += " " + species[i].traits[j][2] + "<br>";
  }
}

export { selectSpecies }