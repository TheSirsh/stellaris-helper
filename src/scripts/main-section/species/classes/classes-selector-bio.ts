import { classesTraitsHimeMind } from "./classes-list.js";
import { activateTrait } from "../../../activate-trait.js";

function selectClassesBio(i: number): void {
  const classesActiveBio: HTMLElement | null = document.querySelector(".classes-hm__trait-container_active");
  if (classesActiveBio) {classesActiveBio.classList.toggle("classes-hm__trait-container_active")}

  activateTrait(document.querySelector(".classes__descr-title"), document.querySelector(".classes__descr-text"), classesTraitsHimeMind, i)
}

export { selectClassesBio }