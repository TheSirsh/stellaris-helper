import { headerContent } from "../objects/header-content.js";
import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "../create-functions.js";
import { createSpecies } from "../main-section/species/species-create.js";
import { createLeader } from "../main-section/leaders/leader-create.js";
import { createPlanetModifier } from "../main-section/planet-modifier/planet-create.js";
import { createEthics } from "../main-section/civics/goverment-create.js";

function createHeader(): void {

  const body: Element | null = document.querySelector(".body");
    const header = createNewSimpleElement("header", "header", body);
      const headerContainer = createNewSimpleElement("ol", "header__container", header);
        const headerLogo = createNewImageElement("header__logo", headerContainer, "./src/images/header-logo.png", "Stellaris");
        for (let i = 0; i < Object.keys(headerContent).length; i++) {
          const headerCell = createNewTextElement("li", "header__cell", headerContainer, headerContent[i].nameEN);
          if (i === 0) { headerCell.addEventListener("click", createSpecies); }
            else if (i === 1) { headerCell.addEventListener("click", createEthics); }
              else if (i === 2) { headerCell.addEventListener("click", createLeader); }
                else if (i === 3) { headerCell.addEventListener("click", createPlanetModifier); }
        }
        
}

export {createHeader}