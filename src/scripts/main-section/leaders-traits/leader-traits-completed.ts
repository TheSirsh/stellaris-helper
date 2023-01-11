import { ITraits } from "../../interface.js";
import { createWorkedPlace, createTraitList, createDescrBlock } from "../../create-worked-place.js";
import { createNewTextElement } from "../../create-functions.js";
import { createCodeBlock } from "../../create-code-block.js";
import { leaderSectionText } from "./leader-section-text.js";
import { summarizeArray } from "../../summarize-array.js";

function completeLeaderTrait() {
  let resultArray: Array<ITraits> = [];
  let arr = JSON.parse(localStorage.getItem("traits"));
  resultArray = resultArray.concat(arr);

  createWorkedPlace("completed", leaderSectionText);
  createTraitList(document.querySelector(".completed__workedplace"), resultArray, "completed");
  createDescrBlock("completed", leaderSectionText);
    document.querySelector(".completed__button").remove();

  createCodeBlock("completed", "Stellaris Inner Code", "traits", resultArray);

  const textBlock = document.querySelector(".completed__descr-text");
    textBlock.textContent = "";

  let traitList: Array<Array<string>> = [];
    for (let i = 0; i < resultArray.length; i++) {
      for (let j = 0; j < resultArray[i].traits.length; j++) {
        traitList.push(resultArray[i].traits[j])
      }
    }

  const reducedTraitList = summarizeArray(traitList)

  for (let i = 0; i < reducedTraitList.length; i++) {
    if (reducedTraitList[i]) {
        if (reducedTraitList[i][0] === "bad") { createNewTextElement("span", "red", textBlock, reducedTraitList[i][1]); } 
          else if (reducedTraitList[i][0] === "good") { createNewTextElement("span", "green", textBlock, reducedTraitList[i][1]); }
        textBlock.innerHTML += " " + reducedTraitList[i][2] + "<br>";
    }
  }
}

export{ completeLeaderTrait }