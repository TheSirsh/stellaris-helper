function removeLoader(): void {
  let loader: HTMLElement = document.querySelector(".lds-roller");
  loader.classList.add("hide");
}

export { removeLoader }