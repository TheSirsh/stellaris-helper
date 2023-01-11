import { createNewSimpleElement, createNewTextElement } from "./create-functions.js";
import { ITraits } from "./interface.js";

function createCodeBlock(stageName: string, codeBlockTitle: string, valueName: string, arrayOfValue: Array<ITraits> ) {
  const codeBlock =  createNewSimpleElement("div", "code-block", document.querySelector(`.${stageName}__workedplace`));
    createNewTextElement("h3", "code-block__title", codeBlock, codeBlockTitle);
    const text = createNewTextElement("pre", "code-block__text", codeBlock, "");
      text.innerHTML = `${valueName} = {` + "<br>"
      for (let i = 0; i < arrayOfValue.length; i++) {
        text.innerHTML += " " + arrayOfValue[i].trait + "<br>"
      }
      text.innerHTML += "}"
}

export { createCodeBlock }