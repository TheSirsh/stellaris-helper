import { leaderRulerBiological, leaderRulerSynthitic } from "./leader-ruler-traits-list.js";
import { leaderGovernorBiological, leaderGovernorHiveMind, leaderGovernorSynthitic } from "./leader-governer-traits-list.js";
import { leaderScientistBiological, leaderScientistSynthitic } from "./leader-scientist-traits-list.js";
import { leaderAdmiralBiological, leaderAdmiralSynthitic } from "./leader-admiral-traits-list.js";
import { leaderGeneralBiological, leaderGeneralSynthitic } from "./leader-general-traits-list.js";
import { createValidArray } from "../../../create-valid-array-function.js";
function checkingLeader() {
    const species = localStorage.getItem("species");
    const leader = localStorage.getItem("leader");
    if (species === "Synthitic") {
        if (leader === "Ruler") {
            return leaderRulerSynthitic;
        }
        else if (leader === "Governor") {
            return leaderGovernorSynthitic;
        }
        else if (leader === "Scientist") {
            return leaderScientistSynthitic;
        }
        else if (leader === "Admiral") {
            return leaderAdmiralSynthitic;
        }
        else if (leader === "General") {
            return leaderGeneralSynthitic;
        }
    }
    else if (species === "HiveMind" || species === "Biological") {
        if (leader === "Ruler") {
            return createValidArray(leaderRulerBiological, "leader_trait_ruler_hive_mind");
        }
        else if (leader === "Governor") {
            return createValidArray(leaderGovernorBiological.concat(leaderGovernorHiveMind), "leader_trait_hive_mind");
        }
        else if (leader === "Scientist") {
            return createValidArray(leaderScientistBiological, "leader_trait_hive_mind");
        }
        else if (leader === "Admiral") {
            return createValidArray(leaderAdmiralBiological, "leader_trait_hive_mind");
        }
        else if (leader === "General") {
            return createValidArray(leaderGeneralBiological, "leader_trait_hive_mind");
        }
    }
}
export { checkingLeader };
