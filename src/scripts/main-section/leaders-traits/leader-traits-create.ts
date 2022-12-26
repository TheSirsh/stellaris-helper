import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "../../create-functions.js";
import { speciesSectionText } from "../../objects/species-section-text.js";
import { species } from "../../objects/species.js";
// import { selectSpecies } from "./species-selector.js";
import { createMainSectionClimateTrait } from "../climate-traits/climate-traits-create.js"
import { createWorkedPlace, createTraitList, createDescrBlock } from "../../create-worked-place.js";
import { checkingLeader } from "../../checking-leader-function.js";
import { ITraits } from "../../interface.js";

function createLeaderTraits(): void {

  let validArray: Array<ITraits> = checkingLeader()

  createWorkedPlace("leader-traits", speciesSectionText);
  const workedplace = document.querySelector(".leader-traits__workedplace");

  const traitlistBlock = createNewSimpleElement("div", "leader-traits__traitlist-block", workedplace)

  createTraitList(traitlistBlock, validArray, "leader-traits");
  createDescrBlock("leader-traits", speciesSectionText);

}

export { createLeaderTraits }