function selectClimateTrait(i, arr) {
    const traitDescriptionTitle = document.querySelector(".climate__descr-title");
    const traitDescriptionImage = document.querySelector(".climate__descr-image");
    const traitDescriptionPlanet = document.querySelector(".climate__descr-text");
    const traitActive = document.querySelector(".climate__trait-container_active");
    if (traitActive) {
        traitActive.classList.remove("climate__trait-container_active");
    }
    traitDescriptionTitle.textContent = arr[i].nameEN;
    traitDescriptionImage.src = arr[i].image;
    traitDescriptionImage.alt = arr[i].nameEN;
    traitDescriptionPlanet.textContent = arr[i].descrEN;
}
export { selectClimateTrait };
