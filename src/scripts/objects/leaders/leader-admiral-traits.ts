import { ITraits } from "../../interface";

const leaderAdmiralBiological: Array<ITraits> = [
  {
    trait: "leader_trait_admiral_psionic",
    icon: "../src/icons/leader-traits/psionic.png",
    nameEN: "Psychic",
    nameRU: "",
    traits: [
      ["good", "+10%", "Ship weapons damage",],
      ["good", "+10%", "Shield hardening",],
    ],
    exclude: [
      "leader_trait_admiral_cyborg",
      "leader_trait_admiral_synthetic",
      "leader_trait_admiral_chosen",
      "leader_trait_admiral_instrument_chosen",
      "leader_trait_admiral_eater_chosen",
      "leader_trait_admiral_whisperers_chosen",
      "leader_trait_hive_mind",
    ],
  },
  {
    trait: "leader_trait_admiral_chosen",
    icon: "../src/icons/leader-traits/chosen-one.png",
    nameEN: "Chosen One",
    nameRU: "",
    traits: [
      ["empty", "", "Immortal",],
      ["good", "+20%", "Ship weapons damage",],
      ["good", "+30%", "Shield hardening",],
    ],
    exclude: [
      "leader_trait_admiral_cyborg",
      "leader_trait_admiral_synthetic",
      "leader_trait_admiral_psionic",
      "leader_trait_admiral_instrument_chosen",
      "leader_trait_admiral_eater_chosen",
      "leader_trait_admiral_whisperers_chosen",
      "leader_trait_hive_mind",
    ],
  },
  {
    trait: "leader_trait_admiral_eater_chosen",
    icon: "../src/icons/leader-traits/chosen-eater.png",
    nameEN: "Chosen of the Eater",
    nameRU: "",
    traits: [
      ["good", "", "Immortal",],
      ["good", "+40%", "Weapons damage",],
      ["good", "+10", "Chance to hit",],
    ],
    exclude: [
      "leader_trait_admiral_cyborg",
      "leader_trait_admiral_synthetic",
      "leader_trait_admiral_psionic",
      "leader_trait_admiral_chosen",
      "leader_trait_admiral_instrument_chosen",
      "leader_trait_admiral_whisperers_chosen",
      "leader_trait_hive_mind",
    ],
  },
  {
    trait: "leader_trait_admiral_instrument_chosen",
    icon: "../src/icons/leader-traits/chosen-instrument.png",
    nameEN: "Chosen of the Instrument",
    nameRU: "",
    traits: [
      ["good", "", "Immortal",],
      ["good", "+40%", "Sublight speed",],
      ["good", "-15%", "Hyper jump charge time",],
      ["good", "-25%", "Emergency FTL damage",],
      ["good", "+35%", "Disengagement chance",],
    ],
    exclude: [
      "leader_trait_admiral_cyborg",
      "leader_trait_admiral_synthetic",
      "leader_trait_admiral_psionic",
      "leader_trait_admiral_chosen",
      "leader_trait_admiral_eater_chosen",
      "leader_trait_admiral_whisperers_chosen",
      "leader_trait_hive_mind",
    ],
  },
  {
    trait: "leader_trait_admiral_whisperers_chosen",
    icon: "../src/icons/leader-traits/chosen-whisperers.png",
    nameEN: "Chosen of the Whisperers",
    nameRU: "",
    traits: [
      ["good", "", "Immortal",],
      ["good", "+3", "Sensor range",],
      ["good", "+40%", "Evasion",],
    ],
    exclude: [
      "leader_trait_admiral_cyborg",
      "leader_trait_admiral_synthetic",
      "leader_trait_admiral_psionic",
      "leader_trait_admiral_chosen",
      "leader_trait_admiral_eater_chosen",
      "leader_trait_admiral_instrument_chosen",
      "leader_trait_hive_mind",
    ],
  },
  {
    trait: "leader_trait_admiral_cyborg",
    icon: "../src/icons/leader-traits/cyborg.png",
    nameEN: "Cyborg",
    nameRU: "",
    traits: [
      ["good", "+10%", "Ship fire rate",],
      ["good", "+10%", "Ship weapons range",],
    ],
    exclude: [
      "leader_trait_admiral_synthetic",
      "leader_trait_admiral_psionic",
      "leader_trait_admiral_chosen",
      "leader_trait_admiral_eater_chosen",
      "leader_trait_admiral_instrument_chosen",
      "leader_trait_admiral_whisperers_chosen",
      "leader_trait_hive_mind",
    ],
  },
  {
    trait: "leader_trait_aquatic_admiral",
    icon: "../src/icons/leader-traits/aquatic.png",
    nameEN: "",
    nameRU: "",
    traits: [
      ["good", "+10%", "Ship Hull Points",],
    ],
  },
  {
    trait: "leader_trait_admiral_erudite",
    icon: "../src/icons/leader-traits/erudite.png",
    nameEN: "Erudite",
    nameRU: "",
    traits: [
      ["good", "+10%", "Ship fire rate",],
      ["good", "+10%", "Disengagement chance",],
    ],
  },
  {
    trait: "leader_trait_admiral_brainslug",
    icon: "../src/icons/leader-traits/brain-slug.png",
    nameEN: "Brain Slug Host",
    nameRU: "",
    traits: [
      ["good", "+5%", "Fire Rate",],
      ["good", "+5%", "Evasion",],
      ["good", "-10%", "Ship Upkeep",],
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
      "leader_trait_hive_mind",
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
      "leader_trait_hive_mind",
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
    exclude: [
      "leader_trait_hive_mind",
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
      "leader_trait_hive_mind",
      "leader_trait_substance_abuser",
    ],
  },
  {
    trait: "leader_trait_substance_abuser",
    icon: "../src/icons/leader-traits/substance-abuser.png",
    nameEN: "Substance Abuser",
    nameRU: "",
    traits: [
      ["bad", "-20", "Leader lifespan",],
    ],
    exclude: [
      "leader_trait_hive_mind",
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
    exclude: [
      "leader_trait_hive_mind",
    ],
  },
  {
    trait: "leader_trait_aggressive",
    icon: "../src/icons/leader-traits/admiral-aggressive.png",
    nameEN: "Aggressive",
    nameRU: "",
    traits: [
      ["good", "+5%", "Fire Rate",],
      ["good", "+10%", "Sublight Speed",],
    ],
    exclude: [
      "leader_trait_cautious",
    ],
  },
  {
    trait: "leader_trait_cautious",
    icon: "../src/icons/leader-traits/admiral-cautious.png",
    nameEN: "Cautious",
    nameRU: "",
    traits: [
      ["good", "+20%", "Weapons Range",],
    ],
    exclude: [
      "leader_trait_aggressive",
    ],
  },
  {
    trait: "leader_trait_engineer",
    icon: "../src/icons/leader-traits/admiral-engineer.png",
    nameEN: "Engineer",
    nameRU: "",
    traits: [
      ["good", "+0.5%", "Daily Hull Regeneration",],
      ["good", "+0.5%", "Daily Armor Regeneration",],
    ],
  },
  {
    trait: "leader_trait_fleet_logistician",
    icon: "../src/icons/leader-traits/admiral-fleet-logistician.png",
    nameEN: "Fleet Logistician",
    nameRU: "",
    traits: [
      ["good", "-10%", "Ship Upkeep",],
    ],
  },
  {
    trait: "leader_trait_gale_speed",
    icon: "../src/icons/leader-traits/admiral-gale-speed.png",
    nameEN: "Gale Speed",
    nameRU: "",
    traits: [
      ["good", "-10%", "Ship Upkeep",],
    ],
    exclude: [
      "leader_trait_lethargic",
    ],
  },
  {
    trait: "leader_trait_scout",
    icon: "../src/icons/leader-traits/admiral-scout.png",
    nameEN: "Scout",
    nameRU: "",
    traits: [
      ["good", "+1", "Sensor Range",],
      ["good", "+2", "Hyperlane Detection Range",],
      ["good", "+10%", "Sublight Speed",],
    ],
  },
  {
    trait: "leader_trait_trickster",
    icon: "../src/icons/leader-traits/admiral-trickster.png",
    nameEN: "Trickster",
    nameRU: "",
    traits: [
      ["good", "-15%", "Emergency FTL Damage Risk",],
      ["good", "+25%", "Combat Disengagement Chance",],
    ],
    exclude: [
      "leader_trait_unyielding",
    ],
  },
  {
    trait: "leader_trait_unyielding",
    icon: "../src/icons/leader-traits/admiral-unyielding.png",
    nameEN: "Unyielding",
    nameRU: "",
    traits: [
      ["good", "+10%", "Ship Hull Points",],
      ["good", "+5%", "Ship weapons damage",],
      ["bad", "-33%", "Combat Disengagement Chance",],
    ],
    exclude: [
      "leader_trait_nervous",
      "leader_trait_trickster",
    ],
  },
  {
    trait: "leader_trait_nervous",
    icon: "../src/icons/leader-traits/admiral-nervous.png",
    nameEN: "",
    nameRU: "",
    traits: [
      ["bad", "-10%", "Fire Rate",],
    ],
    exclude: [
      "leader_trait_unyielding",
    ],
  },
  {
    trait: "leader_trait_lethargic",
    icon: "../src/icons/leader-traits/admiral-lethargic.png",
    nameEN: "Lethargic",
    nameRU: "",
    traits: [
      ["bad", "-5%", "Evasion",],
      ["bad", "-10%", "Sublight Speed",],
    ],
    exclude:[
      "leader_trait_gale_speed",
    ],
  },
  {
    trait: "leader_trait_cybrex",
    icon: "../src/icons/leader-traits/admiral-cybrex-database.png",
    nameEN: "Cybrex Databases",
    nameRU: "",
    traits: [
      ["good", "+10%", "Evasion",],
      ["good", "+10%", "Fire Rate",],
      ["good", "+20%", "Damage to the Contingency",],
    ],
  },
  {
    trait: "leader_trait_dimensional_stutter",
    icon: "../src/icons/leader-traits/admiral-dimensional-slutter.png",
    nameEN: "Dimensional Stutter",
    nameRU: "",
    traits: [
      ["good", "+20%", "Sublight Speed",],
    ],
  },
  {
    trait: "leader_trait_ethereal",
    icon: "../src/icons/leader-traits/admiral-ethernal.png",
    nameEN: "Ethereal",
    nameRU: "",
    traits: [
      ["good", "+20%", "Evasion",],
    ],
  },
  {
    trait: "leader_trait_hive_affinity",
    icon: "../src/icons/leader-traits/admiral-hive-affinity.png",
    nameEN: "Hive Affinity",
    nameRU: "",
    traits: [
      ["good", "+20%", "Fire Rate",],
    ],
  },
  {
    trait: "leader_trait_sentinel",
    icon: "../src/icons/leader-traits/admiral-sentinel-training.png",
    nameEN: "Sentinel Training",
    nameRU: "",
    traits: [
      ["good", "+20%", "Damage to Prethoryn Creatures",],
    ],
  },
  {
    trait: "leader_trait_void_swimmer",
    icon: "../src/icons/leader-traits/admiral-void-hunter.png",
    nameEN: "Void Hunter",
    nameRU: "",
    traits: [
      ["good", "+20%", "Sublight Speed",],
    ],
  },
  {
    trait: "leader_trait_clone_army_admiral",
    icon: "../src/icons/leader-traits/admiral-clone-soldier.png",
    nameEN: "Clone Army Admiral",
    nameRU: "",
    traits: [
      ["good", "+25%", "Fire Rate",],
      ["good", "-10%", "Ship Upkeep",],
    ],
  },
  {
    trait: "leader_trait_clone_army_full_admiral",
    icon: "../src/icons/leader-traits/admiral-ascendant-clone-soldier.png",
    nameEN: "Ascendant Clone Army Admiral",
    nameRU: "",
    traits: [
      ["good", "+35%", "Fire Rate",],
      ["good", "-20%", "Ship Upkeep",],
    ],
  },
  {
    trait: "leader_trait_clone_army_fertile_admiral",
    icon: "../src/icons/leader-traits/admiral-descendant-clone-soldier.png",
    nameEN: "Descendant Clone Army Admiral",
    nameRU: "",
    traits: [
      ["good", "+15%", "Fire Rate",],
      ["good", "-5%", "Ship Upkeep",],
    ],
  },
  {
    trait: "leader_trait_caravan_counter",
    icon: "../src/icons/leader-traits/admiral-caravan-counter.png",
    nameEN: "Caravan Counter",
    nameRU: "",
    traits: [
      ["good", "-10%", "Emergency FTL Damage Risk",],
    ],
  },
  {
    trait: "leader_trait_dragonslayer",
    icon: "../src/icons/leader-traits/admiral-dragonslayer.png",
    nameEN: "Dragonslayer",
    nameRU: "",
    traits: [
      ["good", "+10%", "Sublight Speed",],
      ["good", "+10%", "Fire Rate",],
    ],
  },
  {
    trait: "leader_trait_foredoomed_to_a_rendezvous",
    icon: "../src/icons/leader-traits/admiral-foredoomed-to-a-rendezvous.png",
    nameEN: "Foredoomed to a Rendezvous",
    nameRU: "",
    traits: [
      ["good", "+25%", "Sublight Speed",],
    ],
  },
  {
    trait: "leader_trait_bulwark_watcher",
    icon: "../src/icons/leader-traits/admiral-bulwark-watcher.png",
    nameEN: "Bulwark Watcher",
    nameRU: "",
    traits: [
      ["good", "+15%", "Evasion in Friendly Systems",],
      ["good", "+15%", "Tracking in Friendly Systems",],
    ],
  },
  {
    trait: "leader_trait_bulwark_retaliator",
    icon: "../src/icons/leader-traits/admiral-bulwark-retaliator.png",
    nameEN: "Bulwark Retaliator",
    nameRU: "",
    traits: [
      ["good", "+15%", "Ship Fire Rate in Friendly Systems",],
    ],
  },
  {
    trait: "leader_trait_bulwark_sentinel",
    icon: "../src/icons/leader-traits/admiral-bulwark-sentinel.png",
    nameEN: "Bulwark Sentinel",
    nameRU: "",
    traits: [
      ["good", "+15%", "Shield Hit Points in Friendly Systems",],
    ],
  },
  {
    trait: "leader_trait_mercenary_warrior",
    icon: "../src/icons/leader-traits/admiral-mercenary-warrior.png",
    nameEN: "Mercenary Warrior",
    nameRU: "",
    traits: [
      ["good", "+10%", "Evasion",],
      ["good", "+10%", "Fire Rate",],
    ],
  },
  {
    trait: "leader_trait_admiral_hells_heart",
    icon: "../src/icons/leader-traits/admiral-hells-heart.png",
    nameEN: "Hell's Heart",
    nameRU: "",
    traits: [
      ["good", "+10%", "Fire Rate",],
      ["good", "+10%", "Sublight Speed",],
      ["good", "+10%", "Ship weapons damage",],
      ["bad", "-10%", "Leader experience gain",],
      ["bad", "-5%", "Evasion",],
      ["bad", "-33%", "Combat Disengagement Chance",],
    ],
  },
  {
    trait: "leader_trait_great_khan",
    icon: "../src/icons/leader-traits/admiral-great-khan.png",
    nameEN: "The Great Khan",
    nameRU: "",
    traits: [
      ["good", "+20%", "Fire Rate",],
      ["good", "+20%", "Sublight Speed",],
      ["good", "+10%", "Ship weapons damage",],
      ["good", "+10%", "Ship weapons range",],
      ["good", "+20%", "Ship Hull Points",],
      ["good", "+30%", "Evasion",],
      ["good", "+0.5%", "daily hull regeneration",],
      ["good", "+0.5%", "daily armor  regeneration",],
    ],
  },
]

const leaderAdmiralSynthitic: Array<ITraits> = [
  {
    trait: "leader_trait_admiral_synthetic",
    icon: "../src/icons/leader-traits/psionic.png",
    nameEN: "Psychic",
    nameRU: "",
    traits: [
      ["good", "+10%", "Ship weapons damage",],
      ["good", "+10%", "Shield hardening",],
    ],
    exclude: [
      "leader_trait_admiral_cyborg",
      "leader_trait_admiral_psionic",
      "leader_trait_admiral_chosen",
      "leader_trait_admiral_instrument_chosen",
      "leader_trait_admiral_eater_chosen",
      "leader_trait_admiral_whisperers_chosen",
      "leader_trait_hive_mind",
    ],
  },
  {
    trait: "leader_trait_aggressive",
    icon: "../src/icons/leader-traits/admiral-aggressive.png",
    nameEN: "Aggressive",
    nameRU: "",
    traits: [
      ["good", "+5%", "Fire Rate",],
      ["good", "+10%", "Sublight Speed",],
    ],
    exclude: [
      "leader_trait_cautious",
    ],
  },
  {
    trait: "leader_trait_cautious",
    icon: "../src/icons/leader-traits/admiral-cautious.png",
    nameEN: "Cautious",
    nameRU: "",
    traits: [
      ["good", "+20%", "Weapons Range",],
    ],
    exclude: [
      "leader_trait_aggressive",
    ],
  },
  {
    trait: "leader_trait_engineer",
    icon: "../src/icons/leader-traits/admiral-engineer.png",
    nameEN: "Engineer",
    nameRU: "",
    traits: [
      ["good", "+0.5%", "Daily Hull Regeneration",],
      ["good", "+0.5%", "Daily Armor Regeneration",],
    ],
  },
  {
    trait: "leader_trait_maintenance_loop",
    icon: "../src/icons/leader-traits/admiral-maintenance-loop.png",
    nameEN: "Maintenance Loop",
    nameRU: "",
    traits: [
      ["good", "-10%", "Ship Upkeep",],
    ],
  },
  {
    trait: "leader_trait_gale_speed",
    icon: "../src/icons/leader-traits/admiral-gale-speed.png",
    nameEN: "Gale Speed",
    nameRU: "",
    traits: [
      ["good", "-10%", "Ship Upkeep",],
    ],
    exclude: [
      "leader_trait_lethargic",
    ],
  },
  {
    trait: "leader_trait_scout",
    icon: "../src/icons/leader-traits/admiral-scout.png",
    nameEN: "Scout",
    nameRU: "",
    traits: [
      ["good", "+1", "Sensor Range",],
      ["good", "+2", "Hyperlane Detection Range",],
      ["good", "+10%", "Sublight Speed",],
    ],
  },
  {
    trait: "leader_trait_trickster",
    icon: "../src/icons/leader-traits/admiral-trickster.png",
    nameEN: "Trickster",
    nameRU: "",
    traits: [
      ["good", "-15%", "Emergency FTL Damage Risk",],
      ["good", "+25%", "Combat Disengagement Chance",],
    ],
    exclude: [
      "leader_trait_unyielding",
    ],
  },
  {
    trait: "leader_trait_unyielding",
    icon: "../src/icons/leader-traits/admiral-unyielding.png",
    nameEN: "Unyielding",
    nameRU: "",
    traits: [
      ["good", "+10%", "Ship Hull Points",],
      ["good", "+5%", "Ship weapons damage",],
      ["bad", "-33%", "Combat Disengagement Chance",],
    ],
    exclude: [
      "leader_trait_nervous",
      "leader_trait_trickster",
    ],
  },
  {
    trait: "leader_trait_unstable_code_base",
    icon: "../src/icons/leader-traits/admiral-unstable-code-base.png",
    nameEN: "Unstable Code Base",
    nameRU: "",
    traits: [
      ["bad", "-10%", "Fire Rate",],
    ],
    exclude: [
      "leader_trait_unyielding",
    ],
  },
  {
    trait: "leader_trait_lethargic",
    icon: "../src/icons/leader-traits/admiral-lethargic.png",
    nameEN: "Lethargic",
    nameRU: "",
    traits: [
      ["bad", "-5%", "Evasion",],
      ["bad", "-10%", "Sublight Speed",],
    ],
    exclude:[
      "leader_trait_gale_speed",
    ],
  },
  {
    trait: "leader_trait_cybrex",
    icon: "../src/icons/leader-traits/admiral-cybrex-database.png",
    nameEN: "Cybrex Databases",
    nameRU: "",
    traits: [
      ["good", "+10%", "Evasion",],
      ["good", "+10%", "Fire Rate",],
      ["good", "+20%", "Damage to the Contingency",],
    ],
  },
  {
    trait: "leader_trait_dimensional_stutter",
    icon: "../src/icons/leader-traits/admiral-dimensional-slutter.png",
    nameEN: "Dimensional Stutter",
    nameRU: "",
    traits: [
      ["good", "+20%", "Sublight Speed",],
    ],
  },
  {
    trait: "leader_trait_ethereal",
    icon: "../src/icons/leader-traits/admiral-ethernal.png",
    nameEN: "Ethereal",
    nameRU: "",
    traits: [
      ["good", "+20%", "Evasion",],
    ],
  },
  {
    trait: "leader_trait_hive_affinity",
    icon: "../src/icons/leader-traits/admiral-hive-affinity.png",
    nameEN: "Hive Affinity",
    nameRU: "",
    traits: [
      ["good", "+20%", "Fire Rate",],
    ],
  },
  {
    trait: "leader_trait_sentinel",
    icon: "../src/icons/leader-traits/admiral-sentinel-training.png",
    nameEN: "Sentinel Training",
    nameRU: "",
    traits: [
      ["good", "+20%", "Damage to Prethoryn Creatures",],
    ],
  },
  {
    trait: "leader_trait_void_swimmer",
    icon: "../src/icons/leader-traits/admiral-void-hunter.png",
    nameEN: "Void Hunter",
    nameRU: "",
    traits: [
      ["good", "+20%", "Sublight Speed",],
    ],
  },
  {
    trait: "leader_trait_caravan_counter",
    icon: "../src/icons/leader-traits/admiral-caravan-counter.png",
    nameEN: "Caravan Counter",
    nameRU: "",
    traits: [
      ["good", "-10%", "Emergency FTL Damage Risk",],
    ],
  },
  {
    trait: "leader_trait_dragonslayer",
    icon: "../src/icons/leader-traits/admiral-dragonslayer.png",
    nameEN: "Dragonslayer",
    nameRU: "",
    traits: [
      ["good", "+10%", "Sublight Speed",],
      ["good", "+10%", "Fire Rate",],
    ],
  },
  {
    trait: "leader_trait_foredoomed_to_a_rendezvous",
    icon: "../src/icons/leader-traits/admiral-foredoomed-to-a-rendezvous.png",
    nameEN: "Foredoomed to a Rendezvous",
    nameRU: "",
    traits: [
      ["good", "+25%", "Sublight Speed",],
    ],
  },
  {
    trait: "leader_trait_bulwark_watcher",
    icon: "../src/icons/leader-traits/admiral-bulwark-watcher.png",
    nameEN: "Bulwark Watcher",
    nameRU: "",
    traits: [
      ["good", "+15%", "Evasion in Friendly Systems",],
      ["good", "+15%", "Tracking in Friendly Systems",],
    ],
  },
  {
    trait: "leader_trait_bulwark_retaliator",
    icon: "../src/icons/leader-traits/admiral-bulwark-retaliator.png",
    nameEN: "Bulwark Retaliator",
    nameRU: "",
    traits: [
      ["good", "+15%", "Ship Fire Rate in Friendly Systems",],
    ],
  },
  {
    trait: "leader_trait_bulwark_sentinel",
    icon: "../src/icons/leader-traits/admiral-bulwark-sentinel.png",
    nameEN: "Bulwark Sentinel",
    nameRU: "",
    traits: [
      ["good", "+15%", "Shield Hit Points in Friendly Systems",],
    ],
  },
  {
    trait: "leader_trait_mercenary_warrior",
    icon: "../src/icons/leader-traits/admiral-mercenary-warrior.png",
    nameEN: "Mercenary Warrior",
    nameRU: "",
    traits: [
      ["good", "+10%", "Evasion",],
      ["good", "+10%", "Fire Rate",],
    ],
  },
  {
    trait: "leader_trait_admiral_hells_heart",
    icon: "../src/icons/leader-traits/admiral-hells-heart.png",
    nameEN: "Hell's Heart",
    nameRU: "",
    traits: [
      ["good", "+10%", "Fire Rate",],
      ["good", "+10%", "Sublight Speed",],
      ["good", "+10%", "Ship weapons damage",],
      ["bad", "-10%", "Leader experience gain",],
      ["bad", "-5%", "Evasion",],
      ["bad", "-33%", "Combat Disengagement Chance",],
    ],
  },
  {
    trait: "leader_trait_great_khan",
    icon: "../src/icons/leader-traits/admiral-great-khan.png",
    nameEN: "The Great Khan",
    nameRU: "",
    traits: [
      ["good", "+20%", "Fire Rate",],
      ["good", "+20%", "Sublight Speed",],
      ["good", "+10%", "Ship weapons damage",],
      ["good", "+10%", "Ship weapons range",],
      ["good", "+20%", "Ship Hull Points",],
      ["good", "+30%", "Evasion",],
      ["good", "+0.5%", "daily hull regeneration",],
      ["good", "+0.5%", "daily armor  regeneration",],
    ],
  },
]

export { leaderAdmiralBiological, leaderAdmiralSynthitic }