import { ITraits } from "../interface";

const leaderGovernorBiological: Array<ITraits> = [
  {
    trait: "leader_trait_governor_gray",
    icon: "../src/icons/leader-traits/governor-nanite-entity.png",
    nameEN: "Nanite Entity",
    nameRU: "",
    traits: [
      ["empty", "", "Immortal",],
      ["good", "−40%", "Building cost",],
      ["good", "+40%", "Planet Build Speed",],
      ["good", "+15%", "Energy from Jobs",],
      ["good", "+15%", "Minerals from Jobs",],
      ["good", "−40%", "Clear blocker cost",],
      ["good", "+40%", "Clear blocker speed",],
    ],
  },
  {
    trait: "leader_trait_governor_psionic",
    icon: "../src/icons/leader-traits/psionic.png",
    nameEN: "Psychic",
    nameRU: "",
    traits: [
      ["good", "+10%", "Unity from Jobs",],
    ],
    exclude: [
      "leader_trait_governor_cyborg",
      "leader_trait_governor_synthetic",
      "leader_trait_governor_chosen",
      "leader_trait_governor_composer_chosen",
      "leader_trait_governor_eater_chosen",
      "leader_trait_governor_instrument_chosen",
    ]
  },
  {
    trait: "leader_trait_governor_chosen",
    icon: "../src/icons/leader-traits/chosen-one.png",
    nameEN: "Chosen One",
    nameRU: "",
    traits: [
      ["empty", "", "Immortal",],
      ["good", "+10", "Stability",],
      ["good", "+20%", "Unity from Jobs",],
    ],
    exclude: [
      "leader_trait_governor_cyborg",
      "leader_trait_governor_synthetic",
      "leader_trait_governor_psionic",
      "leader_trait_governor_composer_chosen",
      "leader_trait_governor_eater_chosen",
      "leader_trait_governor_instrument_chosen",
    ],
  },
  {
    trait: "leader_trait_governor_composer_chosen",
    icon: "../src/icons/leader-traits/chosen-composer.png",
    nameEN: "Chosen of the Composer",
    nameRU: "",
    traits: [
      ["empty", "", "Immortal",],
      ["good", "+5%", "Pop growth speedn",],
      ["good", "+5%", "Resources from Jobs",],
    ],
    exclude: [
      "leader_trait_governor_cyborg",
      "leader_trait_governor_synthetic",
      "leader_trait_governor_psionic",
      "leader_trait_governor_chosen",
      "leader_trait_governor_eater_chosen",
      "leader_trait_governor_instrument_chosen",
    ],
  },
  {
    trait: "leader_trait_governor_eater_chosen",
    icon: "../src/icons/leader-traits/chosen-eater.png",
    nameEN: "Chosen of the Eater",
    nameRU: "",
    traits: [
      ["empty", "", "Immortal",],
      ["good", "+25%", "Ship build speed",],
      ["good", "-15%", "Ship build cost",],
    ],
    exclude: [
      "leader_trait_governor_cyborg",
      "leader_trait_governor_synthetic",
      "leader_trait_governor_psionic",
      "leader_trait_governor_chosen",
      "leader_trait_governor_composer_chosen",
      "leader_trait_governor_instrument_chosen",
    ],
  },
  {
    trait: "leader_trait_governor_instrument_chosen",
    icon: "../src/icons/leader-traits/chosen-instrument.png",
    nameEN: "Chosen of the Instrument",
    nameRU: "",
    traits: [
      ["empty", "", "Immortal",],
      ["good", "+30%", "Slave resource output",],
      ["good", "+5", "Stability",],
    ],
    exclude: [
      "leader_trait_governor_cyborg",
      "leader_trait_governor_synthetic",
      "leader_trait_governor_psionic",
      "leader_trait_governor_chosen",
      "leader_trait_governor_eater_chosen",
      "leader_trait_governor_composer_chosen",
    ],
  },
  {
    trait: "leader_trait_governor_cyborg",
    icon: "../src/icons/leader-traits/cyborg.png",
    nameEN: "Cyborg",
    nameRU: "",
    traits: [
      ["good", "−10%", "Pop upkeep",],
    ],
    exclude: [
      "leader_trait_governor_synthetic",
      "leader_trait_governor_psionic",
      "leader_trait_governor_chosen",
      "leader_trait_governor_eater_chosen",
      "leader_trait_governor_composer_chosen",
      "leader_trait_governor_instrument_chosen",
    ],
  },
  {
    trait: "leader_trait_governor_erudite",
    icon: "../src/icons/leader-traits/erudite.png",
    nameEN: "Erudite",
    nameRU: "",
    traits: [
      ["good", "+5%", "Research from Jobs",],
    ],
  },
  {
    trait: "leader_trait_governor_brainslug",
    icon: "../src/icons/leader-traits/brain-slug.png",
    nameEN: "Brain Slug Host",
    nameRU: "",
    traits: [
      ["good", "+10%", "Planet Build Speed",],
      ["good", "+15%", "Research from Jobs",],
    ],
  },
  {
    trait: "leader_trait_adaptable",
    icon: "../src/icons/leader-traits/adaptable.png",
    nameEN: "Adaptable",
    nameRU: "",
    traits: [
      ["good", "+25%", "Leader experience gain",],
    ],
    exclude: [
      "leader_trait_stubborn",
    ],
  },
  {
    trait: "leader_trait_stubborn",
    icon: "../src/icons/leader-traits/stubborn.png",
    nameEN: "Stubborn",
    nameRU: "",
    traits: [
      ["bad", "-25%", "Leader experience gain",],
    ],
    exclude: [
      "leader_trait_adaptable",
    ],
  },
  {
    trait: "leader_trait_eager",
    icon: "../src/icons/leader-traits/eager.png",
    nameEN: "Eager",
    nameRU: "",
    traits: [
      ["good", "-50%", "Leader cost",],
      ["good", "-50%", "Leader upkeep",],
    ],
  },
  {
    trait: "leader_trait_resilient",
    icon: "../src/icons/leader-traits/resilient.png",
    nameEN: "Resilient",
    nameRU: "",
    traits: [
      ["good", "+25", "Leader lifespan",],
    ],
    exclude: [
      "leader_trait_substance_abuser",
    ],
  },
  {
    trait: "leader_trait_resilient",
    icon: "../src/icons/leader-traits/substance-abuser.png",
    nameEN: "Substance Abuser",
    nameRU: "",
    traits: [
      ["bad", "-20", "Leader lifespan",],
    ],
    exclude: [
      "leader_trait_resilient",
    ],
  },
  {
    trait: "leader_trait_shroud_age",
    icon: "../src/icons/leader-traits/adaptable.png",
    nameEN: "Increased Lifespan",
    nameRU: "",
    traits: [
      ["good", "+40", "Leader lifespan",],
    ],
  },
  {
    trait: "leader_trait_dragonbane",
    icon: "../src/icons/leader-traits/dragonbane.png",
    nameEN: "Dragonbane",
    nameRU: "",
    traits: [
      ["good", "+25%", "Leader experience gain",],
      ["good", "+1", "Leader Level Cap",],
    ],
  },
  {
    trait: "leader_trait_agrarian_upbringing",
    icon: "../src/icons/leader-traits/governor-agrarian-upbringing.png",
    nameEN: "Agrarian Upbringing",
    nameRU: "",
    traits: [
      ["good", "+10%", "Food from Jobs",],
    ],
  },
  {
    trait: "leader_trait_architectural_interest",
    icon: "../src/icons/leader-traits/governor-architectural-interest.png",
    nameEN: "Architectural Interest",
    nameRU: "",
    traits: [
      ["good", "-10%", "Building cost",],
      ["good", "-10%", "District cost",],
      ["good", "+10%", "Planet Build Speed",],
    ],
  },
  {
    trait: "leader_trait_army_veteran",
    icon: "../src/icons/leader-traits/governor-army-veteran.png",
    nameEN: "Army Veteran",
    nameRU: "",
    traits: [
      ["good", "+20%", "Army Build Speed",],
      ["good", "-20%", "Army cost",],
      ["good", "+20%", "Defense Army damage",],
    ],
  },
  {
    trait: "leader_trait_bureaucrat",
    icon: "../src/icons/leader-traits/governor-unifier.png",
    nameEN: "Unifier",
    nameRU: "",
    traits: [
      ["good", "+10%", "Unity from Administrators",],
    ],
  },
  {
    trait: "leader_trait_environmental_engineer",
    icon: "../src/icons/leader-traits/governor-environmental-engineer.png",
    nameEN: "Environmental Engineer",
    nameRU: "",
    traits: [
      ["good", "-25%", "Clear blocker cost",],
      ["good", "+25%", "Clear blocker speed",],
    ],
  },
  {
    trait: "leader_trait_iron_fist",
    icon: "../src/icons/leader-traits/governor-iron-fist.png",
    nameEN: "Iron Fist",
    nameRU: "",
    traits: [
      ["good", "+10%", "Slave pop resource output",],
    ],
  },
  {
    trait: "leader_trait_intellectual",
    icon: "../src/icons/leader-traits/governor-intellectual.png",
    nameEN: "Intellectual",
    nameRU: "",
    traits: [
      ["good", "+10%", "Research from Jobs",],
    ],
  },
  {
    trait: "leader_trait_retired_fleet_officer",
    icon: "../src/icons/leader-traits/governor-retired-fleet-officer.png",
    nameEN: "Retired Fleet Officer",
    nameRU: "",
    traits: [
      ["good", "+20%", "Shipyard Build Speed",],
      ["good", "-10%", "Shipyard Build cost",],
    ],
  },
  {
    trait: "leader_trait_righteous",
    icon: "../src/icons/leader-traits/governor-righteous.png",
    nameEN: "Righteous",
    nameRU: "",
    traits: [
      ["good", "-25", "Crime",],
    ],
    exclude: [
      "leader_trait_corrupt",
    ],
  },
  {
    trait: "leader_trait_corrupt",
    icon: "../src/icons/leader-traits/governor-corrupt.png",
    nameEN: "Corrupt",
    nameRU: "",
    traits: [
      ["good", "+25", "Crime",],
    ],
    exclude: [
  "leader_trait_righteous"
    ]
  },
  {
    trait: "leader_trait_enclave_trader",
    icon: "../src/icons/leader-traits/governor-enclave-trader.png",
    nameEN: "Enclave Trader",
    nameRU: "",
    traits: [
      ["good", "+10%", "Trade Value",],
    ],
  },
  {
    trait: "leader_trait_nuumismatic_priest",
    icon: "../src/icons/leader-traits/governor-nuumismatic-priest.png",
    nameEN: "Merchant of Numa",
    nameRU: "",
    traits: [
      ["good", "+10%", "Trade Value",],
      ["good", "-10%", "Pop consumer goods upkeep",],
    ],
  },
  {
    trait: "leader_trait_waste_management_specialist",
    icon: "../src/icons/leader-traits/governor-waste-management-specialist.png",
    nameEN: "Waste Management Specialist",
    nameRU: "",
    traits: [
      ["good", "-10%", "Building Upkeep",],
    ],
  },
  {
    trait: "leader_trait_prospectorium_extractor",
    icon: "../src/icons/leader-traits/chosenone.png",
    nameEN: "Prospectorium Extractor",
    nameRU: "",
    traits: [
      ["good", "+20%", "Energy Credits from Jobs",],
      ["good", "+20%", "Minerals from Jobs",],
      ["good", "+20%", "Alloys from Jobs",],
    ],
  },
  {
    trait: "leader_trait_prospectorium_optimizer",
    icon: "../src/icons/leader-traits/chosenone.png",
    nameEN: "Prospectorium Optimizer",
    nameRU: "",
    traits: [
      ["good", "-15%", "Upkeep from Pop jobs",],
    ],
  },
  {
    trait: "leader_trait_prospectorium_refiner",
    icon: "../src/icons/leader-traits/chosenone.png",
    nameEN: "Prospectorium Refiner",
    nameRU: "",
    traits: [
      ["good", "+25%", "Chemist Output",],
      ["good", "+25%", "Gas Refiner Output",],
      ["good", "+25%", "Translucer Output",],
    ],
  },
]

