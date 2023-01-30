import { footerContent } from "./footer-content.js";
import { createNewSimpleElement, createNewImageElement } from "../create-functions.js";
function createFooter() {
    const body = document.querySelector(".body");
    const footer = createNewSimpleElement("footer", "footer", body);
    const footerContainer = createNewSimpleElement("ol", "footer__container", footer);
    for (let i = 0; i < Object.keys(footerContent).length; i++) {
        createNewImageElement("footer__cell", footerContainer, footerContent[i].src, footerContent[i].nameEN);
    }
}
export { createFooter };
