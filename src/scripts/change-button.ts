function changeButton(button: HTMLElement, name: string): void {
  button.classList.remove(`${name}button`);
  button.classList.add(`${name}button_active`);
  let image: HTMLImageElement = document.querySelector(`.${name}button-image`);
    image.src = "../src/icons/next-active.png";
}

export { changeButton }