import { createNewSimpleElement } from "../../create-functions.js";
import { leaderSectionText } from "./leader-section-text.js";
import { createWorkedPlace, createTraitList, createDescrBlock } from "../../create-worked-place.js";
import { checkingLeader } from "../../checking-leader-function.js";
import { ITraits } from "../../interface.js";
import { changeButton } from "../../change-button.js";
import { completeLeaderTrait } from "./leader-traits-completed.js";
import { mutuallyChecking } from "../../mutually-checking.js";

function createLeaderTraits(): void {

  let validTraits: Array<ITraits> = checkingLeader()

  createWorkedPlace(leaderSectionText);
  const workedplace = document.querySelector(".workedplace");

  const traitlistBlock = createNewSimpleElement("div", "species__traitlist-block", workedplace)

  createTraitList(traitlistBlock, validTraits, "");
  createDescrBlock("", leaderSectionText);

  const button : HTMLElement = document.querySelector(".button");
    changeButton(button, "");
    
  button.addEventListener("click", function() {
    let traits = document.querySelectorAll(".trait-container");
    let traitsActive: Array<ITraits> = [];
    for (let i = 0; i < traits.length; i++) {
      if (traits[i].classList.contains("trait-container_active")) {
        traitsActive.push(validTraits[i])
      }
    }
    localStorage.setItem("traits", JSON.stringify(traitsActive))
    completeLeaderTrait()
  })

  const traitContainerArr = document.querySelectorAll(".trait-container");

  traitContainerArr.forEach(function(elem: Element, i: number) {
    elem.addEventListener("click", function(): void {
      traitContainerArr[i].classList.remove("red");
      let isActive: boolean;
      if (traitContainerArr[i].classList.contains("trait-container_active")) {
        isActive = true;
        traitContainerArr[i].classList.remove("trait-container_active");
      } else {
        isActive = false;
        traitContainerArr[i].classList.add("trait-container_active");
      }
      mutuallyChecking(i, validTraits, isActive, "");
    })
  })
}

export { createLeaderTraits }