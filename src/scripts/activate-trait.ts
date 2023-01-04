import { createNewTextElement } from "./create-functions.js";
import { ITraits } from "./interface.js";

function activateTrait(destrTitle: HTMLElement, descrText: HTMLElement, traitArray: Array<ITraits>, i: number):void {
  destrTitle.textContent = traitArray[i].nameEN;
  descrText.textContent = "";
  for (let j = 0; j < traitArray[i].traits.length; j++) {
    if (traitArray[i].traits[j][0] === "bad") { createNewTextElement("span", "red", descrText, traitArray[i].traits[j][1]);} 
      else if (traitArray[i].traits[j][0] === "good") { createNewTextElement("span", "green", descrText, traitArray[i].traits[j][1]); }
        else if (traitArray[i].traits[j][0] === "neutral") { createNewTextElement("span", "yellow", descrText, traitArray[i].traits[j][1]); }
    descrText.innerHTML += " " + traitArray[i].traits[j][2] + "<br>";
  }
} 

export { activateTrait }
