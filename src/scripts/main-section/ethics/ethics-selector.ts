import { ethics } from "./ethic-list.js";
import { activateTrait } from "../../activate-trait.js";


function selectEthic(i: number): void {
  const ethicActive: HTMLElement | null = document.querySelector(".ethic__trait-container_active");
  if (ethicActive) {ethicActive.classList.toggle("ethic__trait-container_active")}

  activateTrait(document.querySelector(".ethic__descr-title"), document.querySelector(".ethic__descr-text"), ethics, i);
}

export { selectEthic }
