import { ITraits } from "../../interface.js";
import { classes, classesTraitsBiological, classesTraitsHimeMind } from "../species/classes/classes-list.js"
import { climateTraits } from "../species/climate-traits/climate-traits.js";
import { createWorkedPlace, createTraitList, createDescrBlock } from "../../create-worked-place.js";
import { mainSectionContent } from "../../objects/main-section-text.js";

function completeSpeciesTrait() {
  
  let resultArray: Array<ITraits> = [];

  checkLocalStorage(resultArray, classes, "species", "NOTVALUEABLE-biological");
  checkLocalStorage(resultArray, classesTraitsBiological, "origin")
  checkLocalStorage(resultArray, classesTraitsHimeMind, "bio", "NOTVALUEABLE-botanical");
  checkLocalStorage(resultArray, climateTraits, "climate");
  let arr = JSON.parse(localStorage.getItem("traits"))
  resultArray = resultArray.concat(arr)

  createWorkedPlace("trait", mainSectionContent);
  createTraitList(document.querySelector(".trait__workedplace"), resultArray, "trait");
  createDescrBlock("trait", mainSectionContent);
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