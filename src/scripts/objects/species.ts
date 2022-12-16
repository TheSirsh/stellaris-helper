import { ISpecies } from "../interface.js"

const species: Array<ISpecies> = [
  {
    trait: "trait_machine_unit",
    nameEN: "Machine",
    nameRU: "",
    icon: "../src/icons/species/machine.png",
    traits: [
      ["empty", "", "Not affected by Happiness"],
      ["good", "+200%", "Habitability"],
      ["good", "Immortal", "Leaders"]
    ]
    },
    {
      trait: "trait_hive_mind",
      nameEN: "Hive-Mind",
      nameRU: "",
      icon: "../src/icons/species/hive-mind.png",
      traits: [
        ["empty", "", "Not affected by Happiness"],
        ["good", "+20", "years Leader Lifespan"],
        ["good", "−10", "years Leader Initial Age"]
      ]
    },
    {
      trait: "NOTVALUEABLE-biological",
      nameEN: "Not Hive-Minded",
      nameRU: "",
      icon: "../src/icons/species/not-hive-mind.png",
      traits : [
        ["empty", "", "Additional Traits are Available"]
      ]
    }
  ]

const speciesTraitsNotHiveMind: Array<ISpecies> = [
  {
    trait: "trait_psionic",
    nameEN: "Psionic",
    nameRU: "",
    "icon": "../src/icons/species/psionic.png",
    "traits" : [
      ["good", "+10%", "Research from Jobs"],
      ["good", "+10%", "Unity from Jobs"],
      ["good", "+5%", "Happiness"],
      ["empty", "", "Leaders have the Psychic trait"]
    ]
  },
  {
    trait: "trait_latent_psionic",
    nameEN: "Latent Psionic",
    nameRU: "",
    icon: "../src/icons/species/latent-psionic.png",
    traits : [
      ["good", "+10%", "Research from Jobs"],
      ["good", "+5%", "Unity from Jobs"],
      ["empty", "", "Leaders have a chance to gain the Psychic trait"]
    ]
  },
  {
    trait: "trait_cybernetic",
    nameEN: "Cybernetic",
    nameRU: "",
    icon: "../src/icons/species/cybernetic.png",
    traits : [
      ["good", "+10%", "Army Damage"],
      ["good", "+20%", "Habitability"],
      ["good", "+40", "years Leader Lifespan"]
    ]
  }
]

const speciesTraitsBiological: Array<ISpecies> = [
  {
    trait: "NOTVALUEABLE-botanical",
    nameEN: "Botanical",
    nameRU: "",
    icon: "../src/icons/species/botanical.png",
    traits : [
      ["empty", "", "Additional Traits are Available"]
    ]
  },
  {
    trait: "trait_lithoid",
    nameEN: "Lithoid",
    nameRU: "",
    icon: "../src/icons/species/lithoid.png",
    traits : [
      ["bad", "−25%", "Pop Growth Speed"],
      ["bad", "−25%", "Pop assembly speed"],
      ["good", "+50%", "Habitability"],
      ["good", "+50%", "Army health"],
      ["good", "+50", "years Leader Lifespan"],
      ["empty", "", "Consumes Minerals instead of Food"]
    ]
  },
  {
    trait: "NOTVALUEABLE-toxic",
    nameEN: "Toxic",
    nameRU: "",
    icon: "../src/icons/species/toxic.png",
    traits : [
      ["empty", "", "Additional Traits are Available"]
    ]
  },
  {
    trait: "trait_aquatic",
    nameEN: "Aquatic",
    nameRU: "",
    icon: "../src/icons/species/aquatic.png",
    traits : [
      ["good", "+20%", "Ocean Habitability"],
      ["good",  "−10%", "Housing Usage on Ocean Worlds"],
      ["good", "+10%", "Worker Output on Ocean Worlds"],
      ["bad", "−20%", "Dry and Frozen planet Habitability"],
      ["bad", "+30%", "Housing Usage on Dry and Frozen planets"],
      ["good", "+50%", "Hydrocentric ascension boosts"]
    ]
  }
]

export { species, speciesTraitsNotHiveMind, speciesTraitsBiological}
