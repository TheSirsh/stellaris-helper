import { createNewTextElement } from "../../create-functions.js";
import { ITraits } from "../../interface";

function selectLeaderTrait(i: number, arr: Array<ITraits>, active: boolean): void { 

  const traitDescriptionTitle: HTMLElement = document.querySelector(".leader-traits__descr-title")!;
  traitDescriptionTitle.textContent = arr[i].nameEN;

  if (arr[i].exclude !== undefined) {
    const traitActive: NodeListOf<HTMLElement> = document.querySelectorAll(".leader-traits__trait-container_active");
    for (let j = 0; j < traitActive.length; j++) {
      for (let k = 0; k < arr[i].exclude.length; k++) {
        if (traitActive[j].classList.contains(`${arr[i].exclude[k]}`)) {
          traitActive[j].classList.remove("leader-traits__trait-container_active")
        }
      }
    }
  }

  const notActiveArr: NodeListOf<HTMLElement> = document.querySelectorAll(".leader-traits__trait-container");
  notActiveArr.forEach(function(elem) {
    if (arr[i].exclude !== undefined) {
      for (let j = 0; j < arr[i].exclude.length; j++) {
        if (elem.classList.contains(`${arr[i].exclude[j]}`))
          if (active) {elem.classList.remove("red");} 
            else { elem.classList.add("red"); }
      }
    }
  })

  const traitDescriptionTrait: HTMLElement = document.querySelector(".leader-traits__descr-text")!;
  traitDescriptionTrait.textContent = "";
  for (let j = 0; j < arr[i].traits.length; j++) {
    if (arr[i].traits[j][0] === "bad") {
      const traitDescriptionNumber = createNewTextElement("span", "red", traitDescriptionTrait, arr[i].traits[j][1]);
    } else if (arr[i].traits[j][0] === "good") {
       const traitDescriptionNumber = createNewTextElement("span", "green", traitDescriptionTrait, arr[i].traits[j][1]);
    } else if (arr[i].traits[j][0] === "neutral") {
      const traitDescriptionNumber = createNewTextElement("span", "yellow", traitDescriptionTrait, arr[i].traits[j][1]);
    }
    traitDescriptionTrait.innerHTML += " " + arr[i].traits[j][2] + "<br>";
  }
}

export { selectLeaderTrait }