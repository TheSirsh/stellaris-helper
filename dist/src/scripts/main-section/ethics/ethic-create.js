import { createWorkedPlace, createTraitList, createDescrBlock } from "../../create-worked-place.js";
import { ethicSectionText } from "./ethic-section-text.js";
import { ethics } from "./ethic-list.js";
import { changeButton } from "../../change-button.js";
import { mutuallyChecking } from "../../mutually-checking.js";
function createEthics() {
    createWorkedPlace("ethic", ethicSectionText);
    createTraitList(document.querySelector(".ethic__workedplace"), ethics, "ethic");
    createDescrBlock("ethic", ethicSectionText);
    const speciesContainerArray = document.querySelectorAll(".ethic__trait-container");
    speciesContainerArray.forEach(function (elem, i) {
        elem.addEventListener("click", function () {
            speciesContainerArray[i].classList.remove("red");
            let isActive;
            if (speciesContainerArray[i].classList.contains("ethic__trait-container_active")) {
                isActive = true;
                speciesContainerArray[i].classList.remove("ethic__trait-container_active");
            }
            else {
                isActive = false;
                speciesContainerArray[i].classList.add("ethic__trait-container_active");
            }
            mutuallyChecking(i, ethics, isActive, "ethic");
            const button = document.querySelector(".ethic__button");
            if (button) {
                changeButton(button, "ethic");
            }
        });
    });
}
export { createEthics };
