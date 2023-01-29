import { createNewTextElement } from "./create-functions.js";
import { ITraits } from "./interface.js";

function mutuallyChecking(i: number, arr: Array<ITraits>, active: boolean, sectionName: string): void { 

  const traitDescriptionTitle: HTMLElement = document.querySelector(`.${sectionName}descr-title`)!;
  traitDescriptionTitle.textContent = arr[i].nameEN;

  if (arr[i].exclude !== undefined) {
    const traitActive: NodeListOf<HTMLElement> = document.querySelectorAll(`.${sectionName}trait-container_active`);
    for (let j = 0; j < traitActive.length; j++) {
      for (let k = 0; k < arr[i].exclude.length; k++) {
        if (traitActive[j].classList.contains(`${arr[i].exclude[k]}`)) {
          traitActive[j].classList.remove(`${sectionName}trait-container_active`)
        }
      }
    }
  }

  const notActiveArr: NodeListOf<HTMLElement> = document.querySelectorAll(`.${sectionName}trait-container`);
  notActiveArr.forEach(function(elem) {
    if (arr[i].exclude !== undefined) {
      for (let j = 0; j < arr[i].exclude.length; j++) {
        if (elem.classList.contains(`${arr[i].exclude[j]}`))
          if (active) { elem.classList.remove("red");} 
            else { elem.classList.add("red"); }
      }
    }
  })

  const traitDescriptionTrait: HTMLElement = document.querySelector(`.${sectionName}descr-text`)!;
  traitDescriptionTrait.textContent = "";
  for (let j = 0; j < arr[i].traits.length; j++) {
    if (arr[i].traits[j][0] === "bad") {
      createNewTextElement("span", "red", traitDescriptionTrait, arr[i].traits[j][1]);
    } else if (arr[i].traits[j][0] === "good") {
       createNewTextElement("span", "green", traitDescriptionTrait, arr[i].traits[j][1]);
    } else if (arr[i].traits[j][0] === "neutral") {
      createNewTextElement("span", "yellow", traitDescriptionTrait, arr[i].traits[j][1]);
   }
    traitDescriptionTrait.innerHTML += " " + arr[i].traits[j][2] + "<br>";
  }
}

export { mutuallyChecking }