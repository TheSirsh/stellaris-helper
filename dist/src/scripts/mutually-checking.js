import { createNewTextElement } from "./create-functions.js";
function mutuallyChecking(i, arr, active, sectionName) {
    const traitDescriptionTitle = document.querySelector(`.${sectionName}__descr-title`);
    traitDescriptionTitle.textContent = arr[i].nameEN;
    if (arr[i].exclude !== undefined) {
        const traitActive = document.querySelectorAll(`.${sectionName}__trait-container_active`);
        for (let j = 0; j < traitActive.length; j++) {
            for (let k = 0; k < arr[i].exclude.length; k++) {
                if (traitActive[j].classList.contains(`${arr[i].exclude[k]}`)) {
                    traitActive[j].classList.remove(`${sectionName}__trait-container_active`);
                }
            }
        }
    }
    const notActiveArr = document.querySelectorAll(`.${sectionName}__trait-container`);
    notActiveArr.forEach(function (elem) {
        if (arr[i].exclude !== undefined) {
            for (let j = 0; j < arr[i].exclude.length; j++) {
                if (elem.classList.contains(`${arr[i].exclude[j]}`))
                    if (active) {
                        elem.classList.remove("red");
                    }
                    else {
                        elem.classList.add("red");
                    }
            }
        }
    });
    const traitDescriptionTrait = document.querySelector(`.${sectionName}__descr-text`);
    traitDescriptionTrait.textContent = "";
    for (let j = 0; j < arr[i].traits.length; j++) {
        if (arr[i].traits[j][0] === "bad") {
            createNewTextElement("span", "red", traitDescriptionTrait, arr[i].traits[j][1]);
        }
        else if (arr[i].traits[j][0] === "good") {
            createNewTextElement("span", "green", traitDescriptionTrait, arr[i].traits[j][1]);
        }
        traitDescriptionTrait.innerHTML += " " + arr[i].traits[j][2] + "<br>";
    }
}
export { mutuallyChecking };
