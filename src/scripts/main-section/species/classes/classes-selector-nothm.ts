import { classesTraitsBiological } from "./classes-list.js";
import { activateTrait } from "../../../activate-trait.js";

function selectClassesNotHM(i: number): void {
    const classesActiveNotHM: HTMLElement | null = document.querySelector(".bio__trait-container_active");
    if (classesActiveNotHM) {classesActiveNotHM.classList.toggle("bio__trait-container_active")}

  activateTrait(document.querySelector(".descr-title"), document.querySelector(".descr-text"), classesTraitsBiological, i)
}

export { selectClassesNotHM }