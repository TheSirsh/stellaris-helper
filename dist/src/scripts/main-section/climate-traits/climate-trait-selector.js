import { speciesClimateTraits } from "../../objects/species-climate-traits.js";
function selectClimateTrait(i) {
    const traitDescriptionTitle = document.querySelector(".climate__descr-title");
    const traitDescriptionImage = document.querySelector(".climate__descr-image");
    const traitDescriptionPlanet = document.querySelector(".climate__descr-planet");
    const traitActive = document.querySelector(".climate__trait-container_active");
    if (traitActive) {
        traitActive.classList.remove("climate__trait-container_active");
    }
    traitDescriptionTitle.textContent = speciesClimateTraits[i].nameEN;
    traitDescriptionImage.src = speciesClimateTraits[i].image;
    traitDescriptionImage.alt = speciesClimateTraits[i].nameEN;
    traitDescriptionPlanet.textContent = speciesClimateTraits[i].descrEN;
}
export { selectClimateTrait };
