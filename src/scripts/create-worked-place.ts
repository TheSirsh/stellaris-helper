import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "./create-functions.js";
import { IMainText, ITraits } from "./interface";

function createWorkedPlace(cssClass: string, workedplaceText: IMainText): void {

  const container: HTMLElement = document.querySelector(".main-section__container")!;
  container.remove();

  const mainSection: HTMLElement = document.querySelector(".main-section")!;

  
  const mainSectionContainer = createNewSimpleElement("div", "main-section__container", mainSection);
    createNewTextElement("h2", "main-section__title", mainSectionContainer, workedplaceText.titleEN);
    createNewTextElement("h3", "main-section__subtitle", mainSectionContainer, workedplaceText.subtitleEN);

  createNewSimpleElement("div", `${cssClass}__workedplace`, mainSectionContainer);
}

function createTraitList(parentElemnet: HTMLElement, arrayOfTraits: Array<ITraits>, cssClass: string): void {

  const mainSectionTraitList = createNewSimpleElement("ul", `${cssClass}__traitlist`, parentElemnet);
  for (let i = 0; i < arrayOfTraits.length; i++) {
    const traitContainer = createNewSimpleElement("li", `${cssClass}__trait-container`, mainSectionTraitList);
    traitContainer.classList.add(`${arrayOfTraits[i].trait}`)
    if (arrayOfTraits[i].border) { createNewImageElement(`${cssClass}__trait-container-image_${arrayOfTraits[i].border}`, traitContainer, arrayOfTraits[i].icon, arrayOfTraits[i].nameEN);} 
      else { createNewImageElement(`${cssClass}__trait-container-image`, traitContainer, arrayOfTraits[i].icon, arrayOfTraits[i].nameEN); }
    createNewTextElement("span", `${cssClass}__trait-container-name`, traitContainer, arrayOfTraits[i].nameEN);

    let topEl = document.querySelector(".main-section__subtitle")
    let topPos = topEl.getBoundingClientRect().top;

    window.scrollTo({top: topPos, behavior: "smooth"})
  }
}

function createDescrBlock(cssClass: string, workedplaceText: IMainText, isImage?: boolean): void {

  const mainSectionWorkedPlace = document.querySelector(`.${cssClass}__workedplace`);

  const mainSectionTraitDescription = createNewSimpleElement("div", `${cssClass}__descr-block`, mainSectionWorkedPlace);
  createNewTextElement("h3", `${cssClass}__descr-title`, mainSectionTraitDescription, workedplaceText.descriptionBlockTitleEN);
  if (isImage) {createNewImageElement(`${cssClass}__descr-image`, mainSectionTraitDescription, workedplaceText["image"], workedplaceText["imageAltEN"]);}
  createNewTextElement("p", `${cssClass}__descr-text`, mainSectionTraitDescription, workedplaceText.descriptionBlockTextEN);
  const button = createNewTextElement("div", `${cssClass}__button`, mainSectionTraitDescription, "",);
    createNewImageElement(`${cssClass}__button-image`, button, "../src/icons/next-block.png", "Next =>")
}

export { createWorkedPlace, createTraitList, createDescrBlock }