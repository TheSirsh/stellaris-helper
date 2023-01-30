import { ITraits } from "../../../interface.js";
import { activateTrait } from "../../../activate-trait.js";

function selectLeaderTrait(i: number, traitArray: Array<ITraits>, active: boolean): void { 

  if (traitArray[i].exclude !== undefined) {
    const traitActive: NodeListOf<HTMLElement> = document.querySelectorAll(".trait-container_active");
    for (let j = 0; j < traitActive.length; j++) {
      for (let k = 0; k < traitArray[i].exclude.length; k++) {
        if (traitActive[j].classList.contains(`${traitArray[i].exclude[k]}`)) {
          traitActive[j].classList.remove("trait-container_active")
        }
      }
    }
  }

  const notActiveArr: NodeListOf<HTMLElement> = document.querySelectorAll(".trait-container");
  notActiveArr.forEach(function(elem) {
    if (traitArray[i].exclude !== undefined) {
      for (let j = 0; j < traitArray[i].exclude.length; j++) {
        if (elem.classList.contains(`${traitArray[i].exclude[j]}`))
          if (active) {elem.classList.remove("red");} 
            else { elem.classList.add("red"); }
      }
    }
  })

  activateTrait(document.querySelector(".descr-title"), document.querySelector(".descr-text"), traitArray, i)
}

export { selectLeaderTrait }