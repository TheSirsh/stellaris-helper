import { changeButton } from "../../change-button.js";
import { createWorkedPlace, createTraitList, createDescrBlock } from "../../create-worked-place.js";
import { planetModifierText } from "./planet-modifier-text.js";
import { planetModifier } from "../../objects/planet-modifier.js";
import { mutuallyChecking } from "../../mutually-checking.js";
function createPlanetModifier() {
    createWorkedPlace("planet", planetModifierText);
    const workedplace = document.querySelector(".planet__workedplace");
    createTraitList(workedplace, planetModifier, "planet");
    createDescrBlock("planet", planetModifierText);
    const speciesContainerArray = document.querySelectorAll(".planet__trait-container");
    speciesContainerArray.forEach(function (elem, i) {
        elem.addEventListener("click", function () {
            speciesContainerArray[i].classList.remove("red");
            let isActive;
            if (speciesContainerArray[i].classList.contains("planet__trait-container_active")) {
                isActive = true;
                speciesContainerArray[i].classList.remove("planet__trait-container_active");
            }
            else {
                isActive = false;
                speciesContainerArray[i].classList.add("planet__trait-container_active");
            }
            mutuallyChecking(i, planetModifier, isActive, "planet");
            const button = document.querySelector(".planet__button");
            if (button) {
                changeButton(button, "planet");
            }
        });
    });
}
export { createPlanetModifier };