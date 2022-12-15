import { speciesTraitsNotHiveMind, speciesTraitsBiological } from "../../objects/species.js";
import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "../../create-functions.js";
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
}
export { selectSpecies };
