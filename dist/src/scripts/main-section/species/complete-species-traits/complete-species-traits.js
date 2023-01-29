import { classes, classesTraitsBiological, classesTraitsHimeMind } from "../classes/classes-list.js";
import { climateTraits } from "../climate-traits/climate-traits-list.js";
import { createWorkedPlace, createTraitList, createDescrBlock, createCodeBlock } from "../../../create-worked-place.js";
import { completeTraitSectionContent } from "./compete-species-trait-text.js";
import { createNewTextElement } from "../../../create-functions.js";
import { summarizeArray } from "../../../summarize-array.js";
import { checkLocalStorage } from "../../../checking-local-storage.js";
function completeSpeciesTrait() {
    let resultArray = [];
    checkLocalStorage(resultArray, classes, "classes", "NOTVALUEABLE-biological");
    checkLocalStorage(resultArray, classesTraitsBiological, "origin");
    checkLocalStorage(resultArray, classesTraitsHimeMind, "bio", "NOTVALUEABLE-botanical");
    checkLocalStorage(resultArray, climateTraits, "climate");
    let arr = JSON.parse(localStorage.getItem("traits"));
    resultArray = resultArray.concat(arr);
    createWorkedPlace(completeTraitSectionContent);
    createTraitList(document.querySelector(".workedplace"), resultArray, "completed");
    createDescrBlock("completed", completeTraitSectionContent);
    document.querySelector(".completed__button").remove();
    createCodeBlock("Stellaris Inner Code", "traits", resultArray);
    const textBlock = document.querySelector(".completed__descr-text");
    textBlock.textContent = "";
    let traitList = [];
    for (let i = 0; i < resultArray.length; i++) {
        for (let j = 0; j < resultArray[i].traits.length; j++) {
            traitList.push(resultArray[i].traits[j]);
        }
    }
    const reducedTraitList = summarizeArray(traitList);
    for (let i = 0; i < reducedTraitList.length; i++) {
        if (reducedTraitList[i]) {
            if (reducedTraitList[i][0] === "bad") {
                createNewTextElement("span", "red", textBlock, reducedTraitList[i][1]);
            }
            else if (reducedTraitList[i][0] === "good") {
                createNewTextElement("span", "green", textBlock, reducedTraitList[i][1]);
            }
            textBlock.innerHTML += " " + reducedTraitList[i][2] + "<br>";
        }
    }
}
export { completeSpeciesTrait };
