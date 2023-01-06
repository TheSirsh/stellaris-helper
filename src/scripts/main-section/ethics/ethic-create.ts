import { createWorkedPlace, createTraitList, createDescrBlock }from "../../create-worked-place.js";
import { ethicSectionText } from "./ethic-section-text.js";
import { ethics } from "./ethic-list.js"; 
import { selectEthic } from "./ethics-selector.js";
import { changeButton } from "../../change-button.js";

function createEthics() {
  
  createWorkedPlace("ethic", ethicSectionText);
  createTraitList(document.querySelector(".ethic__workedplace"), ethics, "ethic");
  createDescrBlock("ethic", ethicSectionText);

  const speciesContainerArray: NodeListOf<HTMLElement> = document.querySelectorAll(".ethic__trait-container");

  speciesContainerArray.forEach(function(elem: Element, i: number) {
    elem.addEventListener("click", function(): void {
      selectEthic(i);
      localStorage.setItem("ethic", ethics[i].trait);
      elem.classList.toggle("ethic__trait-container_active");

      const classesButton: HTMLElement = document.querySelector(".ethic__button");
      if (classesButton) {
        changeButton(classesButton, "ethic");
//        classesButton.addEventListener("click", ethicFunc);
      }
    })
  })
}

export { createEthics }