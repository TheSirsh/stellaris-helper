import { changeButton } from "../../change-button.js";
import { createWorkedPlace, createTraitList, createDescrBlock } from "../../create-worked-place.js";
import { planetModifierText } from "./planet-modifier-text.js";
import { planetModifier } from "../../objects/planet-modifier.js";
import { mutuallyChecking } from "../../mutually-checking.js";
function createPlanetModifier() {
    createWorkedPlace(planetModifierText);
    const workedplace = document.querySelector(".workedplace");
    createTraitList(workedplace, planetModifier, "");
    createDescrBlock("", planetModifierText);
    const speciesContainerArray = document.querySelectorAll(".trait-container");
    speciesContainerArray.forEach(function (elem, i) {
        elem.addEventListener("click", function () {
            speciesContainerArray[i].classList.remove("red");
            let isActive;
            if (speciesContainerArray[i].classList.contains("trait-container_active")) {
                isActive = true;
                speciesContainerArray[i].classList.remove("trait-container_active");
            }
            else {
                isActive = false;
                speciesContainerArray[i].classList.add("trait-container_active");
            }
            mutuallyChecking(i, planetModifier, isActive, "");
            const button = document.querySelector(".button");
            if (button) {
                changeButton(button, "");
            }
        });
    });
}
export { createPlanetModifier };
