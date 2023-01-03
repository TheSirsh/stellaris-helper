import { ITraits } from "../../../interface.js";
import { classes, classesTraitsBiological, classesTraitsHimeMind } from "../classes/classes-list.js"
import { climateTraits } from "../climate-traits/climate-traits-list.js";
import { createWorkedPlace, createTraitList, createDescrBlock } from "../../../create-worked-place.js";
import { mainSectionContent } from "../../../objects/main-section-text.js";
import { createNewTextElement } from "../../../create-functions.js";

function completeSpeciesTrait() {
  
  let resultArray: Array<ITraits> = [];

  checkLocalStorage(resultArray, classes, "classes", "NOTVALUEABLE-biological");
  checkLocalStorage(resultArray, classesTraitsBiological, "origin")
  checkLocalStorage(resultArray, classesTraitsHimeMind, "bio", "NOTVALUEABLE-botanical");
  checkLocalStorage(resultArray, climateTraits, "climate");
  let arr = JSON.parse(localStorage.getItem("traits"))
  resultArray = resultArray.concat(arr)

  createWorkedPlace("completed", mainSectionContent);
  createTraitList(document.querySelector(".completed__workedplace"), resultArray, "completed");
  createDescrBlock("completed", mainSectionContent);

  const textBlock = document.querySelector(".completed__descr-text");
  textBlock.textContent = "";


  let traitList: Array<Array<string>> = [];

    for (let i = 0; i < resultArray.length; i++) {
      for (let j = 0; j < resultArray[i].traits.length; j++) {
        traitList.push(resultArray[i].traits[j])
      }
    }

  let reducedTraitList: Array<Array<string>> = [];


  for (let i = 0; i < traitList.length; i++) {
    reducedTraitList[i] = traitList[i]
    if (traitList[i]) {
      for (let j = i + 1; j < traitList.length; j++) {
        if (traitList[j]) {
          if (traitList[i][2] === traitList[j][2]) {
            reducedTraitList[i][1] += traitList[j][1];
            delete traitList[j]
          }
        }
      }
    }
  }


  for (let i = 0; i < reducedTraitList.length; i++) 
  if (reducedTraitList[i]) {
    {
      if (reducedTraitList[i][0] === "bad") {
        createNewTextElement("span", "red", textBlock, reducedTraitList[i][1]);
      } else if (reducedTraitList[i][0] === "good") {
        createNewTextElement("span", "green", textBlock, reducedTraitList[i][1]);
      }
      textBlock.innerHTML += " " + reducedTraitList[i][2] + "<br>";
    }
  }

}

function checkLocalStorage(currentArray: Array<ITraits>, dataArray: Array<ITraits>, localValue: string, checkValue?: string) {
  if (localStorage.getItem(localValue) !== undefined && localStorage.getItem(localValue) !== checkValue) {
    for (let i = 0; i < dataArray.length; i++) {
      if (localStorage.getItem(localValue) === dataArray[i].trait) {
        currentArray.push(dataArray[i]);
        break
      }
    }
  }
}

export { completeSpeciesTrait }