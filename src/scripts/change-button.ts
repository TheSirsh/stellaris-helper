function changeButton(button: HTMLElement, name: string): void {
  button.classList.remove(`${name}_button`);
  button.classList.add(`${name}__button_active`);
  let image: HTMLImageElement = document.querySelector(`.${name}__button-image`);
    image.src = "../src/icons/next-active.png";
}

export { changeButton }