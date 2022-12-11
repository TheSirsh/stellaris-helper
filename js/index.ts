import {headerContent} from "../src/js/header.js";
import {mainSectionContent} from "../src/js/main-section-text.js";
import {speciesTraitPrefernce} from "../src/js/species-traits-preference.js";

const body: Element | null = document.querySelector(".body");

const header: HTMLElement = document.createElement("header");
header.classList.add("header");
body?.append(header);

const headerContainer: HTMLElement = document.createElement("ol");
headerContainer.classList.add("header__container");
header.append(headerContainer);

const headerLogo: HTMLImageElement = document.createElement("img");
headerLogo.classList.add("header__logo");
headerLogo.src = "./src/images/header-logo.png";
headerLogo.alt = "Stellaris";
headerContainer.append(headerLogo);

for (let i = 0; i < Object.keys(headerContent).length; i++) {
  const headerCell : HTMLElement = document.createElement("li");
  headerCell.classList.add("header__cell");
  headerCell.textContent = headerContent[i].name;
  headerContainer.append(headerCell);
}

const mainSection: HTMLElement = document.createElement("section");
mainSection.classList.add("main-section");
body?.append(mainSection);

const mainSectionContainer: HTMLElement = document.createElement("div");
mainSectionContainer.classList.add("main-section__container");
mainSection.append(mainSectionContainer);

const mainSectionTitle: HTMLElement = document.createElement("h2");
mainSectionTitle.classList.add("main-section__title");
mainSectionTitle.textContent = mainSectionContent[0].title;
mainSectionContainer.append(mainSectionTitle);

const mainSectionWorkedPlace: HTMLElement = document.createElement("div");
mainSectionWorkedPlace.classList.add("main-section__workedplace");
mainSectionContainer.append(mainSectionWorkedPlace);

for (let i = 0; i < Object.keys(speciesTraitPrefernce).length; i++) {
  const traitContainer: HTMLElement = document.createElement("div");
  traitContainer.classList.add("workedplace__trait-container");
  mainSectionWorkedPlace.append(traitContainer);

    const traitContainerImage: HTMLImageElement = document.createElement("img");
    traitContainerImage.classList.add("workedplace__trait-container-image");
    traitContainerImage.src = speciesTraitPrefernce[i].icon;
    traitContainerImage.alt = speciesTraitPrefernce[i].nameEN;
    traitContainer.append(traitContainerImage)

    const traitContainerName: HTMLElement = document.createElement("span");
    traitContainerName.classList.add("workedplace__trait-container-name");
    traitContainerName.textContent = speciesTraitPrefernce[i].nameEN;
    traitContainer.append(traitContainerName)
}
