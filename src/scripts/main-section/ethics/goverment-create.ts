import { createWorkedPlace, createTraitList, createDescrBlock }from "../../create-worked-place.js";
import { govermentSectionText } from "../../objects/goverment-section-text.js";
import { ethics } from "../../objects/goverment.js"; 

function createEthics() {
  
  createWorkedPlace("goverment", govermentSectionText);
  createTraitList(document.querySelector(".goverment__workedplace"), ethics, "goverment");
  createDescrBlock("goverment", govermentSectionText);

  const speciesContainerArray: NodeListOf<HTMLElement> = document.querySelectorAll(".goverment__trait-container");

  speciesContainerArray.forEach(function(elem: Element, i: number) {
    elem.addEventListener("click", function(): void {
 //     selectLeaderSpecies()
      localStorage.setItem("goverment", ethics[i].trait);
      elem.classList.toggle("goverment__trait-container_active");
    })
  })
}

export { createEthics }