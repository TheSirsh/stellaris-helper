import { classesTraitsBiological } from "./classes-list.js";
import { activateTrait } from "../../../activate-trait.js";
function selectClassesNotHM(i) {
    const classesActiveNotHM = document.querySelector(".classes-bio__trait-container_active");
    if (classesActiveNotHM) {
        classesActiveNotHM.classList.toggle("classes-bio__trait-container_active");
    }
    activateTrait(document.querySelector(".classes__descr-title"), document.querySelector(".classes__descr-text"), classesTraitsBiological, i);
}
export { selectClassesNotHM };
