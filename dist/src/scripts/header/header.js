import { headerContent } from "../objects/header-content.js";
import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "../create-functions.js";
import { createSpecies } from "../main-section/species/species-create.js";
import { createLeaderTraits } from "../main-section/leader-traits/leader-traits-create.js";
function createHeader() {
    const body = document.querySelector(".body");
    const header = createNewSimpleElement("header", "header", body);
    const headerContainer = createNewSimpleElement("ol", "header__container", header);
    const headerLogo = createNewImageElement("header__logo", headerContainer, "./src/images/header-logo.png", "Stellaris");
    for (let i = 0; i < Object.keys(headerContent).length; i++) {
        const headerCell = createNewTextElement("li", "header__cell", headerContainer, headerContent[i].nameEN);
        if (i === 0) {
            headerCell.addEventListener("click", createSpecies);
        }
        if (i === 2)
            headerCell.addEventListener("click", createLeaderTraits);
    }
}
export { createHeader };