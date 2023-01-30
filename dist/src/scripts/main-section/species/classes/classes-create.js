import { createNewSimpleElement } from "../../../create-functions.js";
import { classesSectionText } from "./classes-section-text.js";
import { classes } from "./classes-list.js";
import { selectClasses } from "./classes-selector.js";
import { createMainSectionClimateTrait } from "../climate-traits/climate-traits-create.js";
import { createWorkedPlace, createTraitList, createDescrBlock } from "../../../create-worked-place.js";
import { changeButton } from "../../../change-button.js";
function createClasses() {
    createWorkedPlace(classesSectionText);
    const workedplace = document.querySelector(".workedplace");
    const traitlistBlock = createNewSimpleElement("div", "traitlist-block", workedplace);
    createTraitList(traitlistBlock, classes, "");
    createDescrBlock("", classesSectionText);
    const classesContainerArr = document.querySelectorAll(".trait-container");
    classesContainerArr.forEach(function (elem, i) {
        elem.addEventListener("click", function () {
            selectClasses(i);
            localStorage.setItem("classes", classes[i].trait);
            classesContainerArr[i].classList.toggle("trait-container_active");
            const classesButton = document.querySelector(".button");
            if (classesButton) {
                changeButton(classesButton, "");
                classesButton.addEventListener("click", createMainSectionClimateTrait);
            }
        });
    });
}
export { createClasses };
