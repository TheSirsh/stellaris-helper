const species: object = {
  "0": {
    "nameEN": "Machine",
    "nameRU": "",
    "icon": "../src/icons/species/machine.png",
    "traits": [
      ["empty", "", "Not affected by Happiness"],
      ["good", "+200%", "Habitability"],
      ["good", "Immortal", "Leaders"]
    ]
    },
    "1": {
      "nameEN": "Hive-Mind",
      "nameRU": "",
      "icon": "../src/icons/species/hive-mind.png",
      "traits": [
        ["empty", "", "Not affected by Happiness"],
        ["good", "+20", "years Leader Lifespan"],
        ["good", "−10", "years Leader Initial Age"]
      ]
    },
    "2": {
      "nameEN": "Not Hive-Minded",
      "nameRU": "",
      "icon": "../src/icons/species/not-hive-mind.png",
      "traits" : [
        ["empty", "", "Additional Traits are Available"]
      ]
    }
}

const speciesTraitsNotHiveMind: object = {
  "0": {
    "nameEN": "Psionic",
    "nameRU": "",
    "icon": "../src/icons/species/psionic.png",
    "traits" : [
      ["good", "+10%", "Research from Jobs"],
      ["good", "+10%", "Unity from Jobs"],
      ["good", "+5%", "Happiness"],
      ["empty", "", "Leaders have the Psychic trait"]
    ]
  },
  "1": {
    "nameEN": "Latent Psionic",
    "nameRU": "",
    "icon": "../src/icons/species/latent-psionic.png",
    "traits" : [
      ["good", "+10%", "Research from Jobs"],
      ["good", "+5%", "Unity from Jobs"],
      ["empty", "", "Leaders have a chance to gain the Psychic trait"]
    ]
  },
  "2": {
    "nameEN": "Cybernetic",
    "nameRU": "",
    "icon": "../src/icons/species/cybernetic.png",
    "traits" : [
      ["good", "+10%", "Army Damage"],
      ["good", "+20%", "Habitability"],
      ["good", "+40", "years Leader Lifespan"]
    ]
  }
}

const speciesTraitsBiological: object = {
  "0": {
    "nameEN": "Botanical",
    "nameRU": "",
    "icon": "../src/icons/species/botanical.png",
    "traits" : [
      ["empty", "", "Additional Traits are Available"]
    ]
  },
  "1": {
    "nameEN": "Lithoid",
    "nameRU": "",
    "icon": "../src/icons/species/lithoid.png",
    "traits" : [
      ["bad", "−25%", "Pop Growth Speed"],
      ["bad", "−25%", "Pop assembly speed"],
      ["good", "+50%", "Habitability"],
      ["good", "+50%", "Army health"],
      ["good", "+50", "years Leader Lifespan"],
      ["empty", "", "Consumes Minerals instead of Food"]
    ]
  },
  "2": {
    "nameEN": "Toxic",
    "nameRU": "",
    "icon": "../src/icons/species/toxic.png",
    "traits" : [
      ["", "Additional Traits are Available"]
    ]
  },
  "3": {
    "nameEN": "Aquatic",
    "nameRU": "",
    "icon": "../src/icons/species/aquatic.png",
    "traits" : [
      ["good", "+20%", "Ocean Habitability"],
      ["good",  "−10%", "Housing Usage on Ocean Worlds"],
      ["good", "+10%", "Worker Output on Ocean Worlds"],
      ["bad", "−20%", "Dry and Frozen planet Habitability"],
      ["bad", "+30%", "Housing Usage on Dry and Frozen planets"],
      ["good", "+50%", "Hydrocentric ascension boosts"]
    ]
  }
}

export { species, speciesTraitsNotHiveMind, speciesTraitsBiological}
