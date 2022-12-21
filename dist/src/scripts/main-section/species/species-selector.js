import { species, speciesTraitsNotHiveMind, speciesTraitsBiological } from "../../objects/species.js";
import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "../../create-functions.js";
import { selectSpeciesNotHM } from "../species/species-selector-nothm.js";
import { selectSpeciesBio } from "../species/species-selector-bio.js";
function selectSpecies(i) {
    const speciesActive = document.querySelector(".species__container_active");
    if (speciesActive) {
        speciesActive.classList.toggle("species__container_active");
    }
    const speciesTraitlistAdditional = document.querySelectorAll(".species__traitlist_additional");
    if (speciesTraitlistAdditional) {
        speciesTraitlistAdditional.forEach(element => { element.remove(); });
    }
    if (i !== 0) {
        const speciesTraitBlock = document.querySelector(".species__traitlist-block");
        if (i !== 1) {
            const speciesTraitlistAdditional = createNewSimpleElement("ul", "species__traitlist_additional", speciesTraitBlock);
            for (let i = 0; i < Object.keys(speciesTraitsNotHiveMind).length; i++) {
                const traitContainer = createNewSimpleElement("li", "species__container_not", speciesTraitlistAdditional);
                const traitContainerImage = createNewImageElement("species__container-image", traitContainer, speciesTraitsNotHiveMind[i].icon, speciesTraitsNotHiveMind[i].nameEN);
                const traitContainerName = createNewTextElement("span", "species__container-name", traitContainer, speciesTraitsNotHiveMind[i].nameEN);
            }
            const speciesTraitNotHM = document.querySelectorAll(".species__container_not");
            speciesTraitNotHM.forEach(function (elem, n) {
                elem.addEventListener("click", function () {
                    selectSpeciesNotHM(n);
                    localStorage.setItem("origin", speciesTraitsNotHiveMind[n].trait);
                    speciesTraitNotHM[n].classList.toggle("species__container_not_active");
                });
            });
        }
        const speciesTraitlistAdditional = createNewSimpleElement("ul", "species__traitlist_additional", speciesTraitBlock);
        for (let i = 0; i < Object.keys(speciesTraitsBiological).length; i++) {
            const traitContainer = createNewSimpleElement("li", "species__container_bio", speciesTraitlistAdditional);
            const traitContainerImage = createNewImageElement("species__container-image", traitContainer, speciesTraitsBiological[i].icon, speciesTraitsBiological[i].nameEN);
            const traitContainerName = createNewTextElement("span", "species__container-name", traitContainer, speciesTraitsBiological[i].nameEN);
        }
        const speciesTraitBio = document.querySelectorAll(".species__container_bio");
        speciesTraitBio.forEach(function (elem, n) {
            elem.addEventListener("click", function () {
                selectSpeciesBio(n);
                localStorage.setItem("bio", speciesTraitsBiological[n].trait);
                speciesTraitBio[n].classList.toggle("species__container_bio_active");
            });
        });
    }
    const speciesDescriptionTitle = document.querySelector(".species__descr-title");
    speciesDescriptionTitle.textContent = species[i].nameEN;
    const speciesDescriptionText = document.querySelector(".species__descr-text");
    speciesDescriptionText.textContent = "";
    for (let j = 0; j < species[i].traits.length; j++) {
        if (species[i].traits[j][0] === "bad") {
            const speciesDescription = createNewTextElement("span", "red", speciesDescriptionText, species[i].traits[j][1]);
        }
        else if (species[i].traits[j][0] === "good") {
            const speciesDescription = createNewTextElement("span", "green", speciesDescriptionText, species[i].traits[j][1]);
        }
        speciesDescriptionText.innerHTML += " " + species[i].traits[j][2] + "<br>";
    }
}
export { selectSpecies };
