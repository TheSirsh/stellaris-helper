import * as headerContent from "../src/json/header.json"

const body: Element | null = document.querySelector(".body");

const header: HTMLElement = document.createElement("header");
header.classList.add("header");
body?.append(header);

const headerContainer: HTMLElement = document.createElement("ol");
headerContainer.classList.add("header__container");
header.append(headerContainer);

for (let i = 0; i < 4; i++) {
  const headerCell : HTMLElement = document.createElement("li");
  headerCell.classList.add("header__cell");
  headerCell.textContent = headerContent[i]
}
