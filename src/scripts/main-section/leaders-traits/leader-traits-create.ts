import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "../../create-functions.js";
import { leaderSectionText } from "./leader-section-text.js";
import { createWorkedPlace, createTraitList, createDescrBlock } from "../../create-worked-place.js";
import { checkingLeader } from "../../checking-leader-function.js";
import { ITraits } from "../../interface.js";
import { selectLeaderTrait } from "./leader-traits-selector.js";
import { changeButton } from "../../change-button.js";
import { completeLeaderTrait } from "./leader-traits-completed.js";

function createLeaderTraits(): void {

  let validTraits: Array<ITraits> = checkingLeader()

  createWorkedPlace("leader-traits", leaderSectionText);
  const workedplace = document.querySelector(".leader-traits__workedplace");

  const traitlistBlock = createNewSimpleElement("div", "leader-traits__traitlist-block", workedplace)

  createTraitList(traitlistBlock, validTraits, "leader-traits");
  createDescrBlock("leader-traits", leaderSectionText);

  const button : HTMLElement = document.querySelector(".leader-traits__button");
    changeButton(button, "leader-traits");
  button.addEventListener("click", function() {
    let traits = document.querySelectorAll(".leader-traits__trait-container");
    let traitsActive: Array<ITraits> = [];
    for (let i = 0; i < traits.length; i++) {
      if (traits[i].classList.contains("leader-traits__trait-container_active")) {
        traitsActive.push(validTraits[i])
      }
    }
    localStorage.setItem("traits", JSON.stringify(traitsActive))
    completeLeaderTrait()
  })

  const traitContainerArr = document.querySelectorAll(".leader-traits__trait-container");

  traitContainerArr.forEach(function(elem: Element, i: number) {
    elem.addEventListener("click", function(): void {
      traitContainerArr[i].classList.remove("red");
      let isActive: boolean;
      if (traitContainerArr[i].classList.contains("leader-traits__trait-container_active")) {
        isActive = true;
        traitContainerArr[i].classList.remove("leader-traits__trait-container_active");
      } else {
        isActive = false;
        traitContainerArr[i].classList.add("leader-traits__trait-container_active");
      }
      selectLeaderTrait(i, validTraits, isActive);
    })
  })
}

export { createLeaderTraits }