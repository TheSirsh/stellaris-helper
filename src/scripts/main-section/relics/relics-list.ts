import { IRelics } from "../../interface.js";

const relics: Array<IRelics> = [
  {
    trait: "r_odryskan_crystal",
    nameEN: "Crystal of Odryskia",
    nameRU: "",
    icon: "../src/icons/relics/odryskan-crystal.png",
    descrEN: "Archaeology Site excavation",
    traits : [
      ["good", "+15%", "Monthly Rare Crystals"],
    ],
    triumph : [
      ["empty", "", "60 months worth of Energy Credits"],
      ["empty", "", "A scientist gains the Maniacal trait"],
    ],
  },
  {
    trait: "r_unbidden_warlock",
    nameEN: "Extradimensional Warlock",
    nameRU: "",
    icon: "../src/icons/relics/unbidden-warlock.png",
    descrEN: "Destroying the last Extradimensional Invaders portal",
    traits : [
      ["good", "+30%", "Sublight Speed"],
      ["good", "+30%", "Ship Weapons Range"],
    ],
    triumph : [
      ["good", "+100%", "Jump Drive Range for 10 years"],
      ["good", "-50%", "Jump Drive Cooldown for 10 years"],
      ["good", "+75%", "Quantum Catapult Accuracy for 10 years"],
      ["good", "+75%", "Quantum Catapult Range for 10 years	"],
    ],
  },
  {
    trait: "r_contingency_core",
    nameEN: "Isolated Contingency Core",
    nameRU: "",
    icon: "../src/icons/relics/contingency-core.png",
    descrEN: "Destroying the Contingency secret lair",
    traits : [
      ["good", "+100%", "Mechanical Pop Assembly Speed"],
      ["empty", "", "Can build 2 of every multi-stage megastructure"],
    ],
    triumph : [
      ["good", "+300%", "Megastructure Build Speed for 10 years"],
    ],
  },
  {
    trait: "r_prethoryn_queen",
    nameEN: "Prethoryn Brood-Queen",
    nameRU: "",
    icon: "../src/icons/relics/prethoryn-queen.png",
    descrEN: "Capturing the Prethoryn Queen",
    traits : [
      ["good", "+50%", "Society Research Speed"],
    ],
    triumph : [
      ["good", "+5%", "Prethoryn Weapon Attack Speed"],
      ["empty", "", "Controllable Prethoryn fleet (36 Warriors and 54 Swarmlings)"],
    ],
  },
  {
    trait: "r_dragon_trophy",
    nameEN: "Ether Drake Trophy",
    nameRU: "",
    icon: "../src/icons/relics/dragon-trophy.png",
    descrEN: "Defeating the Ether Drake",
    traits : [
      ["good", "+10%", "Monthly Unity"],
    ],
    triumph : [
      ["good", "+10%", "Happiness for 10 years"],
      ["good", "+10", "Stability for 10 years"],
    ],
  },
  {
    trait: "r_khans_throne",
    nameEN: "Khan's Throne",
    nameRU: "",
    icon: "../src/icons/relics/khans-throne.png",
    descrEN: "Defeating the Great Khan's fleet a second time",
    traits : [
      ["good", "-20%", "Claim influence cost"],
      ["empty", "", "Grants access to the Satrapy subject type"],
    ],
    triumph : [
      ["good", "+20%", "Ship weapons damage for 10 years"],
      ["good", "+25%", "Militarist Ethic Attraction for 10 years"],
    ],
  },
  {
    trait: "r_toxic_god",
    nameEN: "Maw of the Toxic Entity",
    nameRU: "",
    icon: "../src/icons/relics/toxic-god.png",
    descrEN: "Defeating the Toxic God",
    traits : [
      ["good", "+15%", "Strike craft damage"],
    ],
    triumph : [
      ["empty", "", "Consecrate Habitat decision if knights of the toxic god origin"],
      ["empty", "", "1000 Exotic Gases if not knights of the toxic god origin"],
    ],
  },
  {
    trait: "r_war_forge",
    nameEN: "Cybrex War Forge",
    nameRU: "",
    icon: "../src/icons/relics/war-forge.png",
    descrEN: "Finishing the Cybrex precursor chain",
    traits : [
      ["empty", "", "Can recruit Cybrex Warform armies at the capital"],
    ],
    triumph : [
      ["good", "+1000", "Alloys"],
      ["empty", "", "Effect and cost increase after each use (caps after 20 uses)"],
    ],
  },
  {
    trait: "r_pox_sample",
    nameEN: "Javorian Pox Sample",
    nameRU: "",
    icon: "../src/icons/relics/pox-sample.png",
    descrEN: "Finishing the Irassian Concordat precursor chain",
    traits : [
      ["good", "+20", "Leader lifespan"],
      ["empty", "", "Javorian Pox orbital bombardment stance"],
      ["empty", "", "Double chance to discover Biology technologies"],
    ],
    triumph : [
      ["good", "+50%", "Biology Research Speed for 10 years"],
    ],
  },
  {
    trait: "r_reality_perforator",
    nameEN: "Vultaum Reality Perforator",
    nameRU: "",
    icon: "../src/icons/relics/reality-perforator.png",
    descrEN: "Finishing the Vultaum Star Assembly precursor chain",
    traits : [
      ["good", "-10%", "Pop Amenities Usage"],
    ],
    triumph : [
      ["empty", "", "Random combat modifier for 2-5 years:"],
      ["good", "  +40%", "Armor Hit Points"],
      ["good", "  +40%", "Shield Hit Points"],
      ["good", "  +40%", "Ship Hull Points"],
      ["good", "  +40%", "Ship Weapons Damage"],
    ],
  },
  {
    trait: "r_cryo_core",
    nameEN: "Yuht Cryo Core",
    nameRU: "",
    icon: "../src/icons/relics/cryo-core.png",
    descrEN: "Finishing the Yuht Empire precursor chain",
    traits : [
      ["good", "+1", "Extra pops when establishing colony"],
      ["good", "+20%", "Energy Weapon Attack Speed"],
    ],
    triumph : [
      ["good", "-20%", "Ship Upkeep for 10 years"],
    ],
  },
  {
    trait: "r_zro_crystal",
    nameEN: "Psionic Archive",
    nameRU: "",
    icon: "../src/icons/relics/zro-crystal.png",
    descrEN: "Finishing the Zroni precursor chain",
    traits : [
      ["good", "-50%", "Breach into the Shroud Cooldown"],
      ["empty", "", "Enables the Zro Addatives edict"],
      ["empty", "", "Better Shroud odds"],
    ],
    triumph : [
      ["empty", "", "Choose one:"],
      ["empty", "", "  Ruler levels up"],
      ["good", "  +20%", "Ship weapons damage for 5 years"],
      ["good", "  +5", "Planet Stability,"],
      ["good", "  -10%", "Edict Upkeep"],
      ["good", "  +25%", "Government Ethic Attraction for 5 years"],
    ],
  },
  {
    trait: "r_the_last_baol",
    nameEN: "The Last Baol",
    nameRU: "",
    icon: "../src/icons/relics/the-last-baol.png",
    descrEN: "Finishing the Baol precursor chain",
    traits : [
      ["good", "+10%", "Pop Growth Speed"],
      ["good", "+10%", "Society Research if machine empire"],
    ],
    triumph : [
      ["empty", "", "Nu-Baol Life-Seeding decision"],
    ],
  },
  {
    trait: "r_ancient_sword",
    nameEN: "Blade of the Huntress",
    nameRU: "",
    icon: "../src/icons/relics/ancient-sword.png",
    descrEN: "Archaeology Site excavation",
    traits : [
      ["good", "+25%", "Army Morale"],
      ["good", "+10%", "Diplomatic Weight"],
      ["good", "+2", "Planet Sensor Range"],
    ],
    triumph : [
      ["good", "+25%", "Sublight Speed for 10 years"],
    ],
  },
  {
    trait: "r_severed_head",
    nameEN: "Head of Zarqlan",
    nameRU: "",
    icon: "../src/icons/relics/severed-head.png",
    descrEN: "Archaeology Site excavation",
    traits : [
      ["good", "+150", "opinion with Holy Guardians"],
      ["empty", "", " Allows the settling of Holy Worlds"],
    ],
    triumph : [
      ["neutral", "+75%", "Spiritualist Ethics Attraction for 10 years"],
      ["empty", "", "3 Fallen Empire Escorts on first use"],
      ["empty", "", "6 Fallen Empire Escorts on second use"],
      ["empty", "", "9 Fallen Empire Escorts on third use"],
      ["empty", "", "12 Fallen Empire Escorts on fourth use"],
      ["empty", "", "15 Fallen Empire Escorts on fifth+ use"],
      ["empty", "", "1-5 Battlecruisers if the Holy Guardians exist"],
    ],
  },
  {
    trait: "r_galaxy",
    nameEN: "Miniature Galaxy",
    nameRU: "",
    icon: "../src/icons/relics/galaxy.png",
    descrEN: "Archaeology Site excavation",
    traits : [
      ["good", "+5%", "Research Speed"],
    ],
    triumph : [
      ["good", "+50%", "Research progress in a random technology"],
    ],
  },
  {
    trait: "r_the_defragmentor",
    nameEN: "The Defragmentor",
    nameRU: "",
    icon: "../src/icons/relics/the-defragmentor.png",
    descrEN: "Archaeology Site excavation. Develop A Cure For The Ferrophage Special Project.",
    traits : [
      ["good", "-10%", "Building and District Energy Upkeep"],
      ["good", "-10%", "Job Energy Upkeep"],
      ["good", "-10%", "Robot Upkeep"],
      ["good", "-10%", "Pop Housing Usage if machine empire"],
    ],
    triumph : [
      ["good", "+20%", "Monthly Energy Credits for 10 years"],
      ["good", "+10%", "Engineering Research Speed for 10 years"],
    ],
  },
  {
    trait: "r_omnicodex",
    nameEN: "The Omnicodex",
    nameRU: "",
    icon: "../src/icons/relics/omnicodex.png",
    descrEN: "Archaeology Site excavation",
    traits : [
      ["good", "+1", "Gene Modification Points"],
      ["good", "+25", "Opinion with biological empires if machine"],
    ],
    triumph : [
      ["empty", "", "3 Pops from a new random species"],
      ["empty", "", "They will have the Hive-Minded trait if main species has it"],
    ],
  },
  {
    trait: "r_worm_scales",
    nameEN: "Scales of the Worm",
    nameRU: "",
    icon: "../src/icons/relics/worm-scales.png",
    descrEN: "Defeating the Worm",
    traits : [
      ["good", "+10%", "Physics Research Speed"],
    ],
    triumph : [
      ["good", "+20%", "Research Speed for 10 years"],
      ["bad", "-5", "Stability for 10 years"],
    ],
  },
  {
    trait: "r_rubricator",
    nameEN: "The Rubricator",
    nameRU: "",
    icon: "../src/icons/relics/rubricator.png",
    descrEN: "Defeating Shard",
    traits : [
      ["good", "+20%", "Society Research"],
    ],
    triumph : [
      ["empty", "", "30 Minor Artifacts"],
    ],
  },
  {
    trait: "r_surveyor",
    nameEN: "The Surveyor",
    nameRU: "",
    icon: "../src/icons/relics/surveyor.png",
    descrEN: "Defeating the Home Base Ore Grinder",
    traits : [
      ["good", "+1", "Sensor Range"],
      ["good", "123456789", "123456789"],
    ],
    triumph : [
      ["empty", "", "A celestial body within borders gains a random deposit:"],
      ["empty", "", "  5/7/9 Energy"],
      ["empty", "", "  5/7/9 Minerals"],
      ["empty", "", "  5/7/9 Engineering Research"],
      ["empty", "", "  5/7/9 Physics Research"],
      ["empty", "", "  5/7/9 Society Research"],
      ["empty", "", "  5/7/9 Trade Value (Unless Gestalt Consciousness)"],
      ["empty", "", "  1-3 Alloys"],
      ["empty", "", "  1-3 Exotic Gases"],
      ["empty", "", "  1-3 Rare Crystals"],
      ["empty", "", "  1-3 Volatile Motes"],
    ],
  },
  {
    trait: "r_galatron",
    nameEN: "The Galatron",
    nameRU: "",
    icon: "../src/icons/relics/galatron.png",
    descrEN: "	Reliquary reward (0.5% chance). Can be captured with the Take Galatron Wargoal",
    traits : [
      ["good", "+3", "Influence"],
      ["good", "+100%", "Diplomatic weight"],
    ],
    triumph : [
      ["empty", "", "Random resources:"],
      ["empty", "", "  8000 Energy"],
      ["empty", "", "  8000 Minerals"],
      ["empty", "", "  8000 Food"],
      ["empty", "", "  5000 Alloys"],
      ["empty", "", "  5000 Consumer Goods"],
      ["empty", "", "  500 Exotic Gases"],
      ["empty", "", "  500 Rare Crystals"],
      ["empty", "", "  500 Volatile Motes"],
      ["empty", "", "  30 Minor Artifacts"],
    ],
  },
]

export { relics }