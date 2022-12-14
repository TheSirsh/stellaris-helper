function createNewSimpleElement(elementName, className, parent) {
    let newEl = document.createElement(`${elementName}`);
    newEl.classList.add(`${className}`);
    parent.append(newEl);
    return newEl;
}
function createNewTextElement(elementName, className, parent, text) {
    let newEl = document.createElement(`${elementName}`);
    newEl.classList.add(`${className}`);
    newEl.textContent = text;
    parent.append(newEl);
    return newEl;
}
function createNewImageElement(className, parent, url, altName) {
    const newEl = document.createElement("img");
    newEl.classList.add(`${className}`);
    newEl.src = url;
    newEl.alt = altName;
    parent.append(newEl);
    return newEl;
}
export { createNewSimpleElement, createNewTextElement, createNewImageElement };
