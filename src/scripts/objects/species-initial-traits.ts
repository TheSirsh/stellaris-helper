import { ITraits } from "../interface.js"

const speciesBiologicalTraits: Array<ITraits> = [
  {
    trait: "trait_adaptive",
    icon: "../src/icons/initial-traits/adaptive.png",
    nameEN: "Adaptive",
    nameRU: "",
    traits: [
      ["good", "+10%", "Habitability",],
    ],
    exclude: [
      "trait_extremely_adaptive",
      "trait_nonadaptive",
      "trait_robust",
      "trait_adaptive_lithoid",
      "trait_lithoid",
    ],
  },
  {
    trait: "trait_extremely_adaptive",
    icon: "../src/icons/initial-traits/extremely-adaptive.png",
    nameEN: "Extremely Adaptive",
    nameRU: "",
    traits: [
      ["good", "+20%", "Habitability",],
    ],
    exclude: [
      "trait_adaptive",
      "trait_nonadaptive",
      "trait_robust",
      "trait_adaptive_lithoid",
      "trait_lithoid,"
    ],
  },
  {
    trait: "trait_nonadaptive",
    icon: "../src/icons/initial-traits/nonadaptive.png",
    nameEN: "Nonadaptive",
    nameRU: "",
    traits: [
      ["bad", "-10%", "Habitability",],
    ],
    exclude: [
      "trait_adaptive",
      "trait_extremely_adaptive",
      "trait_robust",
      "trait_adaptive_lithoid",
      "trait_lithoid,"
    ],
  },
  {
    trait: "trait_agrarian",
    icon: "../src/icons/initial-traits/agrarian.png",
    nameEN: "Agrarian",
    nameRU: "",
    traits: [
      ["good", "+15%", "Food from Jobs",],
    ],
    exclude: [
      "trait_lithoid",
    ],
  },
  {
    trait: "trait_charismatic",
    icon: "../src/icons/initial-traits/charismatic.png",
    nameEN: "Charismatic",
    nameRU: "",
    traits: [
      ["good", "+20%", "Amenities from Jobs",],
    ],
    exclude: [
      "trait_repugnant",
    ],
  },
  {
    trait: "trait_repugnant",
    icon: "../src/icons/initial-traits/repugnant.png",
    nameEN: "Repugnant",
    nameRU: "",
    traits: [
      ["bad", "-20%", "Amenities from Jobs",],
    ],
    exclude: [
      "trait_charismatic",
    ],
  },
  {
    trait: "trait_communal",
    icon: "../src/icons/initial-traits/communal.png",
    nameEN: "Communal",
    nameRU: "",
    traits: [
      ["good", "-10%", "Pop Housing Usage",],
    ],
    exclude: [
      "trait_solitary",
    ],
  },
  {
    trait: "trait_solitary",
    icon: "../src/icons/initial-traits/solitary.png",
    nameEN: "Solitary",
    nameRU: "",
    traits: [
      ["bad", "+10%", "Pop Housing Usage",],
    ],
    exclude: [
      "trait_communal",
    ],
  },
  {
    trait: "trait_conformists",
    icon: "../src/icons/initial-traits/conformists.png",
    nameEN: "Conformists",
    nameRU: "",
    traits: [
      ["good", "+30%", "Governing Ethics Attraction",],
    ],
    exclude: [
      "trait_deviants",
      "trait_hive_mind",
      "trait_machine_unit",
    ],
  },
  {
    trait: "trait_deviants",
    icon: "../src/icons/initial-traits/deviants.png",
    nameEN: "Deviants",
    nameRU: "",
    traits: [
      ["bad", "-15%", "Governing Ethics Attraction",],
    ],
    exclude: [
      "trait_conformists",
      "trait_hive_mind",
      "trait_machine_unit",
    ],
  },
  {
    trait: "trait_conservational",
    icon: "../src/icons/initial-traits/conservationist.png",
    nameEN: "Conservationist",
    nameRU: "",
    traits: [
      ["good", "−10%", "Pop consumer goods upkeep",],
    ],
    exclude: [
      "trait_wasteful",
      "trait_hive_mind",
    ],
  },
  {
    trait: "trait_wasteful",
    icon: "../src/icons/initial-traits/wasteful.png",
    nameEN: "Wasteful",
    nameRU: "",
    traits: [
      ["bad", "+10%", "Pop consumer goods upkeep",],
    ],
    exclude: [
      "trait_conservational",
      "trait_hive_mind",
    ],
  },
  {
    trait: "trait_docile",
    icon: "../src/icons/initial-traits/docile.png",
    nameEN: "Docile",
    nameRU: "",
    traits: [
      ["good", "−10%", "Empire Size from Pops",],
    ],
    exclude: [
      "trait_unruly",
    ],
  },
  {
    trait: "trait_unruly",
    icon: "../src/icons/initial-traits/unruly.png",
    nameEN: "Unruly",
    nameRU: "",
    traits: [
      ["bad", "+10%", "Empire Size from Pops",],
    ],
    exclude: [
      "trait_docile",
    ],
  },
  {
    trait: "trait_enduring",
    icon: "../src/icons/initial-traits/enduring.png",
    nameEN: "Enduring",
    nameRU: "",
    traits: [
      ["good", "+20", "years Leader Lifespan",],
    ],
    exclude: [
      "trait_venerable",
      "trait_fleeting",
      "trait_fleeting_lithoid",
    ],
  },
  {
    trait: "trait_venerable",
    icon: "../src/icons/initial-traits/venerable.png",
    nameEN: "Venerable",
    nameRU: "",
    traits: [
      ["good", "+80", "years Leader Lifespan",],
    ],
    exclude: [
      "trait_enduring",
      "trait_fleeting",
      "trait_fleeting_lithoid",

    ],
  },
  {
    trait: "trait_fleeting",
    icon: "../src/icons/initial-traits/fleeting.png",
    nameEN: "Fleeting",
    nameRU: "",
    traits: [
      ["bad", "-10", "years Leader Lifespan if Biological",],
    ],
    exclude: [
      "trait_enduring",
      "trait_venerable",
      "trait_fleeting_lithoid",
    ],
  },
  {
    trait: "trait_fleeting",
    icon: "../src/icons/initial-traits/fleeting.png",
    nameEN: "Fleeting",
    nameRU: "",
    traits: [
      ["bad", "-25", "years Leader Lifespan if Lithoid",],
    ],
    exclude: [
      "trait_enduring",
      "trait_venerable",
      "trait_fleeting_lithoid",
    ],
  },
  {
    trait: "trait_industrious",
    icon: "../src/icons/initial-traits/industrious.png",
    nameEN: "Industrious",
    nameRU: "",
    traits: [
      ["good", "+15%", "Minerals from Jobs",],
    ],
  },
  {
    trait: "trait_ingenious",
    icon: "../src/icons/initial-traits/ingenious.png",
    nameEN: "Ingenious",
    nameRU: "",
    traits: [
      ["good", "+15%", "Energy Credits from Jobs",],
    ],
  },
  {
    trait: "trait_intelligent",
    icon: "../src/icons/initial-traits/intelligent.png",
    nameEN: "Intelligent",
    nameRU: "",
    traits: [
      ["good", "+10%", "Research from Jobs",],
    ],
    exclude: [
      "trait_nerve_stapled",
      "trait_erudite",
      "trait_enigmatic_intelligence_poor",
    ],
  },
  {
    trait: "trait_natural_engineers",
    icon: "../src/icons/initial-traits/natural-engineers.png",
    nameEN: "Natural Engineers",
    nameRU: "",
    traits: [
      ["good", "+15%", "Engineering Research from Jobs",],
    ],
    exclude: [
      "trait_natural_physicists",
      "trait_natural_sociologists",
      "trait_nerve_stapled",
    ],
  },
  {
    trait: "trait_natural_physicists",
    icon: "../src/icons/initial-traits/natural-physicists.png",
    nameEN: "Natural Physicists",
    nameRU: "",
    traits: [
      ["good", "+15%", "Physics Research from Jobs",],
    ],
    exclude: [
      "trait_natural_engineers",
      "trait_natural_sociologists",
      "trait_nerve_stapled",
    ],
  },
  {
    trait: "trait_natural_sociologists",
    icon: "../src/icons/initial-traits/natural-sociologists.png",
    nameEN: "Natural Sociologists",
    nameRU: "",
    traits: [
      ["good", "+15%", "Society Research from Jobs",],
    ],
    exclude: [
      "trait_natural_physicists",
      "trait_natural_engineers",
      "trait_nerve_stapled",
    ],
  },
  {
    trait: "trait_nomadic",
    icon: "../src/icons/initial-traits/nomadic.png",
    nameEN: "Nomadic",
    nameRU: "",
    traits: [
      ["good", "+15%", "Pop growth from immigration",],
      ["good", "-25%", "Resettlement Cost",],
    ],
    exclude: [
      "trait_sedentary",
    ],
  },
  {
    trait: "trait_sedentary",
    icon: "../src/icons/initial-traits/sedentary.png",
    nameEN: "Sedentary",
    nameRU: "",
    traits: [
      ["bad", "-15%", "Pop growth from immigration",],
      ["bad", "+25%", "Resettlement Cost",],
    ],
    exclude: [
      "trait_nomadic",
    ],
  },
  {
    trait: "trait_quick_learners",
    icon: "../src/icons/initial-traits/quick-learners.png",
    nameEN: "Quick Learners",
    nameRU: "",
    traits: [
      ["good", "+25%", "Leader Experience Gain",],
    ],
    exclude: [
      "trait_slow_learners"
    ],
  },
  {
    trait: "trait_slow_learners",
    icon: "../src/icons/initial-traits/slow-learners.png",
    nameEN: "Slow Learners",
    nameRU: "",
    traits: [
      ["bad", "-25%", "Leader Experience Gain",],
    ],
    exclude: [
      "trait_quick_learners",
      "trait_enigmatic_intelligence",
    ],
  },
  {
    trait: "trait_rapid_breeders",
    icon: "../src/icons/initial-traits/rapid-breeders.png",
    nameEN: "Rapid Breeders",
    nameRU: "",
    traits: [
      ["good", "+10%", "Growth Speed",],
    ],
    exclude: [
      "trait_slow_breeders",
      "trait_fertile",
      "trait_rapid_breeders_lithoid",
      "trait_plantoid_budding",
      "trait_lithoid_budding",
      "trait_vat_grown",
      "trait_tiyanki",
      "trait_lithoid",
    ],
  },
  {
    trait: "trait_slow_breeders",
    icon: "../src/icons/initial-traits/slow-breeders.png",
    nameEN: "Slow Breeders",
    nameRU: "",
    traits: [
      ["bad", "-10%", "Growth Speed",],
    ],
    exclude: [
      "trait_rapid_breeders",
      "trait_fertile",
      "trait_rapid_breeders_lithoid",
      "trait_plantoid_budding",
      "trait_lithoid_budding",
      "trait_vat_grown",
      "trait_tiyanki",
      "trait_lithoid",
    ],
  },
  {
    trait: "trait_resilient",
    icon: "../src/icons/initial-traits/resilient.png",
    nameEN: "Resilient",
    nameRU: "",
    traits: [
      ["good", "+50%", "Defense Army Damage",],
    ],
  },
  {
    trait: "trait_strong",
    icon: "../src/icons/initial-traits/strong.png",
    nameEN: "Strong",
    nameRU: "",
    traits: [
      ["good", "+20%", "Army Damage"],
      ["good", "+2.5%", "Worker and Menial Drone Pop Resource Output",],
    ],
    exclude: [
      "trait_very_strong",
      "trait_weak",
    ],
  },
  {
    trait: "trait_very_strong",
    icon: "../src/icons/initial-traits/very-strong.png",
    nameEN: "Very Strong",
    nameRU: "",
    traits: [
      ["good", "+40%", "Army Damage",],
      ["good", "+5%", "Worker and Menial Drone Pop Resource Output",],
    ],
    exclude: [
      "trait_strong",
      "trait_weak",
    ],
  },
  {
    trait: "trait_weak",
    icon: "../src/icons/initial-traits/weak.png",
    nameEN: "Very Strong",
    nameRU: "",
    traits: [
      ["bad", "-20%", "Army Damage",],
      ["bad", "-2.5%", "Worker and Menial Drone Pop Resource Output",],
    ],
    exclude: [
      "trait_strong",
      "trait_very_strong",
    ],
  },
  {
    trait: "trait_talented",
    icon: "../src/icons/initial-traits/talented.png",
    nameEN: "Talented",
    nameRU: "",
    traits: [
      ["good", "+1", "Leader Level Cap",],
    ],
    exclude: [
      "trait_talented",
    ],
  },
  {
    trait: "trait_thrifty",
    icon: "../src/icons/initial-traits/thrifty.png",
    nameEN: "Thrifty",
    nameRU: "",
    traits: [
      ["good", "+25%", "Trade value from Jobs",],
    ],
    exclude: [
      "trait_hive_mind",
    ],
  },
  {
    trait: "trait_traditional",
    icon: "../src/icons/initial-traits/traditional.png",
    nameEN: "Traditional",
    nameRU: "",
    traits: [
      ["good", "+10%", "Unity from Jobs",],
    ],
    exclude: [
      "trait_quarrelsome",
    ]
  },
  {
    trait: "trait_quarrelsome",
    icon: "../src/icons/initial-traits/quarrelsome.png",
    nameEN: "Quarrelsome",
    nameRU: "",
    traits: [
      ["bad", "-10%", "Unity from Jobs",],
    ],
    exclude: [
      "trait_traditional",
    ]
  },
  {
    trait: "trait_decadent",
    icon: "../src/icons/initial-traits/decadent.png",
    nameEN: "Decadent",
    nameRU: "",
    traits: [
      ["bad", "-10%", "Worker Happiness",],
      ["bad", "-10%", "Slave Happiness",],
    ],
  },
]

