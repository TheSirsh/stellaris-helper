import { createHeader } from "./src/scripts/header.js";
import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "./src/scripts/create-functions.js";
import { createFooter } from "./src/scripts/footer.js"

const body: Element = document.querySelector(".body");
createHeader();

const mainSection = createNewSimpleElement("section", "main-section", body);
const mainSectionContainer = createNewSimpleElement("div", "main-section__container", mainSection);

createFooter();