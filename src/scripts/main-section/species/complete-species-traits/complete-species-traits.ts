import { ITraits } from "../../../interface.js";
import { classes, classesTraitsBiological, classesTraitsHimeMind } from "../classes/classes-list.js"
import { climateTraits } from "../climate-traits/climate-traits-list.js";
import { createWorkedPlace, createTraitList, createDescrBlock } from "../../../create-worked-place.js";
import { completeTraitSectionContent } from "./compete-species-trait-text.js";
import { createNewTextElement } from "../../../create-functions.js";
import { createCodeBlock } from "../../../create-code-block.js";

function completeSpeciesTrait() {
  
  let resultArray: Array<ITraits> = [];

  checkLocalStorage(resultArray, classes, "classes", "NOTVALUEABLE-biological");
  checkLocalStorage(resultArray, classesTraitsBiological, "origin")
  checkLocalStorage(resultArray, classesTraitsHimeMind, "bio", "NOTVALUEABLE-botanical");
  checkLocalStorage(resultArray, climateTraits, "climate");
  let arr = JSON.parse(localStorage.getItem("traits"))
  resultArray = resultArray.concat(arr)

  createWorkedPlace("completed", completeTraitSectionContent);
  createTraitList(document.querySelector(".completed__workedplace"), resultArray, "completed");
  createDescrBlock("completed", completeTraitSectionContent);
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

  let reducedTraitList: Array<Array<string>> = [];

  for (let i = 0; i < traitList.length; i++) {
    if (traitList[i]) {

      if (traitList[i][1] === "") {
        reducedTraitList.push(traitList[i]);
        continue
      }

      let b: Array<string> = [];
      let isMinus: boolean = false;
      let num: number = 0;
      let isProsect: boolean = false;

      if (traitList[i][1][traitList[i][1].length - 1] === "%") { isProsect = true; } 
        else { isProsect = false }
      
        isMinus = false;
        b = [traitList[i][0], "", traitList[i][2]];
        num = 0;

        if (isProsect) {
          if (traitList[i][1][0] === "-") { num = -parseInt(traitList[i][1].slice(1, -1)); isMinus = true; } 
            else { num = parseInt(traitList[i][1].slice(0, -1)); }

          for (let j = i + 1; j < traitList.length; j++) {
            if (traitList[j]) {
              if (traitList[i][2] === traitList[j][2]) {
                num += parseInt(traitList[j][1].slice(0, -1));
                delete traitList[j];
              }
            }
          }
        } else {
          if (traitList[i][1][0] === "-") { num = -parseInt(traitList[i][1].slice(1)); isMinus = true; } 
            else { num = parseInt(traitList[i][1]); }

          for (let j = i + 1; j < traitList.length; j++) {
            if (traitList[j]) {
              if (traitList[i][2] === traitList[j][2]) {
                num += parseInt(traitList[j][1].slice(0, -1))
                delete traitList[j]
              }
            }
          }
        }

      if (isMinus) { b[1] = "-" +  Math.abs(num).toString(); } 
        else { b[1] = "+" + num.toString(); }
      if (isProsect) { b[1] += "%"; }  

      reducedTraitList.push(b);
    }
  }

  for (let i = 0; i < reducedTraitList.length; i++) {
    if (reducedTraitList[i]) {
        if (reducedTraitList[i][0] === "bad") { createNewTextElement("span", "red", textBlock, reducedTraitList[i][1]); } 
          else if (reducedTraitList[i][0] === "good") { createNewTextElement("span", "green", textBlock, reducedTraitList[i][1]); }
        textBlock.innerHTML += " " + reducedTraitList[i][2] + "<br>";
    }
  }
}

function checkLocalStorage(currentArray: Array<ITraits>, dataArray: Array<ITraits>, localValue: string, checkValue?: string) {
  if (localStorage.getItem(localValue) !== undefined && localStorage.getItem(localValue) !== checkValue) {
    for (let i = 0; i < dataArray.length; i++) {
      if (localStorage.getItem(localValue) === dataArray[i].trait) {
        currentArray.push(dataArray[i]);
        continue
      }
    }
  }
}

export { completeSpeciesTrait }