const speciesBotanicalTraits: Array<ITraits> = [
  {
    trait: "trait_plantoid_phototrophic",
    icon: "../src/icons/initial-traits/plantoid-phototrophic.png",
    nameEN: "Phototrophic",
    nameRU: "",
    traits: [
      ["empty", "", "Replaces half of the Food upkeep with Energy"],
    ],
  },
  {
    trait: "trait_plantoid_radiotrophic",
    icon: "../src/icons/initial-traits/plantoid-radiotrophic.png",
    nameEN: "Radiotrophic",
    nameRU: "",
    traits: [
      ["empty", "", "Replaces half of the Food or Minerals upkeep with Energy"],
      ["empty", "", "No Energy upkeep on Tomb Worlds"],
      ["good", "+10%", "Tomb World Pop Growth Speed",],
      ["good", "+0.02", "Monthly Organic Pop Assembly per Pop",],
    ],
  },
  {
    trait: "trait_plantoid_budding",
    icon: "../src/icons/initial-traits/plantoid-budding.png",
    nameEN: "Budding",
    nameRU: "",
    traits: [
      ["good", "+10%", "Unity from Jobs",],
    ],
  },
]

const speciesLithoidTraits: Array<ITraits> = [
  {
    trait: "trait_lithoid_gaseous_byproducts",
    icon: "../src/icons/initial-traits/lithoid-gaseous-byproducts.png",
    nameEN: "Gaseous Byproducts",
    nameRU: "",
    traits: [
      ["good", "+0.01", "Monthly Exotic Gases per Pop",],
    ],
  },
  {
    trait: "trait_lithoid_scintillating",
    icon: "../src/icons/initial-traits/lithoid-scintillating.png",
    nameEN: "Scintillating Skin",
    nameRU: "",
    traits: [
      ["good", "+0.01", "Monthly Rare Crystals per Pop",],
    ],
  },
  {
    trait: "trait_lithoid_volatile_excretions",
    icon: "../src/icons/initial-traits/lithoid-volatile-excretions.png",
    nameEN: "Volatile Excretions",
    nameRU: "",
    traits: [
      ["good", "+0.01", "Monthly Volatile Motes per Pop",],
    ],
  },
  {
    trait: "trait_lithoid_budding",
    icon: "../src/icons/initial-traits/lithoid-budding.png",
    nameEN: "Crystallization",
    nameRU: "",
    traits: [
      ["good", "+0.02", "Monthly Organic Pop Assembly per Pop",],
    ],
  },
]

