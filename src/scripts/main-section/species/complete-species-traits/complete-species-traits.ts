import { ITraits } from "../../../interface.js";
import { classes, classesTraitsBiological, classesTraitsHimeMind } from "../classes/classes-list.js"
import { climateTraits } from "../climate-traits/climate-traits-list.js";
import { createWorkedPlace, createTraitList, createDescrBlock } from "../../../create-worked-place.js";
import { mainSectionContent } from "../../../objects/main-section-text.js";
import { createNewTextElement } from "../../../create-functions.js";

function completeSpeciesTrait() {
  
  let resultArray: Array<ITraits> = [];

  checkLocalStorage(resultArray, classes, "species", "NOTVALUEABLE-biological");
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


  for (let i=0; i < resultArray.length; i++) {
    for (let j = 0; j < resultArray[i].traits.length; j++) {
      if (resultArray[i].traits[j][0] === "bad") {
        createNewTextElement("span", "red", textBlock, resultArray[i].traits[j][1]);
      } else if (resultArray[i].traits[j][0] === "good") {
        createNewTextElement("span", "green", textBlock, resultArray[i].traits[j][1]);
      }
      textBlock.innerHTML += " " + resultArray[i].traits[j][2] + "<br>";
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