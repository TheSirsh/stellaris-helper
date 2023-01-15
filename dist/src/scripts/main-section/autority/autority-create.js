import { createWorkedPlace, createTraitList, createDescrBlock } from "../../create-worked-place.js";
import { autoritySectionText } from "./autority-section-text.js";
import { authority } from "./autority-list.js";
import { changeButton } from "../../change-button.js";
import { activateTrait } from "../../activate-trait.js";
import { createCivics } from "../civics/create-civic.js";
function createAutority() {
    let validArray = createValidArray();
    createWorkedPlace(autoritySectionText);
    createTraitList(document.querySelector(".workedplace"), validArray, "authority");
    createDescrBlock("authority", autoritySectionText);
    const autorityContainerArray = document.querySelectorAll(".authority__trait-container");
    autorityContainerArray.forEach(function (elem, i) {
        elem.addEventListener("click", function () {
            const autorityActive = document.querySelector(".authority__trait-container_active");
            if (autorityActive) {
                autorityActive.classList.toggle("authority__trait-container_active");
            }
            activateTrait(document.querySelector(".authority__descr-title"), document.querySelector(".authority__descr-text"), validArray, i);
            localStorage.setItem("authority", validArray[i].trait);
            elem.classList.toggle("authority__trait-container_active");
            const button = document.querySelector(".authority__button");
            if (button) {
                changeButton(button, "authority");
            }
            button.addEventListener("click", createCivics);
        });
    });
}
function createValidArray() {
    let validArray = [];
    let ethicsArr = JSON.parse(localStorage.getItem("ethics"));
    if (ethicsArr[0] === "ethic_gestalt_consciousness") {
        for (let i = 0; i < authority.length; i++) {
            if (authority[i].trait === "auth_hive_mind" || authority[i].trait === "auth_machine_intelligence") {
                validArray.push(authority[i]);
            }
        }
    }
    else {
        let arr = [];
        validArray = [...authority];
        for (let i = 0; i < ethicsArr.length; i++) {
            arr.push(ethicsArr[i].trait);
        }
        for (let i = 0; i < authority.length; i++) {
            if (authority[i].exclude !== undefined) {
                for (let j = 0; j < authority[i].exclude.length; j++) {
                    for (let k = 0; k < arr.length; k++) {
                        if (authority[i].exclude[j] === arr[k]) {
                            delete validArray[i];
                            continue;
                        }
                    }
                }
            }
        }
    }
    return validArray.filter(Boolean);
}
export { createAutority };