const speciesToxicTraits: Array<ITraits> = [
  {
    trait: "trait_incubator",
    icon: "../src/icons/initial-traits/toxic-incubator.png",
    nameEN: "Incubators",
    nameRU: "",
    traits: [
      ["good", "+1%", "Pop Growth Speed per pops below 37 (max +30%)",],
      ["bad", "-1%", "Pop Growth Speed per pops above 37 (max −10%)",]
    ],
  },
  {
    trait: "trait_noxious",
    icon: "../src/icons/initial-traits/toxic-noxious.png",
    nameEN: "Noxious",
    nameRU: "",
    traits: [
      ["good", "+0.02", "Happiness per non-Noxious Pop",],
      ["good", "+5%", "Happiness",],
      ["good", "+50%", "Army Damage",],
      ["good", "+30%", "Species Minimum Habitability",],
      ["bad", "−30%", "Species Habitability Cap",],
      ["bad", "+10%", "Pop Housing Usage",],
      ["bad", "−0.01", "Happiness per Noxious Pop",],
    ],
  },
  {
    trait: "trait_inorganic_breath",
    icon: "../src/icons/initial-traits/toxic-inorganic-breath.png",
    nameEN: "Inorganic Breath",
    nameRU: "",
    traits: [
      ["good", "+0.02", "Monthly Exotic Gases per Pop",],
      ["bad", "+50%", "Pop Upkeep",],
    ],
  },
]

