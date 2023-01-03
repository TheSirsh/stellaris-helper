import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "../../../create-functions.js";
import { classesSectionText } from "./classes-section-text.js";
import { classes } from "./classes-list.js";
import { selectClasses } from "./classes-selector.js";
import { createMainSectionClimateTrait } from "../climate-traits/climate-traits-create.js";
import { createWorkedPlace, createTraitList, createDescrBlock } from "../../../create-worked-place.js";

function createClasses(): void {

  createWorkedPlace("classes", classesSectionText);
  const workedplace = document.querySelector(".classes__workedplace");

  const traitlistBlock = createNewSimpleElement("div", "classes__traitlist-block", workedplace)

  createTraitList(traitlistBlock, classes, "classes");
  createDescrBlock("classes", classesSectionText);

  const classesContainerArr: NodeListOf<HTMLElement> | null = document.querySelectorAll(".classes__trait-container");

  classesContainerArr.forEach(function(elem: Element, i: number) {
    elem.addEventListener("click", function(): void {
      selectClasses(i);
      localStorage.setItem("classes", classes[i].trait);
      classesContainerArr[i].classList.toggle("classes__trait-container_active");

      const classesButton = document.querySelector(".classes__button");
      if (classesButton) {
        classesButton.classList.remove("classes__button");
        classesButton.classList.add("classes__button_active");
        classesButton.addEventListener("click", createMainSectionClimateTrait);
      }
    })
  })
}

export { createClasses }