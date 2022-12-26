import { ITraits } from "../interface.js";

const planetModifier: Array<ITraits> = [
  {
    trait: "hazardous_weather",
    nameEN: "Hazardous Weather",
    nameRU: "",
    icon: "../src/icons/planet-modifier/hazardous-weather.png",
    traits : [
      ["bad", "-10%", "Habitability"],
      ["bad", "-5%", "Happiness"],
      ["good", "+20%", "Energy from Jobs"],
      ["good", "+4", "Max Generator Districts"],
    ],
  },
  {
    trait: "dangerous_wildlife",
    nameEN: "Hostile Fauna",
    nameRU: "",
    icon: "../src/icons/planet-modifier/hostile-fauna.png",
    traits : [
      ["bad", "-10%", "Habitability"],
      ["bad", "-5%", "Happiness"],
      ["good", "+20%", "Society From Jobs"],
    ],
  },
  {
    trait: "weak_magnetic_field",
    nameEN: "Weak Magnetic Field",
    nameRU: "",
    icon: "../src/icons/planet-modifier/weak-magnetic-field.png",
    traits : [
      ["bad", "-5%", "Habitability"],
      ["good", "-5%", "Pop Growth speed"],
    ],
  },
  {
    trait: "strong_magnetic_field",
    nameEN: "Strong Magnetic Field",
    nameRU: "",
    icon: "../src/icons/planet-modifier/strong-magetic-field.png",
    traits : [
      ["good", "+5%", "Energy from Jobs"],
      ["good", "+5%", "Physics from Jobs"],
      ["good", "+2", "Max Generator Districts"],
    ],
  },
  {
    trait: "unstable_tectonics",
    nameEN: "Unstable Tectonics",
    nameRU: "",
    icon: "../src/icons/planet-modifier/unstable-tectonics.png",
    traits : [
      ["bad", "-10%", "Habitability"],
      ["bad", "-5%", "Happiness"],
      ["good", "+20%", "Engineering from Jobs"],
    ],
  },
  {
    trait: "tidal_locked",
    nameEN: "Tidal Locked",
    nameRU: "",
    icon: "../src/icons/planet-modifier/tidal-locked.png",
    traits : [
      ["bad", "-30%", "Max Districts"],
    ],
  },
  {
    trait: "asteroid_impacts",
    nameEN: "Asteroid Impacts",
    nameRU: "",
    icon: "../src/icons/planet-modifier/asteroid-impacts.png",
    traits : [
      ["bad", "-5%", "Habitability"],
      ["good", "+5%", "Minerals from Jobs"],
      ["good", "+2", "Max Mining Districts"],
    ],
  },
  {
    trait: "extensive_moon_system",
    nameEN: "Extensive Moon System",
    nameRU: "",
    icon: "../src/icons/planet-modifier/extensive-moon-system.png",
    traits : [
      ["good", "+10%", "Minerals from Jobs"],
      ["good", "+1", "Max Mining Districts"],
    ],
  },
  {
    trait: "carbon_world",
    nameEN: "Carbon World",
    nameRU: "",
    icon: "../src/icons/planet-modifier/carbon-world.png",
    traits : [
      ["good", "+15%", "Minerals from Jobs"],
    ],
  },
  {
    trait: "wild_storms",
    nameEN: "Wild Storms",
    nameRU: "",
    icon: "../src/icons/planet-modifier/wild-storms.png",
    traits : [
      ["bad", "-5%", "Habitability"],
      ["bad", "-5%", "Happiness"],
      ["good", "+20%", "Physics from Jobs"],
    ],
  },
  {
    trait: "low_gravity",
    nameEN: "Low Gravity",
    nameRU: "",
    icon: "../src/icons/planet-modifier/low-gravity.png",
    traits : [
      ["good", "-10%", "Building cost"],
      ["bad", "-5%", "Habitability"],
    ],
  },
  {
    trait: "high_gravity",
    nameEN: "High Gravity",
    nameRU: "",
    icon: "../src/icons/planet-modifier/high-gravity.png",
    traits : [
      ["bad", "+10%", "Building cost"],
      ["bad", "+10%", "District cost"],
      ["bad", "-5%", "Habitability"],
      ["good", "+2", "Max Districts"],
    ],
  },
  {
    trait: "mineral_rich",
    nameEN: "High Quality Minerals",
    nameRU: "",
    icon: "../src/icons/planet-modifier/123456789.png",
    traits : [
      ["good", "+15%", "Minerals from Jobs"],
      ["good", "+4", "Max Mining Districts"],
    ],
  },
  {
    trait: "ultra_rich",
    nameEN: "Exceptional Quality Minerals",
    nameRU: "",
    icon: "../src/icons/planet-modifier/123456789.png",
    traits : [
      ["good", "+25%", "Minerals from Jobs"],
      ["good", "+8", "Max Mining Districts"],
    ],
  },
  {
    trait: "mineral_poor",
    nameEN: "Poor Quality Minerals",
    nameRU: "",
    icon: "../src/icons/planet-modifier/poor-quality-minerals.png",
    traits : [
      ["bad", "-25%", "Minerals from Jobs"],
      ["bad", "-3", "Max Mining Districts"],
    ],
  },
  {
    trait: "titanic_life",
    nameEN: "Titanic Life",
    nameRU: "",
    icon: "../src/icons/planet-modifier/titanic-life.png",
    traits : [
      ["good", "+25%", "Society from Jobs"],
    ],
  },
  {
    trait: "eat_the_titans",
    nameEN: "Delicious Titans",
    nameRU: "",
    icon: "../src/icons/planet-modifier/delicious-titans.png",
    traits : [
      ["good", "+6", "Max Agriculture Districts"],
      ["good", "+30%", "Food from Jobs"],
      ["good", "+1", "Titan Hunter Job"],
      ["good", "+1", "Titan Hunter Job per 20 Pops"],
    ],
  },
  {
    trait: "asteroid_belt",
    nameEN: "Asteroid Belt",
    nameRU: "",
    icon: "../src/icons/planet-modifier/asteroid-belt.png",
    traits : [
      ["good", "+10%", "Minerals from Jobs"],
      ["good", "+3", "Max Mining Districts"],
    ],
  },
  {
    trait: "natural_beauty",
    nameEN: "Natural Beauty",
    nameRU: "",
    icon: "../src/icons/planet-modifier/natural-beauty.png",
    traits : [
      ["good", "+5%", "Happiness"],
      ["good", "+25%", "Migration Pull"],
    ],
  },
  {
    trait: "atmospheric_aphrodisiac",
    nameEN: "Atmospheric Aphrodisiac",
    nameRU: "",
    icon: "../src/icons/planet-modifier/atmospheric-aphrodisiac.png",
    traits : [
      ["good", "+5%", "Habitability"],
      ["good", "+10%", "Pop Growth speed"],
      ["bad", "-20%", "Government ethics attraction"],
    ],
  },
  {
    trait: "atmospheric_hallucinogen",
    nameEN: "Atmospheric Hallucinogen",
    nameRU: "",
    icon: "../src/icons/planet-modifier/atmospheric-hallucinogen.png",
    traits : [
      ["good", "+5%", "Happiness"],
      ["good", "+10%", "Physics from Jobs"],
      ["bad", "-5%", "Worker job output"],
    ],
  },
  {
    trait: "atmospheric_hallucinogen_good",
    nameEN: "Filtered Atmospheric Hallucinogen",
    nameRU: "",
    icon: "../src/icons/planet-modifier/filtred-atmospheric-hallucinogen.png",
    traits : [
      ["good", "+10%", "Happiness"],
      ["good", "+10%", "Physics from Jobs"],
    ],
  },
  {
    trait: "lush_planet",
    nameEN: "Lush",
    nameRU: "",
    icon: "../src/icons/planet-modifier/lush.png",
    traits : [
      ["good", "+10%", "Habitability"],
      ["good", "+20%", "Food from Jobs"],
      ["good", "+4", "Max Agriculture Districts"],
    ],
  },
  {
    trait: "bleak_planet",
    nameEN: "Bleak",
    nameRU: "",
    icon: "../src/icons/planet-modifier/bleak.png",
    traits : [
      ["bad", "-5%", "Habitability"],
      ["bad", "-10%", "Food from Jobs"],
      ["bad", "-2", "Max Agriculture Districts"],
    ],
  },
  {
    trait: "irradiated_planet",
    nameEN: "Irradiated",
    nameRU: "",
    icon: "../src/icons/planet-modifier/irradiated-planet.png",
    traits : [
      ["bad", "−10%", "Habitability"],
      ["bad", "-20%", "Happiness"],
      ["bad", "-50%", "Food from Jobs"],
      ["bad", "-6", "Max Agriculture Districts"],
      ["good", "+2", "Max Mining Districts"],
    ],
  },
  {
    trait: "migrating_forests_2",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/migrating-forest.png",
    traits : [
      ["bad", "-1", "Max Districts"],
    ],
  },
  {
    trait: "colony_enclaves",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/colony-enclaves.png",
    traits : [
      ["bad", "-30%", "Minerals from Jobs"],
    ],
  },


  {
    trait: "primitive_reservation",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/primitive-reservation.png",
    traits : [
      ["bad", "-10%", "Minerals from Jobs"],
    ],
  },
  {
    trait: "damaged_ecology",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/damaged-ecology.png",
    traits : [
      ["bad", "-20%", "Happiness"],
    ],
  },
  {
    trait: "friendly_trees",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/friendly-trees.png",
    traits : [
      ["good", "+20%", "Happiness"],
    ],
  },
  {
    trait: "subterranean_civilization",
    nameEN: "Subterranean Civilization",
    nameRU: "",
    icon: "../src/icons/planet-modifier/subterranean-civilization.png",
    traits : [
      ["good", "+10%", "Society from Jobs"],
    ],
  },
  {
    trait: "subterranean_expansion",
    nameEN: "Subterranean Cities",
    nameRU: "",
    icon: "../src/icons/planet-modifier/subterranean-expansion.png",
    traits : [
      ["good", "+3", "Max Districts"],
    ],
  },
  {
    trait: "abandoned_terraforming",
    nameEN: "Abandoned Terraforming Project",
    nameRU: "",
    icon: "../src/icons/planet-modifier/abandoned-terraforming.png",
    traits : [
      ["bad", "-20%", "Food from Jobs"],
      ["bad", "-10%", "Happiness"],
    ],
  },
  {
    trait: "gaia_world",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/123456789.png",
    traits : [
      ["good", "+20%", "Pop Growth Speed"],
    ],
  },
  {
    trait: "mutant_stalker",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/123456789.png",
    traits : [
      ["bad", "-10%", "Happiness"],
    ],
  },
  {
    trait: "wasteland_infrastructure",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/123456789.png",
    traits : [
      ["good", "-0.25", "planet_districts_cost_mult"],
    ],
  },
  {
    trait: "wasteland_radiation",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/123456789.png",
    traits : [
      ["bad", "-0.1", "biological_pop_happiness"],
      ["bad", "-0.1", "lithoid_pop_happiness"],
    ],
  },
  {
    trait: "wasteland_orbital_debris",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/123456789.png",
    traits : [
      ["good", "+0.1", "planet_buildings_cost_mult"],
    ],
  },
  {
    trait: "assist_research",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/123456789.png",
    traits : [
      ["good", "+0.1", "planet_jobs_physics_research_produces_mult"],
      ["good", "+0.1", "planet_jobs_society_research_produces_mult"],
      ["good", "+0.1", "planet_jobs_engineering_research_produces_mult"],
    ],
  },
  {
    trait: "planet_uncertain_past",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/123456789.png",
    traits : [
      ["good", "+0.1", "planet_jobs_physics_research_produces_mult"],
      ["good", "+0.1", "planet_jobs_society_research_produces_mult"],
      ["good", "+0.1", "planet_jobs_engineering_research_produces_mult"],
      ["bad", "-0.15", "pop_happiness"],
    ],
  },
  {
    trait: "recent_quake",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/123456789.png",
    traits : [
      ["bad", "-0.05", "pop_happiness"],
    ],
  },
  {
    trait: "recent_comet",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/123456789.png",
    traits : [
      ["bad", "+0.1", "pop_happiness"],
    ],
  },
  {
    trait: "recent_impact",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/123456789.png",
    traits : [
      ["bad", "-0.05", "pop_happiness"],
    ],
  },
  {
    trait: "magnetic_research_boost",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/123456789.png",
    traits : [
      ["good", "+0.2", "planet_jobs_physics_research_produces_mult"],
      ["good", "+0.2", "planet_jobs_society_research_produces_mult"],
      ["good", "+0.2", "planet_jobs_engineering_research_produces_mult"],
    ],
  },
  {
    trait: "forest_fire",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/123456789.png",
    traits : [
      ["bad", "-0.2", "planet_jobs_food_produces_mult"],
    ],
  },
  {
    trait: "nationalist_corruption",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/123456789.png",
    traits : [
      ["bad", "-0.1", "planet_jobs_produces_mult"],
    ],
  },
  {
    trait: "planet_separatist_strikes",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/123456789.png",
    traits : [
      ["bad", "-0.4", "planet_jobs_produces_mult"],
    ],
  },
  {
    trait: "planet_separatist_supporter",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/123456789.png",
    traits : [
      ["bad", "-0.1", "pop_happiness"],
    ],
  },
  {
    trait: "stellarite_high_temp",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/123456789.png",
    traits : [
      ["bad", "-0.25", "pop_happiness"],
      ["bad", "-0.25", "pop_environment_tolerance"],
    ],
  },
  {
    trait: "stellarite_low_temp",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/123456789.png",
    traits : [
      ["bad", "-0.25", "pop_happiness"],
      ["bad", "-0.25", "pop_environment_tolerance"],
    ],
  },
  {
    trait: "first_league_homeworld",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/123456789.png",
    traits : [
      ["good", "+10", "country_first_league_homeworld_society_research_produces_add"],
      ["good", "+10", "country_first_league_homeworld_physics_research_produces_add"],
      ["good", "+10", "country_first_league_homeworld_engineering_research_produces_add"],
    ],
  },
  {
    trait: "turtle_world_modifier",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/123456789.png",
    traits : [
      ["good", "-0.1", "planet_housing_mult"],
      ["good", "0.15", "planet_jobs_society_research_produces_mult"],
    ],
  },
  {
    trait: "turtle_world_modifier_alone",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/123456789.png",
    traits : [
      ["good", "-0.1", "planet_housing_mult"],
      ["good", "0.15", "planet_jobs_society_research_produces_mult"],
      ["good", "0.15", "pop_happiness"],
    ],
  },
  {
    trait: "turtle_world_slaves_modifier",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/123456789.png",
    traits : [
      ["good", "-0.1", "planet_housing_mult"],
      ["good", "0.15", "planet_jobs_society_research_produces_mult"],
      ["good", "-0.1", "planet_buildings_cost_mult"],
      ["good", "-0.1", "planet_districts_cost_mult"],
    ],
  },
  {
    trait: "123456789",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/123456789.png",
    traits : [
      ["good", "123456789", "123456789"],
    ],
  },

  
  {
    trait: "123456789",
    nameEN: "123456789",
    nameRU: "",
    icon: "../src/icons/planet-modifier/123456789.png",
    traits : [
      ["good", "123456789", "123456789"],
    ],
  },



]

export { planetModifier }