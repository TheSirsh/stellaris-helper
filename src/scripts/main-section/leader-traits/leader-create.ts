import { createNewSimpleElement, createNewTextElement, createNewImageElement } from "../../create-functions.js";
import { leaderRulerBiological, leaderRulerHiveMind, leaderRulerSynthitic, } from "../../objects/leader-ruler-traits.js"
import { leaderGovernorBiological, leaderGovernorHiveMind, leaderGovernorSynthitic, } from "../../objects/leader-governer-traits.js";
import { leaderScientistBiological, leaderScientistHiveMind } from "../../objects/leader-scientist-traits.js";
import { ITraits } from "../../interface";

function createLeader(): void {
const path: string = "leader" + localStorage.getItem("leader") + localStorage.getItem("origin");
const linkArray = [ leaderRulerBiological, leaderRulerHiveMind, leaderRulerSynthitic, leaderGovernorBiological, leaderGovernorHiveMind, leaderGovernorSynthitic, leaderScientistBiological, leaderScientistHiveMind, ]
for (let i = 0; i < linkArray.length; i++) {
  if (linkArray[i] == path) {

  }
}


const speciesTraitlistAdditional = createNewSimpleElement("ul", "species__traitlist_additional", speciesTraitBlock);
for (let i = 0; i < `path`.length; i++) {
  const traitContainer = createNewSimpleElement("li", "species__container_leader", speciesTraitlistAdditional);
    const traitContainerImage = createNewImageElement("species__container-image", traitContainer, `${path}`[i].icon, path[i].nameEN);
    const traitContainerName = createNewTextElement("span", "species__container-name", traitContainer, `path`[i].nameEN);
}
}

export { createLeader }
