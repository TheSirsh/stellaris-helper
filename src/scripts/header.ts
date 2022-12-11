import { headerContent } from "./header-content.js";
import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "./create-functions.js"

function createHeader(): void {

  const body: Element | null = document.querySelector(".body");
    const header = createNewSimpleElement("header", "header", body);
      const headerContainer = createNewSimpleElement("ol", "header__container", header);
        const headerLogo = createNewImageElement("header__logo", headerContainer, "./src/images/header-logo.png", "Stellaris");
        for (let i = 0; i < Object.keys(headerContent).length; i++) {
          const headerCell = createNewTextElement("li", "header__cell", headerContainer, headerContent[i].name);
        }
}

export {createHeader}