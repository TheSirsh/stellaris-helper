import { createWorkedPlace, createTraitList, createDescrBlock }from "../../create-worked-place.js";
import { relicsSectionText } from "./ethic-section-text.js";
import { relics } from "./relics-list.js";

function createRelics() {
  createWorkedPlace(relicsSectionText);
  createTraitList(document.querySelector(".workedplace"), relics, "relics");
  createDescrBlock("relics", relicsSectionText);
}

export { createRelics }