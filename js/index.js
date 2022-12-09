import * as

var headerContent = {
    "0": {
        "name": "Species Traits"
    },
    "1": {
        "name": "Government Civics"
    },
    "2": {
        "name": "Leaders Traits"
    },
    "3": {
        "name": "Planet modifiers"
    },
    "4": {
        "name": "Other"
    }
};
var body = document.querySelector(".body");
var header = document.createElement("header");
header.classList.add("header");
body === null || body === void 0 ? void 0 : body.append(header);
var headerContainer = document.createElement("ol");
headerContainer.classList.add("header__container");
header.append(headerContainer);
var headerLogo = document.createElement("img");
headerLogo.classList.add("header__logo");
headerLogo.src = "./src/images/header-logo.png";
headerLogo.alt = "Stellaris";
headerContainer.append(headerLogo);
for (var i = 0; i < Object.keys(headerContent).length; i++) {
    var headerCell = document.createElement("li");
    headerCell.classList.add("header__cell");
    headerCell.textContent = headerContent[i].name;
    headerContainer.append(headerCell);
}
var mainSection = document.createElement("section");
mainSection.classList.add("main-section");
body === null || body === void 0 ? void 0 : body.append(mainSection);
var mainSectionContainer = document.createElement("div");
mainSectionContainer.classList.add("main-section__container");
mainSection.append(mainSectionContainer);
var mainSectionTitle = document.createElement("h2");
mainSectionTitle.classList.add("main-section__title");
mainSectionTitle.textContent = "Species Traits Prefernce";
mainSectionContainer.append(mainSectionTitle);
var ad = document.createElement("img");
ad.src = "../icons/climate-preference-traits/arid.png";
body === null || body === void 0 ? void 0 : body.append(ad);
