import { classesTraitsHimeMind } from "./classes-list.js";
import { createNewTextElement } from "../../../create-functions.js";

function selectClassesBio(i: number): void {
  const classesActiveBio: HTMLElement | null = document.querySelector(".classes-hm__trait-container_active");
  if (classesActiveBio) {classesActiveBio.classList.toggle("classes-hm__trait-container_active")}

const classesDescriptionTitle: HTMLElement = document.querySelector(".classes__descr-title");
classesDescriptionTitle.textContent = classesTraitsHimeMind[i].nameEN;
const classesDescriptionText: HTMLElement = document.querySelector(".classes__descr-text");
classesDescriptionText.textContent = "";
for (let j = 0; j < classesTraitsHimeMind[i].traits.length; j++) {
  if (classesTraitsHimeMind[i].traits[j][0] === "bad") {
    createNewTextElement("span", "red", classesDescriptionText, classesTraitsHimeMind[i].traits[j][1]);
  } else if (classesTraitsHimeMind[i].traits[j][0] === "good") {
    createNewTextElement("span", "green", classesDescriptionText, classesTraitsHimeMind[i].traits[j][1]);
  }
 classesDescriptionText.innerHTML += " " + classesTraitsHimeMind[i].traits[j][2] + "<br>";
}
}

export { selectClassesBio }