const speciesCyborgTraits: Array<ITraits> = [
  {
    trait: "trait_cyborg_double_jointed",
    icon: "../src/icons/initial-traits/cyborg-double-jointed.png",
    nameEN: "Double Jointed",
    nameRU: "",
    traits: [
      ["good", "+15%", "Pop Growth from Immigration",],
      ["good", "−25%", "Resettlement Cost",],
      ["bad", "+0.3", "Energy Upkeep",],
    ],
  },
  {
    trait: "trait_cyborg_durable",
    icon: "../src/icons/initial-traits/cyborg-durable.png",
    nameEN: "Durable",
    nameRU: "",
    traits: [
      ["good", "–0.5", "Pop Amenities Usage",],
      ["bad", "+0.3", "Energy Upkeep",],
    ],
  },
  {
    trait: "trait_cyborg_efficient_processors",
    icon: "../src/icons/initial-traits/cyborg-efficient-processors.png",
    nameEN: "Efficient Processors",
    nameRU: "",
    traits: [
      ["good", "+5%", "Resources from Jobs",],
      ["bad", "+0.3", "Energy Upkeep",],
    ],
  },
  {
    trait: "trait_cyborg_enhanced_memory",
    icon: "../src/icons/initial-traits/cyborg-enhanced-memory.png",
    nameEN: "Enhanced Memory",
    nameRU: "",
    traits: [
      ["good", "+2", "Leader Level Cap",],
      ["bad", "+0.3", "Energy Upkeep",],
    ],
  },
  {
    trait: "trait_cyborg_harvesters",
    icon: "../src/icons/initial-traits/cyborg-harvesters.png",
    nameEN: "Harvesters",
    nameRU: "",
    traits: [
      ["good", "+10%", "Food from Jobs",],
    ],
  },
  {
    trait: "trait_cyborg_learning_algorithms",
    icon: "../src/icons/initial-traits/cyborg-learning-algorithms.png",
    nameEN: "Learning Algorithms",
    nameRU: "",
    traits: [
      ["good", "+25%", "Leader Experience Gain",],
      ["good", "+1", "Leader Level Cap",],
      ["bad", "+0.3", "Energy Upkeep",],
    ],
  },
  {
    trait: "trait_cyborg_logic_engines",
    icon: "../src/icons/initial-traits/cyborg-logic-engines.png",
    nameEN: "Logic Engines",
    nameRU: "",
    traits: [
      ["good", "+10%", "Research from Jobs",],
      ["bad", "+0.3", "Energy Upkeep",],
    ],
  },
  {
    trait: "trait_cyborg_loyalty_circuits",
    icon: "../src/icons/initial-traits/cyborg-loyalty-circuits.png",
    nameEN: "Loyalty Circuits",
    nameRU: "",
    traits: [
      ["good", "+10%", "Happiness",],
      ["bad", "+0.3", "Energy Upkeep",],
    ],
  },
  {
    trait: "trait_cyborg_power_drills",
    icon: "../src/icons/initial-traits/cyborg-power-drills.png",
    nameEN: "Power Drills",
    nameRU: "",
    traits: [
      ["good", "+10%", "Minerals from Jobs",],
    ],
  },
  {
    trait: "trait_cyborg_streamlined_protocols",
    icon: "../src/icons/initial-traits/cyborg-streamlined-protocols.png",
    nameEN: "Streamlined Protocols",
    nameRU: "",
    traits: [
      ["good", "–10%", "Empire Size from Pops",],
      ["bad", "+0.3", "Energy Upkeep",],
    ],
  },
  {
    trait: "trait_cyborg_superconductive",
    icon: "../src/icons/initial-traits/cyborg-superconductive.png",
    nameEN: "Superconductive",
    nameRU: "",
    traits: [
      ["good", "+10%", "Energy Credits from Jobs",],
    ],
  },
  {
    trait: "trait_cyborg_trading_algorithms",
    icon: "../src/icons/initial-traits/cyborg-trading-algorithms.png",
    nameEN: "Trading Algorithms",
    nameRU: "",
    traits: [
      ["good", "+25%", "Trade Value from Jobs",],
      ["bad", "+0.3", "Energy Upkeep",],
    ],
  },
]

