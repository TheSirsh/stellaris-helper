import { planetModifier } from "../../objects/planet-modifier.js";
import { activateTrait } from "../../activate-trait.js";
function selectPlanetModifier(i) {
    const planetActive = document.querySelector(".planet__trait-container_active");
    if (planetActive) {
        planetActive.classList.toggle("planet__trait-container_active");
    }
    activateTrait(document.querySelector(".planet__descr-title"), document.querySelector(".planet__descr-text"), planetModifier, i);
}
export { selectPlanetModifier };
