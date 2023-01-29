import { createWorkedPlace, createTraitList, createDescrBlock }from "../../create-worked-place.js";
import { relicsSectionText } from "./relics-section-text.js";
import { relics } from "./relics-list.js";
import { mutuallyChecking } from "../../mutually-checking.js";

function createRelics() {
  createWorkedPlace(relicsSectionText);
  createTraitList(document.querySelector(".workedplace"), relics, "relics");
  createDescrBlock("relics", relicsSectionText);

  const speciesContainerArray: NodeListOf<HTMLElement> = document.querySelectorAll(".relics__trait-container");

  speciesContainerArray.forEach(function(elem: Element, i: number) {
    elem.addEventListener("click", function(): void {

      speciesContainerArray[i].classList.remove("red");
      let isActive: boolean;
      if (speciesContainerArray[i].classList.contains("relics__trait-container_active")) {
        isActive = true;
        speciesContainerArray[i].classList.remove("relics__trait-container_active");
      } else {
        isActive = false;
        speciesContainerArray[i].classList.add("relics__trait-container_active");
      }
      mutuallyChecking(i, relics, isActive, "relics");

      const button: HTMLElement = document.querySelector(".relics__button");
    })
  })
}

export { createRelics }