const speciesRobotTraits: Array<ITraits> = [
  {
    trait: "trait_robot_double_jointed",
    icon: "../src/icons/initial-traits/robot-double-jointed.png",
    nameEN: "Double Jointed",
    nameRU: "",
    traits: [
      ["good", "−10%", "Pop Housing Usage",],
    ],
    exclude: [
      "trait_bulky"
    ]
  },
  {
    trait: "trait_robot_bulky",
    icon: "../src/icons/initial-traits/robot-bulky.png",
    nameEN: "Bulky",
    nameRU: "",
    traits: [
      ["bad", "+10%", "Pop Housing Usage",],
    ],
    exclude: [
      "trait_robot_double_jointed"
    ]
  },
  {
    trait: "trait_robot_durable",
    icon: "../src/icons/initial-traits/robot-durable.png",
    nameEN: "Durable",
    nameRU: "",
    traits: [
      ["good", "–10%", "Robot Upkeep",],
    ],
    exclude: [
      "trait_robot_high_maintenance"
    ],
  },
  {
    trait: "trait_robot_high_maintenance",
    icon: "../src/icons/initial-traits/robot-high-maintenance.png",
    nameEN: "High Maintenance",
    nameRU: "",
    traits: [
      ["bad", "+10%", "Robot Upkeep",],
    ],
    exclude: [
      "trait_robot_durable",
    ],
  },
  {
    trait: "trait_robot_efficient_processors",
    icon: "../src/icons/initial-traits/robot-efficient-processors.png",
    nameEN: "Efficient Processors",
    nameRU: "",
    traits: [
      ["good", "+5%", "Resources from Jobs",],
    ],
  },
  {
    trait: "trait_robot_emotion_emulators",
    icon: "../src/icons/initial-traits/robot-emotion-emulators.png",
    nameEN: "Emotion Emulators",
    nameRU: "",
    traits: [
      ["good", "+20%", "Amenities from Jobs",],
    ],
    exclude: [
      "trait_robot_uncanny",
    ],
  },
  {
    trait: "trait_robot_uncanny",
    icon: "../src/icons/initial-traits/robot-uncanny.png",
    nameEN: "Uncanny",
    nameRU: "",
    traits: [
      ["bad", "-20%", "Amenities from Jobs",],
    ],
    exclude: [
      "trait_robot_emotion_emulators",
    ],
  },
  {
    trait: "trait_robot_enhanced_memory",
    icon: "../src/icons/initial-traits/robot-enhanced-memory.png",
    nameEN: "Enhanced Memory",
    nameRU: "",
    traits: [
      ["good", "+2", "Leader Level Cap",],
    ],
  },
  {
    trait: "trait_robot_harvesters",
    icon: "../src/icons/initial-traits/robot-harvesters.png",
    nameEN: "Harvesters",
    nameRU: "",
    traits: [
      ["good", "+15%", "Food from Jobs",],
    ],
  },
  {
    trait: "trait_robot_learning_algorithms",
    icon: "../src/icons/initial-traits/robot-learning-algorithms.png",
    nameEN: "Learning Algorithms",
    nameRU: "",
    traits: [
      ["good", "+25%", "Leader Experience Gain",],
    ],
    exclude: [
      "trait_robot_repurposed_hardware"
    ],
  },
  {
    trait: "trait_robot_repurposed_hardware",
    icon: "../src/icons/initial-traits/robot-repurposed-hardware.png",
    nameEN: "Repurposed Hardware",
    nameRU: "",
    traits: [
      ["bad", "-25%", "Leader Experience Gain",],
    ],
    exclude: [
      "trait_robot_learning_algorithms",
    ],
  },
{
    trait: "trait_robot_logic_engines",
    icon: "../src/icons/initial-traits/robot-logic-engines.png",
    nameEN: "Logic Engines",
    nameRU: "",
    traits: [
      ["good", "+10%", "Research from Jobs",],
    ],
  },
  {
    trait: "trait_robot_loyalty_circuits",
    icon: "../src/icons/initial-traits/robot-loyalty-circuits.png",
    nameEN: "Loyalty Circuits",
    nameRU: "",
    traits: [
      ["good", "+10%", "Happiness",],
    ],
  },
  {
    trait: "trait_robot_mass_produced",
    icon: "../src/icons/initial-traits/robot-mass-produced.png",
    nameEN: "Mass-Produced",
    nameRU: "",
    traits: [
      ["good", "+15%", "Pop Assembly Speed",],
    ],
    exclude: [
      "trait_robot_custom_made",
    ],
  },
  {
    trait: "trait_robot_custom_made",
    icon: "../src/icons/initial-traits/robot-custom-made.png",
    nameEN: "Custom-Made",
    nameRU: "",
    traits: [
      ["bad", "-15%", "Pop Assembly Speed",],
    ],
    exclude: [
      "trait_robot_mass_produced",
    ],
  },
  {
    trait: "trait_robot_power_drills",
    icon: "../src/icons/initial-traits/robot-power-drills.png",
    nameEN: "Power Drills",
    nameRU: "",
    traits: [
      ["good", "+15%", "Minerals from Jobs",],
    ],
  },
  {
    trait: "trait_robot_propaganda_machines",
    icon: "../src/icons/initial-traits/robot-propaganda-machines.png",
    nameEN: "Propaganda Machines",
    nameRU: "",
    traits: [
      ["good", "+15%", "Unity from Jobs",],
    ],
  },
  {
    trait: "trait_robot_recycled",
    icon: "../src/icons/initial-traits/robot-recycled.png",
    nameEN: "Recycled",
    nameRU: "",
    traits: [
      ["good", "–20%", "Pop Assembly Cost",],
    ],
    exclude: [
      "trait_robot_luxurious",
    ],
  },
  {
    trait: "trait_robot_luxurious",
    icon: "../src/icons/initial-traits/robot-luxurious.png",
    nameEN: "Luxurious",
    nameRU: "",
    traits: [
      ["bad", "+20%", "Pop Assembly Cost",],
    ],
    exclude: [
      "trait_robot_recycled",
    ],
  },
  {
    trait: "trait_robot_streamlined_protocols",
    icon: "../src/icons/initial-traits/robot-streamlined-protocols.png",
    nameEN: "Streamlined Protocols",
    nameRU: "",
    traits: [
      ["good", "–10%", "Empire Size from Pops",],
    ],
    exclude: [
      "trait_robot_high_bandwidth",
    ],
  },
  {
    trait: "trait_robot_high_bandwidth",
    icon: "../src/icons/initial-traits/robot-high-bandwidth.png",
    nameEN: "Streamlined Protocols",
    nameRU: "",
    traits: [
      ["bad", "+10%", "Empire Size from Pops",],
    ],
    exclude: [
      "trait_robot_streamlined_protocols",
    ],
  },
  {
    trait: "trait_robot_superconductive",
    icon: "../src/icons/initial-traits/robot-superconductive.png",
    nameEN: "Superconductive",
    nameRU: "",
    traits: [
      ["good", "+15%", "Energy Credits from Jobs",],
    ],
  },
  {
    trait: "trait_robot_trading_algorithms",
    icon: "../src/icons/initial-traits/robot-trading-algorithms.png",
    nameEN: "Trading Algorithms",
    nameRU: "",
    traits: [
      ["good", "+25%", "Trade Value from Jobs",],
    ],
  },
]

export { speciesBiologicalTraits, speciesBotanicalTraits, speciesLithoidTraits, speciesToxicTraits, speciesCyborgTraits, speciesRobotTraits }