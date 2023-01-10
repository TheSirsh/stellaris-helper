import { createNewSimpleElement } from "../../create-functions.js";
import { leaderSectionText } from "./leader-section-text.js";
// import { selectSpecies } from "./species-selector.js";
import { createWorkedPlace, createTraitList, createDescrBlock } from "../../create-worked-place.js";
import { checkingLeader } from "../../checking-leader-function.js";
import { selectLeaderTrait } from "./leader-traits-selector.js";
import { changeButton } from "../../change-button.js";
function createLeaderTraits() {
    let validTraits = checkingLeader();
    createWorkedPlace("leader-traits", leaderSectionText);
    const workedplace = document.querySelector(".leader-traits__workedplace");
    const traitlistBlock = createNewSimpleElement("div", "leader-traits__traitlist-block", workedplace);
    createTraitList(traitlistBlock, validTraits, "leader-traits");
    createDescrBlock("leader-traits", leaderSectionText);
    const traitContainerArr = document.querySelectorAll(".leader-traits__trait-container");
    traitContainerArr.forEach(function (elem, i) {
        elem.addEventListener("click", function () {
            traitContainerArr[i].classList.remove("red");
            let isActive;
            if (traitContainerArr[i].classList.contains("leader-traits__trait-container_active")) {
                isActive = true;
                traitContainerArr[i].classList.remove("leader-traits__trait-container_active");
            }
            else {
                isActive = false;
                traitContainerArr[i].classList.add("leader-traits__trait-container_active");
            }
            selectLeaderTrait(i, validTraits, isActive);
            const button = document.querySelector(".leader-traits__button");
            if (button) {
                changeButton(button, "leader-traits");
            }
        });
    });
}
export { createLeaderTraits };
