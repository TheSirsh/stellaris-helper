import { leaderRulerBiological, leaderRulerSynthitic } from "./objects/leaders/leader-ruler-traits.js";
import { leaderGovernorBiological, leaderGovernorHiveMind, leaderGovernorSynthitic } from "./objects/leaders/leader-governer-traits.js";
import { leaderScientistBiological, leaderScientistSynthitic } from "./objects/leaders/leader-scientist-traits.js";
import { leaderAdmiralBiological, leaderAdmiralSynthitic } from "./objects/leaders/leader-admiral-traits.js";
import { leaderGeneralBiological, leaderGeneralSynthitic } from "./objects/leaders/leader-general-traits.js";
import { createValidArray } from "./create-valid-array-function.js";
import { ITraits } from "./interface.js";

function checkingLeader(): Array<ITraits> {
  const species: string = localStorage.getItem("species");
  const leader: string = localStorage.getItem("leader");
  if (species === "Synthitic") {
    if (leader === "Ruler") { return leaderRulerSynthitic; } 
      else if (leader === "Governor") { return leaderGovernorSynthitic; }
        else if (leader === "Scientist") { return leaderScientistSynthitic; }
          else if (leader === "Admiral") { return leaderAdmiralSynthitic; }
            else if (leader === "General") { return leaderGeneralSynthitic; }
  } else if (species === "HiveMind" || species === "Biological") {
    if (leader === "Ruler") { return createValidArray(leaderRulerBiological, "leader_trait_ruler_hive_mind"); } 
      else if (leader === "Governor") { return createValidArray(leaderGovernorBiological.concat(leaderGovernorHiveMind), "leader_trait_hive_mind"); }
        else if (leader === "Scientist") { return createValidArray(leaderScientistBiological, "leader_trait_hive_mind"); }
          else if (leader === "Admiral") { return createValidArray(leaderAdmiralBiological, "leader_trait_hive_mind"); }
          else if (leader === "General") { return createValidArray(leaderGeneralBiological, "leader_trait_hive_mind"); }
    }
}

export { checkingLeader }