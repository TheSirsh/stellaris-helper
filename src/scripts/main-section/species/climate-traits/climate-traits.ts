import { ITraits } from "../../../interface";

const climateTraits: Array<ITraits> = [
  {
    trait: "trait_pc_arid_preference",
    icon: "../src/icons/climate-preference-traits/arid.png",
    image: "../src/images/planets/arid.png",
    nameEN: "Arid",
    nameRU: "Засушливый мир",
    descrEN: "Dry, rocky world with a nitrogen-oxygen atmosphere. The dust-covered terrain consists largely of mesas and canyons. Forests can be found in the more temperate polar regions, but vegetation is otherwise scarce.",
    exclude: [
      "trait_aquatic",
    ],
  },
 {
    trait: "trait_pc_desert_preference",
    icon: "../src/icons/climate-preference-traits/desert.png",
    image: "../src/images/planets/desert.png",
    nameEN: "Desert",
    nameRU: "Пустынный мир",
    descrEN: "Dry, rocky world with a nitrogen-oxygen atmosphere. Precipitation and major bodies of surface water are relatively rare. Significant temperature variations between day and night cycles. Vegetation is scarce, but even moderate precipitation can make the desert bloom.",
    exclude: [
      "trait_aquatic",
    ],
  },
  {
    trait: "trait_pc_savannah_preference",
    icon: "../src/icons/climate-preference-traits/savannah.png",
    image: "../src/images/planets/savannah.png",
    nameEN: "Savannah",
    nameRU: "Мир саванны",
    descrEN: "Rocky world dominated by dry, arid plains covered by a nitrogen-oxygen atmosphere. The small hydrosphere allows for brief wet seasons, but aside from a few ubiquitous grasses vegetation is largely concentrated around shallow oases.",
    exclude: [
      "trait_aquatic",
    ],
  },
  {
    trait: "trait_pc_alpine_preference",
    icon: "../src/icons/climate-preference-traits/alpine.png",
    image: "../src/images/planets/alpine.png",
    nameEN: "Alpine",
    nameRU: "Высокогорный мир",
    descrEN: "Mountainous world with a nitrogen-oxygen atmosphere. Snow covers the mountaintops and frozen-over lakes dot the valleys. While the planet experiences the minimal seasonal variations, the still-liquid water beneath the frozen surface of the lakes is enough to sustain some hardy vegetation.",
    exclude: [
      "trait_aquatic",
    ],
  },
  {
    trait: "trait_pc_arctic_preference",
    icon: "../src/icons/climate-preference-traits/arctic.png",
    image: "../src/images/planets/arctic.png",
    nameEN: "Arctic",
    nameRU: "Арктический мир",
    descrEN: "Frigid, rocky world with a nitrogen-oxygen atmosphere. The poles are big, and significant water deposits can be found permanently frozen as glacial ice. However, the planet experiences seasonal variations and the equatorial band is covered by vegetation.",
    exclude: [
      "trait_aquatic",
    ],
  },
  {
    trait: "trait_pc_tundra_preference",
    icon: "../src/icons/climate-preference-traits/tundra.png",
    image: "../src/images/planets/tundra.png",
    nameEN: "Tundra",
    nameRU: "Тундровый мир",
    descrEN: "Cold and rocky world with a nitrogen-oxygen atmosphere. Permafrost covers most of the surface except for the more temperate equatorial regions. A stable biosphere exists but vegetation is mostly limited to mosses and lichens.",
    exclude: [
      "trait_aquatic",
    ],
  },
  {
    trait: "trait_pc_continental_preference",
    icon: "../src/icons/climate-preference-traits/continental.png",
    image: "../src/images/planets/continental.png",
    nameEN: "Continental",
    nameRU: "Континентальный мир",
    descrEN: "Rocky world with a nitrogen-oxygen atmosphere. Active and stable hydrosphere. Great landmasses are separated by oceans, with large climate variations depending on latitude and precipitation.",
    exclude: [
      "trait_aquatic",
    ],
  },
  {
    trait: "trait_pc_ocean_preference",
    icon: "../src/icons/climate-preference-traits/ocean.png",
    image: "../src/images/planets/ocean.png",
    nameEN: "Ocean",
    nameRU: "Океанический мир",
    descrEN: "Rocky world with a nitrogen-oxygen atmosphere and a significant hydrosphere. Oceans cover more than 90% of the surface, with scattered islands making up the remaining percentage.",
  },
  {
    trait: "trait_pc_tropical_preference",
    icon: "../src/icons/climate-preference-traits/tropical.png",
    image: "../src/images/planets/tropical.png",
    nameEN: "Tropical",
    nameRU: "Тропический мир",
    descrEN: "Humid, rocky world with a thick nitrogen-oxygen atmosphere. Seasons with significant precipitation are interchanged with drier periods. Most landmasses are covered in dense vegetation.",
    exclude: [
      "trait_aquatic",
    ],
  },
  {
    trait: "trait_pc_nuked_preference",
    icon: "../src/icons/climate-preference-traits/nuked.png",
    image: "../src/images/planets/nuked.png",
    nameEN: "Tomb World",
    nameRU: "Пустыня",
    descrEN: "",
    exclude: [
      "trait_aquatic",
    ],
  },
  {
    trait: "trait_pc_gaia_preference",
    icon: "../src/icons/climate-preference-traits/gaia.png",
    image: "../src/images/planets/gaia.png",
    nameEN: "Gaia World",
    nameRU: "Идеальный мир",
    descrEN: "",
    exclude: [
      "trait_aquatic",
    ],
  },
  {
    trait: "trait_pc_ringworld_habitable_preference",
    icon: "../src/icons/climate-preference-traits/ring.png",
    image: "../src/images/planets/ring.png",
    nameEN: "Ring World",
    nameRU: "Мир-кольцо",
    descrEN: "An immense band encircling the system's sun. Built to allow for numerous artificial habitation zones along its inner span, freed from the restrictions and mundanity of planet-bound, spherical existence.",
    exclude: [
      "trait_aquatic",
    ],
  },
  {
    trait: "trait_pc_habitat_preference",
    icon: "../src/icons/climate-preference-traits/habitat.png",
    image: "../src/images/planets/habitat.png",
    nameEN: "Habitat",
    nameRU: "Орбитальное поселение",
    descrEN: "An artificial deep-space arcology offering planet-like, if decidedly urban, living conditions. Hydroponics and advanced filtering technologies make it near-self-sustaining, and station-borne facilities can mine the station's host planet for raw materials.",
    exclude: [
      "trait_aquatic",
    ],
  },
  {
    trait: "trait_pc_hive_preference",
    icon: "../src/icons/climate-preference-traits/hive.png",
    image: "../src/images/planets/hive.png",
    nameEN: "Hive World",
    nameRU: "Мир-улей",
    descrEN: "The surface of this world is covered by some kind of biological contaminant.",
    exclude: [
      "trait_aquatic",
      "trait_machine_unit",
      "NOTVALUEABLE-biological",
    ],
  },
  {
    trait: "trait_pc_machine_preference",
    icon: "../src/icons/climate-preference-traits/machine.png",
    image: "../src/images/planets/machine.png",
    nameEN: "Machine World",
    nameRU: "Мир машин",
    descrEN: "Rocky world covered with artificial structures. The thin atmosphere consists mostly of industrial pollutants. There are strong energy emissions coming from across the entire surface, but no organic life signs.",
    exclude: [
      "trait_aquatic",
      "NOTVALUEABLE-biological",
      "trait_hive_mind",
    ],
  },
  {
    trait: "trait_pc_city_preference",
    icon: "../src/icons/climate-preference-traits/city.png",
    image: "../src/images/planets/city.png",
    nameEN: "Ecumenopolis",
    nameRU: "Экуменополис",
    descrEN: "",
    exclude: [
      "trait_aquatic",
    ],
  },
  {
    trait: "trait_pc_relic_preference",
    icon: "../src/icons/climate-preference-traits/relic.png",
    image: "../src/images/planets/relic.png",
    nameEN: "Relic World",
    nameRU: "Реликтовый мир",
    descrEN: "",
    exclude: [
      "trait_aquatic",
    ],
  },
]

export { climateTraits }