import { createWorkedPlace, createTraitList, createDescrBlock }from "../../create-worked-place.js";
import { relicsSectionText } from "./relics-section-text.js";
import { relics } from "./relics-list.js";
import { mutuallyChecking } from "../../mutually-checking.js";

function createRelics() {
  createWorkedPlace(relicsSectionText);
  createTraitList(document.querySelector(".workedplace"), relics, "");
  createDescrBlock("", relicsSectionText);

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
        speciesContainerArray[i].classList.add("trait-container_active");
      }
      mutuallyChecking(i, relics, isActive, "");

      const button: HTMLElement = document.querySelector(".button");
    })
  })
}

export { createRelics }