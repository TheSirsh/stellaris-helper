import { ethics } from "./ethic-list.js";
import { activateTrait } from "../../activate-trait.js";
function selectEthic(i) {
    const ethicActive = document.querySelector(".ethic__trait-container_active");
    if (ethicActive) {
        ethicActive.classList.toggle("ethic__trait-container_active");
    }
    activateTrait(document.querySelector(".ethic__descr-title"), document.querySelector(".ethic__descr-text"), ethics, i);
}
export { selectEthic };
