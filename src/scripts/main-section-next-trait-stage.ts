import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "./create-functions.js";
import { mainSectionContent } from "./main-section-text.js";

function nextTraitStage():void {
  const container: HTMLElement = document.querySelector(".main-section__container");
  container.remove();

  const mainSection = document.querySelector(".main-section");

  const mainSectionContainer = createNewSimpleElement("div", "main-section__container", mainSection);
    const mainSectionTitle = createNewTextElement("h2", "main-section__title", mainSectionContainer, mainSectionContent[2].titleEN);
    const mainSectionSubTitle = createNewTextElement("h3", "main-section__subtitle", mainSectionContainer, mainSectionContent[2].subtitleEN);
}

export { nextTraitStage }