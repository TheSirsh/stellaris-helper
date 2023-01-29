import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "./create-functions.js";
function createWorkedPlace(workedplaceText) {
    const container = document.querySelector(".main-section__container");
    container.remove();
    const mainSection = document.querySelector(".main-section");
    const mainSectionContainer = createNewSimpleElement("div", "main-section__container", mainSection);
    createNewTextElement("h2", "main-section__title", mainSectionContainer, workedplaceText.titleEN);
    createNewTextElement("h3", "main-section__subtitle", mainSectionContainer, workedplaceText.subtitleEN);
    createNewSimpleElement("div", "workedplace", mainSectionContainer);
}
function createTraitList(parentElemnet, arrayOfTraits, cssClass) {
    const mainSectionTraitList = createNewSimpleElement("ul", `${cssClass}__traitlist`, parentElemnet);
    for (let i = 0; i < arrayOfTraits.length; i++) {
        const traitContainer = createNewSimpleElement("li", `${cssClass}__trait-container`, mainSectionTraitList);
        traitContainer.classList.add(`${arrayOfTraits[i].trait}`);
        if (arrayOfTraits[i].border) {
            createNewImageElement(`${cssClass}__trait-container-image_${arrayOfTraits[i].border}`, traitContainer, arrayOfTraits[i].icon, arrayOfTraits[i].nameEN);
        }
        else {
            createNewImageElement(`${cssClass}__trait-container-image`, traitContainer, arrayOfTraits[i].icon, arrayOfTraits[i].nameEN);
        }
        createNewTextElement("span", `${cssClass}__trait-container-name`, traitContainer, arrayOfTraits[i].nameEN);
        let topEl = document.querySelector(".main-section__subtitle");
        let topPos = topEl.getBoundingClientRect().top;
        window.scrollTo({ top: topPos, behavior: "smooth" });
    }
}
function createDescrBlock(cssClass, workedplaceText, isImage) {
    const mainSectionWorkedPlace = document.querySelector(".workedplace");
    const mainSectionTraitDescription = createNewSimpleElement("div", `${cssClass}__descr-block`, mainSectionWorkedPlace);
    createNewTextElement("h3", `${cssClass}__descr-title`, mainSectionTraitDescription, workedplaceText.descriptionBlockTitleEN);
    if (isImage) {
        createNewImageElement(`${cssClass}__descr-image`, mainSectionTraitDescription, workedplaceText["image"], workedplaceText["imageAltEN"]);
    }
    createNewTextElement("p", `${cssClass}__descr-text`, mainSectionTraitDescription, workedplaceText.descriptionBlockTextEN);
    const button = createNewTextElement("div", `${cssClass}__button`, mainSectionTraitDescription, "");
    createNewImageElement(`${cssClass}__button-image`, button, "../src/icons/next-block.png", "Next =>");
}
function createCodeBlock(codeBlockTitle, valueName, arrayOfValue) {
    const codeBlock = createNewSimpleElement("div", "code-block", document.querySelector(".workedplace"));
    createNewTextElement("h3", "code-block__title", codeBlock, codeBlockTitle);
    const text = createNewTextElement("pre", "code-block__text", codeBlock, "");
    text.innerHTML = `${valueName} = {` + "<br>";
    for (let i = 0; i < arrayOfValue.length; i++) {
        text.innerHTML += " " + arrayOfValue[i].trait + "<br>";
    }
    text.innerHTML += "}";
}
export { createWorkedPlace, createTraitList, createDescrBlock, createCodeBlock };
