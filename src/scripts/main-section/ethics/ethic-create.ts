import { createWorkedPlace, createTraitList, createDescrBlock }from "../../create-worked-place.js";
import { ethicSectionText } from "../../objects/ethic-section-text.js";
import { ethics } from "../../objects/ethic.js"; 
import { selectEthic } from "./ethics-selector.js";

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
    })
  })
}

export { createEthics }