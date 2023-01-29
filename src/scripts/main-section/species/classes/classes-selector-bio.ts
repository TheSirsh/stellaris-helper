import { classesTraitsHimeMind } from "./classes-list.js";
import { activateTrait } from "../../../activate-trait.js";

function selectClassesBio(i: number): void {
  const classesActiveBio: HTMLElement | null = document.querySelector(".hm__trait-container_active");
  if (classesActiveBio) {classesActiveBio.classList.toggle("hm__trait-container_active")}

  activateTrait(document.querySelector(".descr-title"), document.querySelector(".descr-text"), classesTraitsHimeMind, i)
}

export { selectClassesBio }