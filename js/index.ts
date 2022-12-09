const headerContent : object = {
  "0": {  
    "name": "Species Traits"
  },
  "1": {
    "name": "Government Civics"
  },
  "2":{
    "name": "Leaders Traits"
  },
  "3":{
    "name": "Planet modifiers"
  }, 
  "4": {
    "name": "Other"
  }
}


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