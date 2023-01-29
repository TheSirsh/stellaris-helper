import { classes, classesTraitsBiological, classesTraitsHimeMind } from "./classes-list.js";
import { selectClassesNotHM } from "./classes-selector-nothm.js";
import { selectClassesBio } from "./classes-selector-bio.js";
import { createTraitList } from "../../../create-worked-place.js";
import { activateTrait } from "../../../activate-trait.js";

function selectClasses(i: number): void {

    const classesActive: HTMLElement | null = document.querySelector(".trait-container_active");
    if (classesActive) { classesActive.classList.toggle("trait-container_active"); }

  const classesHM: HTMLElement | null = document.querySelector(".hm__traitlist");
  if (classesHM) { classesHM.remove()} 
  const classesBio: HTMLElement | null = document.querySelector(".bio__traitlist");
  if (classesBio) { classesBio.remove()} 
  
  if (i !== 0) {
    const classesTraitBlock: HTMLElement = document.querySelector(".traitlist-block");

    if (i !== 1 ) {

      createTraitList(classesTraitBlock, classesTraitsBiological, "bio__");

      const classesTraitNotHM: NodeListOf<HTMLElement> | null = document.querySelectorAll(".bio__trait-container");

      classesTraitNotHM.forEach(function(elem: Element, n: number) {
        elem.addEventListener("click", function(): void {
          selectClassesNotHM(n);
          localStorage.setItem("origin", classesTraitsBiological[n].trait);
          elem.classList.toggle("bio__trait-container_active");
        })
      })
    }

    createTraitList(classesTraitBlock, classesTraitsHimeMind, "hm__")

    const classesTraitBio: NodeListOf<HTMLElement> | null = document.querySelectorAll(".hm__trait-container");
    classesTraitBio.forEach(function(elem: Element, n: number) {
      elem.addEventListener("click", function(): void {
        selectClassesBio(n);
        localStorage.setItem("bio", classesTraitsHimeMind[n].trait);
        classesTraitBio[n].classList.toggle("hm__trait-container_active");
      })
    })
  }

  activateTrait(document.querySelector(".descr-title"), document.querySelector(".descr-text"), classes, i)
}

export { selectClasses }