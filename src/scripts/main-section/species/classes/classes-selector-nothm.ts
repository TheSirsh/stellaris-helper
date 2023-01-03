import { classesTraitsBiological } from "./classes-list.js";
import { createNewTextElement } from "../../../create-functions.js";

function selectClassesNotHM(i: number): void {
    const classesActiveNotHM: HTMLElement | null = document.querySelector(".classes-bio__trait-container_active");
    if (classesActiveNotHM) {classesActiveNotHM.classList.toggle("classes-bio__trait-container_active")}


  const classesDescriptionTitle: HTMLElement = document.querySelector(".classes__descr-title");
  classesDescriptionTitle.textContent = classesTraitsBiological[i].nameEN;
  const classesDescriptionText: HTMLElement = document.querySelector(".classes__descr-text");
  classesDescriptionText.textContent = "";
  for (let j = 0; j < classesTraitsBiological[i].traits.length; j++) {
    if (classesTraitsBiological[i].traits[j][0] === "bad") {
      createNewTextElement("span", "red", classesDescriptionText, classesTraitsBiological[i].traits[j][1]);
    } else if (classesTraitsBiological[i].traits[j][0] === "good") {
      createNewTextElement("span", "green", classesDescriptionText, classesTraitsBiological[i].traits[j][1]);
    }
   classesDescriptionText.innerHTML += " " + classesTraitsBiological[i].traits[j][2] + "<br>.js";
  }
}

export { selectClassesNotHM }