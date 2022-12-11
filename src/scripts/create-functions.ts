function createNewSimpleElement(elementName: string, className: string, parent: HTMLElement | Element): HTMLElement  {
  let newEl: HTMLElement = document.createElement(`${elementName}`);
  newEl.classList.add(`${className}`);
  parent.append(newEl)
  return newEl
}

function createNewTextElement(elementName: string, className: string, parent: HTMLElement | Element, text: string): HTMLElement  {
  let newEl: HTMLElement = document.createElement(`${elementName}`);
  newEl.classList.add(`${className}`);
  newEl.textContent = text;
  parent.append(newEl);
  return newEl
}

function createNewImageElement(className: string, parent: HTMLElement | Element, url: string, altName: string): HTMLImageElement  {
  const newEl: HTMLImageElement = document.createElement("img");
  newEl.classList.add(`${className}`);
  newEl.src = url;
  newEl.alt = altName;
  parent.append(newEl);
  return newEl
}

export { createNewSimpleElement, createNewTextElement, createNewImageElement }