import { ITraits } from "../../interface.js";

const relics: Array<ITraits> = [
  {
    trait: "r_odryskan_crystal",
    nameEN: "Crystal of Odryskia",
    nameRU: "",
    icon: "../src/icons/civics/123456789.png",
    descrEN: "Archaeology Site excavation",
    traits : [
      ["good", "+15%", "Monthly Rare Crystals"],
    ],
  },
  {
    trait: "r_unbidden_warlock",
    nameEN: "Extradimensional Warlock",
    nameRU: "",
    icon: "../src/icons/civics/123456789.png",
    descrEN: "Destroying the last Extradimensional Invaders portal",
    traits : [
      ["good", "+30%", "Sublight Speed"],
      ["good", "+30%", "Ship Weapons Range"],
    ],
  },
  {
    trait: "r_contingency_core",
    nameEN: "Isolated Contingency Core",
    nameRU: "",
    icon: "../src/icons/civics/123456789.png",
    descrEN: "Destroying the Contingency secret lair",
    traits : [
      ["good", "+100%", "Mechanical Pop Assembly Speed"],
      ["empty", "", "Can build 2 of every multi-stage megastructure"],
    ],
  },
  {
    trait: "r_prethoryn_queen",
    nameEN: "Prethoryn Brood-Queen",
    nameRU: "",
    icon: "../src/icons/civics/123456789.png",
    descrEN: "Capturing the Prethoryn Queen",
    traits : [
      ["good", "+50%", "Society Research Speed"],
      ["good", "123456789", "123456789"],
    ],
  },
  {
    trait: "r_dragon_trophy",
    nameEN: "Ether Drake Trophy",
    nameRU: "",
    icon: "../src/icons/civics/123456789.png",
    descrEN: "Defeating the Ether Drake",
    traits : [
      ["good", "+10%", "Monthly Unity"],
    ],
  },
  {
    trait: "r_khans_throne",
    nameEN: "Khan's Throne",
    nameRU: "",
    icon: "../src/icons/civics/123456789.png",
    descrEN: "Defeating the Great Khan's fleet a second time",
    traits : [
      ["good", "-20%", "Claim influence cost"],
      ["empty", "", "Grants access to the Satrapy subject type"],
    ],
  },
  {
    trait: "r_toxic_god",
    nameEN: "Maw of the Toxic Entity",
    nameRU: "",
    icon: "../src/icons/civics/123456789.png",
    descrEN: "Defeating the Toxic God",
    traits : [
      ["good", "+15%", "Strike craft damage"],
    ],
  },
  {
    trait: "r_war_forge",
    nameEN: "Cybrex War Forge",
    nameRU: "",
    icon: "../src/icons/civics/123456789.png",
    descrEN: "Finishing the Cybrex precursor chain",
    traits : [
      ["empty", "", "Can recruit Cybrex Warform armies at the capital"],
    ],
  },
  {
    trait: "r_pox_sample",
    nameEN: "Javorian Pox Sample",
    nameRU: "",
    icon: "../src/icons/civics/123456789.png",
    descrEN: "Finishing the Irassian Concordat precursor chain",
    traits : [
      ["good", "+20", "Leader lifespan"],
      ["empty", "", "Javorian Pox orbital bombardment stance"],
      ["empty", "", "Double chance to discover Biology technologies"],
    ],
  },
  {
    trait: "r_reality_perforator",
    nameEN: "Vultaum Reality Perforator",
    nameRU: "",
    icon: "../src/icons/civics/123456789.png",
    descrEN: "Finishing the Vultaum Star Assembly precursor chain",
    traits : [
      ["good", "-10%", "Pop Amenities Usage"],
    ],
  },
  {
    trait: "r_cryo_core",
    nameEN: "Yuht Cryo Core",
    nameRU: "",
    icon: "../src/icons/civics/123456789.png",
    descrEN: "Finishing the Yuht Empire precursor chain",
    traits : [
      ["good", "+1", "Extra pops when establishing colony"],
      ["good", "+20%", "Energy Weapon Attack Speed"],
    ],
  },
  {
    trait: "r_zro_crystal",
    nameEN: "Psionic Archive",
    nameRU: "",
    icon: "../src/icons/civics/123456789.png",
    descrEN: "Finishing the Zroni precursor chain",
    traits : [
      ["good", "-50%", "Breach into the Shroud Cooldown"],
      ["empty", "", "Enables the Zro Addatives edict"],
      ["empty", "", "Better Shroud odds"],
    ],
  },
  {
    trait: "r_the_last_baol",
    nameEN: "The Last Baol",
    nameRU: "",
    icon: "../src/icons/civics/123456789.png",
    descrEN: "Finishing the Baol precursor chain",
    traits : [
      ["good", "+10%", "Pop Growth Speed"],
      ["good", "+10%", "Society Research if machine empire"],
    ],
  },
  {
    trait: "r_ancient_sword",
    nameEN: "Blade of the Huntress",
    nameRU: "",
    icon: "../src/icons/civics/123456789.png",
    descrEN: "Archaeology Site excavation",
    traits : [
      ["good", "+25%", "Army Morale"],
      ["good", "+10%", "Diplomatic Weight"],
      ["good", "+2", "Planet Sensor Range"],
    ],
  },
  {
    trait: "r_severed_head",
    nameEN: "Head of Zarqlan",
    nameRU: "",
    icon: "../src/icons/civics/123456789.png",
    descrEN: "Archaeology Site excavation",
    traits : [
      ["good", "+150", "opinion with Holy Guardians"],
      ["empty", "", " Allows the settling of Holy Worlds"],
    ],
  },
  {
    trait: "r_galaxy",
    nameEN: "Miniature Galaxy",
    nameRU: "",
    icon: "../src/icons/civics/123456789.png",
    descrEN: "Archaeology Site excavation",
    traits : [
      ["good", "+5%", "Research Speed"],
    ],
  },
  {
    trait: "r_the_defragmentor",
    nameEN: "The Defragmentor",
    nameRU: "",
    icon: "../src/icons/civics/123456789.png",
    descrEN: "Archaeology Site excavation. Develop A Cure For The Ferrophage Special Project.",
    traits : [
      ["good", "-10%", "Building and District Energy Upkeep"],
      ["good", "-10%", "Job Energy Upkeep"],
      ["good", "-10%", "Robot Upkeep"],
      ["good", "-10%", "Pop Housing Usage if machine empire"],
    ],
  },
  {
    trait: "r_omnicodex",
    nameEN: "The Omnicodex",
    nameRU: "",
    icon: "../src/icons/civics/123456789.png",
    descrEN: "Archaeology Site excavation",
    traits : [
      ["good", "+1", "Gene Modification Points"],
      ["good", "+25", "Opinion with biological empires if machine"],
    ],
  },
  {
    trait: "r_worm_scales",
    nameEN: "Scales of the Worm",
    nameRU: "",
    icon: "../src/icons/civics/123456789.png",
    descrEN: "Defeating the Worm",
    traits : [
      ["good", "+10%", "Physics Research Speed"],
    ],
  },
  {
    trait: "r_rubricator",
    nameEN: "The Rubricator",
    nameRU: "",
    icon: "../src/icons/civics/123456789.png",
    descrEN: "Defeating Shard",
    traits : [
      ["good", "+20%", "Society Research"],
    ],
  },
  {
    trait: "r_surveyor",
    nameEN: "The Surveyor",
    nameRU: "",
    icon: "../src/icons/civics/123456789.png",
    descrEN: "Defeating the Home Base Ore Grinder",
    traits : [
      ["good", "+1", "Sensor Range"],
      ["good", "123456789", "123456789"],
    ],
  },
  {
    trait: "r_galatron",
    nameEN: "The Galatron",
    nameRU: "",
    icon: "../src/icons/civics/123456789.png",
    descrEN: "	Reliquary reward (0.5% chance). Can be captured with the Take Galatron Wargoal",
    traits : [
      ["good", "+3", "Influence"],
      ["good", "+100%", "Diplomatic weight"],
    ],
  },
]

export { relics }