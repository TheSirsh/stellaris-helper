import { createWorkedPlace, createTraitList, createDescrBlock } from "../../create-worked-place.js";
import { leaderSectionText } from "./leader-section-text.js";
import { species, } from "../../objects/leaders/leader.js";
import { createNewSimpleElement } from "../../create-functions.js";
import { selectLeaderSpecies } from "./leader-species-selector.js";
function createLeader() {
    createWorkedPlace(leaderSectionText);
    const workedplace = document.querySelector(".workedplace");
    const traitlistBlock = createNewSimpleElement("div", "species__traitlist-block", workedplace);
    createTraitList(traitlistBlock, species, "species__");
    createDescrBlock("", leaderSectionText);
    const speciesContainerArray = document.querySelectorAll(".species__trait-container");
    speciesContainerArray.forEach(function (elem, i) {
        elem.addEventListener("click", function () {
            selectLeaderSpecies();
            localStorage.setItem("species", species[i].trait);
            elem.classList.toggle("species__trait-container_active");
        });
    });
}
export { createLeader };