const leaderGovernorHiveMind: Array<ITraits> = [
  {
    trait: "leader_trait_governor_gray",
    icon: "../src/icons/leader-traits/governor-nanite-entity.png",
    nameEN: "Nanite Entity",
    nameRU: "",
    traits: [
      ["empty", "", "Immortal",],
      ["good", "−40%", "Building cost",],
      ["good", "+40%", "Planet Build Speed",],
      ["good", "+15%", "Energy from Jobs",],
      ["good", "+15%", "Minerals from Jobs",],
      ["good", "−40%", "Clear blocker cost",],
      ["good", "+40%", "Clear blocker speed",],
    ],
  },
  {
    trait: "leader_trait_governor_chosen",
    icon: "../src/icons/leader-traits/chosen-one.png",
    nameEN: "Chosen One",
    nameRU: "",
    traits: [
      ["empty", "", "Immortal",],
      ["good", "+10", "Stability",],
      ["good", "+20%", "Unity from Jobs",],
    ],
  },
  {
    trait: "leader_trait_governor_composer_chosen",
    icon: "../src/icons/leader-traits/chosen-composer.png",
    nameEN: "Chosen of the Composer",
    nameRU: "",
    traits: [
      ["empty", "", "Immortal",],
      ["good", "+5%", "Pop growth speedn",],
      ["good", "+5%", "Resources from Jobs",],
    ],
  },
  {
    trait: "leader_trait_governor_eater_chosen",
    icon: "../src/icons/leader-traits/chosen-eater.png",
    nameEN: "Chosen of the Eater",
    nameRU: "",
    traits: [
      ["empty", "", "Immortal",],
      ["good", "+25%", "Ship build speed",],
      ["good", "-15%", "Ship build cost",],
    ],
  },
  {
    trait: "leader_trait_governor_instrument_chosen",
    icon: "../src/icons/leader-traits/chosen-instrument.png",
    nameEN: "Chosen of the Instrument",
    nameRU: "",
    traits: [
      ["empty", "", "Immortal",],
      ["good", "+30%", "Slave resource output",],
      ["good", "+5", "Stability",],
    ],
  },
  {
    trait: "leader_trait_governor_cyborg",
    icon: "../src/icons/leader-traits/cyborg.png",
    nameEN: "Cyborg",
    nameRU: "",
    traits: [
      ["good", "−10%", "Pop upkeep",],
    ],
  },
  {
    trait: "leader_trait_governor_erudite",
    icon: "../src/icons/leader-traits/erudite.png",
    nameEN: "Erudite",
    nameRU: "",
    traits: [
      ["good", "+5%", "Research from Jobs",],
    ],
  },
  {
    trait: "leader_trait_governor_brainslug",
    icon: "../src/icons/leader-traits/brain-slug.png",
    nameEN: "Brain Slug Host",
    nameRU: "",
    traits: [
      ["good", "+10%", "Planet Build Speed",],
      ["good", "+15%", "Research from Jobs",],
    ],
  },
  {
    trait: "leader_trait_agrarian_upbringing",
    icon: "../src/icons/leader-traits/governor-agrarian-upbringing.png",
    nameEN: "Agrarian Upbringing",
    nameRU: "",
    traits: [
      ["good", "+10%", "Food from Jobs",],
    ],
  },
  {
    trait: "leader_trait_architectural_interest",
    icon: "../src/icons/leader-traits/governor-architectural-interest.png",
    nameEN: "Architectural Interest",
    nameRU: "",
    traits: [
      ["good", "-10%", "Building cost",],
      ["good", "-10%", "District cost",],
      ["good", "+10%", "Planet Build Speed",],
    ],
  },
  {
    trait: "leader_trait_army_veteran",
    icon: "../src/icons/leader-traits/governor-army-veteran.png",
    nameEN: "Army Veteran",
    nameRU: "",
    traits: [
      ["good", "+20%", "Army Build Speed",],
      ["good", "-20%", "Army cost",],
      ["good", "+20%", "Defense Army damage",],
    ],
  },
  {
    trait: "leader_trait_mindfulness",
    icon: "../src/icons/leader-traits/governor-mindfulness.png",
    nameEN: "Mindfulness",
    nameRU: "",
    traits: [
      ["good", "+10%", "Unity from Administrators",],
    ],
  },
  {
    trait: "leader_trait_environmental_engineer",
    icon: "../src/icons/leader-traits/governor-environmental-engineer.png",
    nameEN: "Environmental Engineer",
    nameRU: "",
    traits: [
      ["good", "-25%", "Clear blocker cost",],
      ["good", "+25%", "Clear blocker speed",],
    ],
  },
  {
    trait: "leader_trait_intellectual",
    icon: "../src/icons/leader-traits/governor-intellectual.png",
    nameEN: "Intellectual",
    nameRU: "",
    traits: [
      ["good", "+10%", "Research from Jobs",],
    ],
  },
  {
    trait: "leader_trait_retired_fleet_officer",
    icon: "../src/icons/leader-traits/governor-retired-fleet-officer.png",
    nameEN: "Retired Fleet Officer",
    nameRU: "",
    traits: [
      ["good", "+20%", "Shipyard Build Speed",],
      ["good", "-10%", "Shipyard Build cost",],
    ],
  },
  {
    trait: "leader_trait_righteous",
    icon: "../src/icons/leader-traits/governor-righteous.png",
    nameEN: "Righteous",
    nameRU: "",
    traits: [
      ["good", "-25", "Crime",],
    ],
  },
  {
    trait: "leader_trait_enclave_trader",
    icon: "../src/icons/leader-traits/governor-enclave-trader.png",
    nameEN: "Enclave Trader",
    nameRU: "",
    traits: [
      ["good", "+10%", "Trade Value",],
    ],
  },
  {
    trait: "leader_trait_nuumismatic_priest",
    icon: "../src/icons/leader-traits/governor-nuumismatic-priest.png",
    nameEN: "Merchant of Numa",
    nameRU: "",
    traits: [
      ["good", "+10%", "Trade Value",],
      ["good", "-10%", "Pop consumer goods upkeep",],
    ],
  },
  {
    trait: "leader_trait_waste_management_specialist",
    icon: "../src/icons/leader-traits/governor-waste-management-specialist.png",
    nameEN: "Waste Management Specialist",
    nameRU: "",
    traits: [
      ["good", "-10%", "Building Upkeep",],
    ],
  },
  {
    trait: "leader_trait_prospectorium_extractor",
    icon: "../src/icons/leader-traits/chosenone.png",
    nameEN: "Prospectorium Extractor",
    nameRU: "",
    traits: [
      ["good", "+20%", "Energy Credits from Jobs",],
      ["good", "+20%", "Minerals from Jobs",],
      ["good", "+20%", "Alloys from Jobs",],
    ],
  },
  {
    trait: "leader_trait_prospectorium_optimizer",
    icon: "../src/icons/leader-traits/chosenone.png",
    nameEN: "Prospectorium Optimizer",
    nameRU: "",
    traits: [
      ["good", "-15%", "Upkeep from Pop jobs",],
    ],
  },
  {
    trait: "leader_trait_prospectorium_refiner",
    icon: "../src/icons/leader-traits/chosenone.png",
    nameEN: "Prospectorium Refiner",
    nameRU: "",
    traits: [
      ["good", "+25%", "Chemist Output",],
      ["good", "+25%", "Gas Refiner Output",],
      ["good", "+25%", "Translucer Output",],
    ],
  },
]

