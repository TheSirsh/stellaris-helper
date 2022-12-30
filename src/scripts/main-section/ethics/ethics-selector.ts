import { ethics } from "../../objects/ethic.js";
import { createNewTextElement } from "../../create-functions.js";


function selectEthic(i: number): void {
  const ethicActive: HTMLElement | null = document.querySelector(".ethic__trait-container_active");
  if (ethicActive) {ethicActive.classList.toggle("ethic__trait-container_active")}

  const ethicDescriptionTitle: HTMLElement = document.querySelector(".ethic__descr-title");
  ethicDescriptionTitle.textContent = ethics[i].nameEN;
  const ethicDescriptionText: HTMLElement = document.querySelector(".ethic__descr-text");
  ethicDescriptionText.textContent = "";
  for (let j = 0; j < ethics[i].traits.length; j++) {
    if (ethics[i].traits[j][0] === "bad") {
      createNewTextElement("span", "red", ethicDescriptionText, ethics[i].traits[j][1]);
    } else if (ethics[i].traits[j][0] === "good") {
      createNewTextElement("span", "green", ethicDescriptionText, ethics[i].traits[j][1]);
    }
  ethicDescriptionText.innerHTML += " " + ethics[i].traits[j][2] + "<br>";
  }
}

  export { selectEthic }
