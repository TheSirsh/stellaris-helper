function changeButton(button, name) {
    button.classList.remove(`${name}button`);
    button.classList.add(`${name}button_active`);
    let image = document.querySelector(`.${name}button-image`);
    image.src = "../src/icons/next-active.png";
}
export { changeButton };
