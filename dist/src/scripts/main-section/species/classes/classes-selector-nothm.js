import { classesTraitsBiological } from "./classes-list.js";
import { activateTrait } from "../../../activate-trait.js";
function selectClassesNotHM(i) {
    const classesActiveNotHM = document.querySelector(".bio__trait-container_active");
    if (classesActiveNotHM) {
        classesActiveNotHM.classList.toggle("bio__trait-container_active");
    }
    activateTrait(document.querySelector(".descr-title"), document.querySelector(".descr-text"), classesTraitsBiological, i);
}
export { selectClassesNotHM };