const leaderGovernorSynthitic: Array<ITraits> = [
  {
    trait: "leader_trait_governor_synthetic",
    icon: "../src/icons/leader-traits/chosen-composer.png",
    nameEN: "Synthetic",
    nameRU: "",
    traits: [
      ["good", "+5%", "Worker resource output",],
    ],
  },
  {
    trait: "leader_trait_governor_gray",
    icon: "../src/icons/leader-traits/governor-nanite-entity.png",
    nameEN: "Nanite Entity",
    nameRU: "",
    traits: [
      ["empty", "", "Immortal",],
      ["good", "−40%", "Building cost",],
      ["good", "+40%", "Planet Build Speed",],
      ["good", "+15%", "Energy from Jobs",],
      ["good", "+15%", "Minerals from Jobs",],
      ["good", "−40%", "Clear blocker cost",],
      ["good", "+40%", "Clear blocker speed",],
    ],
  },
  {
    trait: "leader_trait_flexible_programming",
    icon: "../src/icons/leader-traits/adaptable.png",
    nameEN: "Flexible Programming",
    nameRU: "",
    traits: [
      ["good", "+25%", "Leader experience gain",],
    ],
  },
  {
    trait: "leader_trait_newboot",
    icon: "../src/icons/leader-traits/newboot.png",
    nameEN: "Newboot",
    nameRU: "",
    traits: [
      ["good", "-50%", "Leader cost",],
      ["good", "-50%", "Leader upkeep",],
    ],
  },
  {
    trait: "leader_trait_architectural_interest",
    icon: "../src/icons/leader-traits/governor-architectural-interest.png",
    nameEN: "Architectural Interest",
    nameRU: "",
    traits: [
      ["good", "-10%", "Building cost",],
      ["good", "-10%", "District cost",],
      ["good", "+10%", "Planet Build Speed",],
    ],
  },
  {
    trait: "leader_trait_warbot_tinkerer",
    icon: "../src/icons/leader-traits/governor-warbot-tinkerer.png",
    nameEN: "Warbot Tinkerer",
    nameRU: "",
    traits: [
      ["good", "+20%", "Army Build Speed",],
      ["good", "-20%", "Army cost",],
      ["good", "+20%", "Defense Army damage",],
    ],
  },
  {
    trait: "leader_trait_amplifier",
    icon: "../src/icons/leader-traits/governor-amplifier.png",
    nameEN: "Mindfulness",
    nameRU: "",
    traits: [
      ["good", "+10%", "Unity from Administrators",],
    ],
  },
  {
    trait: "leader_trait_bulldozer",
    icon: "../src/icons/leader-traits/governor-bulldozer.png",
    nameEN: "Bulldozer",
    nameRU: "",
    traits: [
      ["good", "-25%", "Clear blocker cost",],
      ["good", "+25%", "Clear blocker speed",],
    ],
  },
  {
    trait: "leader_trait_analytical",
    icon: "../src/icons/leader-traits/governor-analitical.png",
    nameEN: "Analytical",
    nameRU: "",
    traits: [
      ["good", "+10%", "Research from Jobs",],
    ],
  },
  {
    trait: "leader_trait_ai_aided_design",
    icon: "../src/icons/leader-traits/governor-ai-aided-design.png",
    nameEN: "Ai-Aided Design",
    nameRU: "",
    traits: [
      ["good", "+20%", "Shipyard Build Speed",],
      ["good", "-10%", "Shipyard Build cost",],
    ],
  },
  {
    trait: "leader_trait_righteous",
    icon: "../src/icons/leader-traits/governor-righteous.png",
    nameEN: "Righteous",
    nameRU: "",
    traits: [
      ["good", "-25", "Crime",],
    ],
  },
  {
    trait: "leader_trait_enclave_trader",
    icon: "../src/icons/leader-traits/governor-enclave-trader.png",
    nameEN: "Enclave Trader",
    nameRU: "",
    traits: [
      ["good", "+10%", "Trade Value",],
    ],
  },
  {
    trait: "leader_trait_nuumismatic_priest",
    icon: "../src/icons/leader-traits/governor-nuumismatic-priest.png",
    nameEN: "Merchant of Numa",
    nameRU: "",
    traits: [
      ["good", "+10%", "Trade Value",],
      ["good", "-10%", "Pop consumer goods upkeep",],
    ],
  },
  {
    trait: "leader_trait_waste_management_specialist",
    icon: "../src/icons/leader-traits/governor-waste-management-specialist.png",
    nameEN: "Waste Management Specialist",
    nameRU: "",
    traits: [
      ["good", "-10%", "Building Upkeep",],
    ],
  },
  {
    trait: "leader_trait_prospectorium_extractor",
    icon: "../src/icons/leader-traits/chosenone.png",
    nameEN: "Prospectorium Extractor",
    nameRU: "",
    traits: [
      ["good", "+20%", "Energy Credits from Jobs",],
      ["good", "+20%", "Minerals from Jobs",],
      ["good", "+20%", "Alloys from Jobs",],
    ],
  },
  {
    trait: "leader_trait_prospectorium_optimizer",
    icon: "../src/icons/leader-traits/chosenone.png",
    nameEN: "Prospectorium Optimizer",
    nameRU: "",
    traits: [
      ["good", "-15%", "Upkeep from Pop jobs",],
    ],
  },
  {
    trait: "leader_trait_prospectorium_refiner",
    icon: "../src/icons/leader-traits/chosenone.png",
    nameEN: "Prospectorium Refiner",
    nameRU: "",
    traits: [
      ["good", "+25%", "Chemist Output",],
      ["good", "+25%", "Gas Refiner Output",],
      ["good", "+25%", "Translucer Output",],
    ],
  },
]

export { leaderGovernorBiological, leaderGovernorHiveMind, leaderGovernorSynthitic, }