function selectClimateTrait(i, arr) {
    const traitDescriptionTitle = document.querySelector(".descr-title");
    const traitDescriptionImage = document.querySelector(".descr-image");
    const traitDescriptionPlanet = document.querySelector(".descr-text");
    const traitActive = document.querySelector(".trait-container_active");
    if (traitActive) {
        traitActive.classList.remove("trait-container_active");
    }
    traitDescriptionTitle.textContent = arr[i].nameEN;
    traitDescriptionImage.src = arr[i].image;
    traitDescriptionImage.alt = arr[i].nameEN;
    traitDescriptionPlanet.textContent = arr[i].descrEN;
}
export { selectClimateTrait };
