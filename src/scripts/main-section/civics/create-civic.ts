import { createWorkedPlace, createTraitList, createDescrBlock } from "../../create-worked-place.js";
import { civicSectionText } from "./civic-section-text.js";
import { civicsStandart } from "../../objects/civics-standart.js";
import { civicsCorporate } from "../../objects/civics-corporate.js";
import { civicsHiveMind } from "../../objects/civics-hive-mind.js";
import { civicsMachine } from "../../objects/civics-machine.js";
import { ITraits } from "../../interface.js";
import { mutuallyChecking } from "../../mutually-checking.js";

function createCivics() {

  const authority = localStorage.getItem("authority");
  let validArray: Array<ITraits>
  if (authority === "auth_hive_mind") { validArray = civicsHiveMind }
   else if (authority === "auth_machine_intelligence") { validArray = civicsMachine }
    else if (authority === "auth_corporate") { validArray = civicsCorporate }
      else (validArray = civicsStandart)

  
  createWorkedPlace("civic", civicSectionText);
  createTraitList(document.querySelector(".civic__workedplace"), validArray, "civic");
  createDescrBlock("civic", civicSectionText);

  const traitContainerArr = document.querySelectorAll(".civic__trait-container");

  traitContainerArr.forEach(function(elem: Element, i: number) {
    elem.addEventListener("click", function(): void {
      traitContainerArr[i].classList.remove("red");
      let isActive: boolean;
      if (traitContainerArr[i].classList.contains("civic__trait-container_active")) {
        isActive = true;
        traitContainerArr[i].classList.remove("civic__trait-container_active");
      } else {
        isActive = false;
        traitContainerArr[i].classList.add("civic__trait-container_active");
      }
      mutuallyChecking(i, validArray, isActive, "civic");
    })
  })
}

export { createCivics }
