function changeButton(button, name) {
    button.classList.remove(`${name}_button`);
    button.classList.add(`${name}__button_active`);
    let image = document.querySelector(`.${name}__button-image`);
    image.src = "../src/icons/next-active.png";
}
export { changeButton };
