import { createWorkedPlace, createTraitList, createDescrBlock } from "../../create-worked-place.js";
import { leaderSectionText } from "./leader-section-text.js";
import { species, } from "../../objects/leaders/leader.js";
import { createNewSimpleElement } from "../../create-functions.js";
import { selectLeaderSpecies } from "./leader-species-selector.js";
function createLeader() {
    createWorkedPlace(leaderSectionText);
    const workedplace = document.querySelector(".workedplace");
    const traitlistBlock = createNewSimpleElement("div", "leader__traitlist-block", workedplace);
    createTraitList(traitlistBlock, species, "leader-species");
    createDescrBlock("leader", leaderSectionText);
    const speciesContainerArray = document.querySelectorAll(".leader-species__trait-container");
    speciesContainerArray.forEach(function (elem, i) {
        elem.addEventListener("click", function () {
            selectLeaderSpecies();
            localStorage.setItem("leader-species", species[i].trait);
            elem.classList.toggle("leader-species__trait-container_active");
        });
    });
}
export { createLeader };
