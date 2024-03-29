import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "../../../create-functions.js";
import { classesSectionText } from "./classes-section-text.js";
import { classes } from "./classes-list.js";
import { selectClasses } from "./classes-selector.js";
import { createMainSectionClimateTrait } from "../climate-traits/climate-traits-create.js";
import { createWorkedPlace, createTraitList, createDescrBlock } from "../../../create-worked-place.js";
import { changeButton } from "../../../change-button.js";

function createClasses(): void {

  createWorkedPlace(classesSectionText);
  const workedplace = document.querySelector(".workedplace");

  const traitlistBlock = createNewSimpleElement("div", "traitlist-block", workedplace)

  createTraitList(traitlistBlock, classes, "");
  createDescrBlock("", classesSectionText);

  const classesContainerArr: NodeListOf<HTMLElement> | null = document.querySelectorAll(".trait-container");

  classesContainerArr.forEach(function(elem: Element, i: number) {
    elem.addEventListener("click", function(): void {
      selectClasses(i);
      localStorage.setItem("classes", classes[i].trait);
      classesContainerArr[i].classList.toggle("trait-container_active");

      const classesButton: HTMLElement = document.querySelector(".button");
      if (classesButton) {
        changeButton(classesButton, "")
        classesButton.addEventListener("click", createMainSectionClimateTrait);
      }
    })
  })
}

export { createClasses }