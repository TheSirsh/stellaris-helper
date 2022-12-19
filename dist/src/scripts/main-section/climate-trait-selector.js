import { speciesClimateTraits } from "../objects/species-climate-traits.js";
function selectClimateTrait(i) {
    const traitDescriptionTitle = document.querySelector(".trait-descr__title");
    const traitDescriptionImage = document.querySelector(".trait-descr__image");
    const traitDescriptionPlanet = document.querySelector(".trait-descr__planet");
    const traitActive = document.querySelector(".workedplace__trait-container_active");
    if (traitActive) {
        traitActive.classList.remove("workedplace__trait-container_active");
    }
    traitDescriptionTitle.textContent = speciesClimateTraits[i].nameEN;
    traitDescriptionImage.src = speciesClimateTraits[i].image;
    traitDescriptionImage.alt = speciesClimateTraits[i].nameEN;
    traitDescriptionPlanet.textContent = speciesClimateTraits[i].descrEN;
}
export { selectClimateTrait };
