import { createWorkedPlace, createTraitList, createDescrBlock }from "../../../create-worked-place.js";
import { ethicSectionText } from "./ethic-section-text.js";
import { ethics } from "./ethic-list.js"; 
import { changeButton } from "../../../change-button.js";
import { mutuallyChecking } from "../../../mutually-checking.js";
import { createAutority } from "../authority/authority-create.js";
import { ITraits } from "../../../interface.js";

function createEthics() {
  
  createWorkedPlace(ethicSectionText);
  createTraitList(document.querySelector(".workedplace"), ethics, "");
  createDescrBlock("", ethicSectionText);

  const speciesContainerArray: NodeListOf<HTMLElement> = document.querySelectorAll(".trait-container");

  speciesContainerArray.forEach(function(elem: Element, i: number) {
    elem.addEventListener("click", function(): void {
      speciesContainerArray[i].classList.remove("red");
      let isActive: boolean;
      if (speciesContainerArray[i].classList.contains("trait-container_active")) {
        isActive = true;
        speciesContainerArray[i].classList.remove("trait-container_active");
      } else {
        isActive = false;
        speciesContainerArray[i].classList.add("_trait-container_active");
      }
      mutuallyChecking(i, ethics, isActive, "");

      const button: HTMLElement = document.querySelector(".button");
      if (button) {
        changeButton(button, "");
      }

      button.addEventListener("click", btnClick);
  })
  })
}

function btnClick() {
  let eticArr = document.querySelectorAll(".trait-container");
  let traitsActive: Array<ITraits> = [];
  for (let i = 0; i < eticArr.length; i++) {
    if (eticArr[i].classList.contains("trait-container_active")) {
      traitsActive.push(ethics[i])
    }
  }
  localStorage.setItem("ethics", JSON.stringify(traitsActive));
  createAutority()
}

export { createEthics }