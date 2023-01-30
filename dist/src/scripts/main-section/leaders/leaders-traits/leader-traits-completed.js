import { createWorkedPlace, createTraitList, createDescrBlock, createCodeBlock } from "../../../create-worked-place.js";
import { createNewTextElement } from "../../../create-functions.js";
import { leaderSectionText } from "./leader-section-text.js";
import { summarizeArray } from "../../../summarize-array.js";
function completeLeaderTrait() {
    let resultArray = [];
    let arr = JSON.parse(localStorage.getItem("traits"));
    resultArray = resultArray.concat(arr);
    createWorkedPlace(leaderSectionText);
    createTraitList(document.querySelector(".workedplace"), resultArray, "");
    createDescrBlock("", leaderSectionText);
    document.querySelector(".button").remove();
    createCodeBlock("Stellaris Inner Code", "traits", resultArray);
    const textBlock = document.querySelector(".descr-text");
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
export { completeLeaderTrait };
