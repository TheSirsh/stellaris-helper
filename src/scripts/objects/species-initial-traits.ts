import { IBiological } from "../interface.js"

const speciesBiologicalTraits: Array<IBiological> = [
  {
    trait: "trait_adaptive",
    icon: "../src/icons/initial-traits/adaptive.png",
    nameEN: "Adaptive",
    nameRU: "",
    number1: "+10%",
    text1EN: "Habitability",
    text1RU: ""
  },
  {
    trait: "trait_extremely_adaptive",
    icon: "../src/icons/initial-traits/extremely-adaptive.png",
    nameEN: "Extremely Adaptive",
    nameRU: "",
    number1: "+20%",
    text1EN: "Habitability",
    text1RU: ""
  },
  {
    trait: "trait_agrarian",
    icon: "../src/icons/initial-traits/agrarian.png",
    nameEN: "Agrarian",
    nameRU: "",
    number1: "+15%",
    text1EN: "Food from Jobs",
    text1RU: ""
  },
  {
    trait: "trait_charismatic",
    icon: "../src/icons/initial-traits/charismatic.png",
    nameEN: "Charismatic",
    nameRU: "",
    number1: "+20%",
    text1EN: "Amenities from Jobs",
    text1RU: ""
  },
  {
    trait: "trait_communal",
    icon: "../src/icons/initial-traits/communal.png",
    nameEN: "Communal",
    nameRU: "",
    number1: "-10%",
    text1EN: "Pop Housing Usage",
    text1RU: ""
  },
  {
    trait: "trait_conformists",
    icon: "../src/icons/initial-traits/conformists.png",
    nameEN: "Conformists",
    nameRU: "",
    number1: "+30%",
    text1EN: "Governing Ethics Attraction",
    text1RU: ""
  },
  {
    trait: "trait_conservational",
    icon: "../src/icons/initial-traits/conservationist.png",
    nameEN: "Conservationist",
    nameRU: "",
    number1: "−10%",
    text1EN: "Pop consumer goods upkeep",
    text1RU: ""
  },
  {
    trait: "trait_docile",
    icon: "../src/icons/initial-traits/docile.png",
    nameEN: "Docile",
    nameRU: "",
    number1: "−10%",
    text1EN: "Empire Size from Pops",
    text1RU: ""
  },
  {
    trait: "trait_enduring",
    icon: "../src/icons/initial-traits/enduring.png",
    nameEN: "Enduring",
    nameRU: "",
    number1: "+20",
    text1EN: "years Leader Lifespan",
    text1RU: ""
  },
  {
    trait: "trait_venerable",
    icon: "../src/icons/initial-traits/venerable.png",
    nameEN: "Venerable",
    nameRU: "",
    number1: "+80",
    text1EN: "years Leader Lifespan",
    text1RU: ""
  },
  {
    trait: "trait_industrious",
    icon: "../src/icons/initial-traits/industrious.png",
    nameEN: "Industrious",
    nameRU: "",
    number1: "+15%",
    text1EN: "Minerals from Jobs",
    text1RU: ""
  },
  {
    trait: "trait_ingenious",
    icon: "../src/icons/initial-traits/ingenious.png",
    nameEN: "Ingenious",
    nameRU: "",
    number1: "+15%",
    text1EN: "Energy Credits from Jobs",
    text1RU: ""
  },
  {
    trait: "trait_intelligent",
    icon: "../src/icons/initial-traits/intelligent.png",
    nameEN: "Intelligent",
    nameRU: "",
    number1: "+10%",
    text1EN: "Research from Jobs",
    text1RU: ""
  },
  {
    trait: "trait_natural_engineers",
    icon: "../src/icons/initial-traits/natural-engineers.png",
    nameEN: "Natural Engineers",
    nameRU: "",
    number1: "+15%",
    text1EN: "Engineering Research from Jobs",
    text1RU: ""
  },
  {
    trait: "trait_natural_physicists",
    icon: "../src/icons/initial-traits/natural-physicists.png",
    nameEN: "Natural Physicists",
    nameRU: "",
    number1: "+15%",
    text1EN: "Physics Research from Jobs",
    text1RU: ""
  },
  {
    trait: "trait_natural_sociologists",
    icon: "../src/icons/initial-traits/natural-sociologists.png",
    nameEN: "Natural Sociologists",
    nameRU: "",
    number1: "+15%",
    text1EN: "Society Research from Jobs",
    text1RU: ""
  },
  {
    trait: "trait_nomadic",
    icon: "../src/icons/initial-traits/nomadic.png",
    nameEN: "Nomadic",
    nameRU: "",
    number1: "+15%",
    text1EN: "Pop growth from immigration",
    text1RU: "",
    number2: "-25%",
    text2EN: "Resettlement Cost",
    text2RU: "",
  },
  {
    trait: "trait_quick_learners",
    icon: "../src/icons/initial-traits/quick-learners.png",
    nameEN: "Quick Learners",
    nameRU: "",
    number1: "+25%",
    text1EN: "Leader Experience Gain",
    text1RU: ""
  },
  {
    trait: "trait_rapid_breeders",
    icon: "../src/icons/initial-traits/rapid-breeders.png",
    nameEN: "Rapid Breeders",
    nameRU: "",
    number1: "+10%",
    text1EN: "Growth Speed",
    text1RU: ""
  },
  {
    trait: "trait_resilient",
    icon: "../src/icons/initial-traits/resilient.png",
    nameEN: "Resilient",
    nameRU: "",
    number1: "+50%",
    text1EN: "Defense Army Damage",
    text1RU: ""
  },
  {
    trait: "trait_strong",
    icon: "../src/icons/initial-traits/strong.png",
    nameEN: "Strong",
    nameRU: "",
    number1: "+20%",
    text1EN: "Army Damage",
    text1RU: "",
    number2: "+2.5%",
    text2EN: "Worker and Menial Drone Pop Resource Output",
    text2RU: "",
  },
  {
    trait: "trait_very_strong",
    icon: "../src/icons/initial-traits/very-strong.png",
    nameEN: "Very Strong",
    nameRU: "",
    number1: "+40%",
    text1EN: "Army Damage",
    text1RU: "",
    number2: "+5%",
    text2EN: "Worker and Menial Drone Pop Resource Output",
    text2RU: "",
  },
  {
    trait: "trait_talented",
    icon: "../src/icons/initial-traits/talented.png",
    nameEN: "Talented",
    nameRU: "",
    number1: "+1",
    text1EN: "Leader Level Cap",
    text1RU: ""
  },
  {
    trait: "trait_thrifty",
    icon: "../src/icons/initial-traits/thrifty.png",
    nameEN: "Thrifty",
    nameRU: "",
    number1: "+25%",
    text1EN: "Trade value from Jobs",
    text1RU: ""
  },
  {
    trait: "trait_traditional",
    icon: "../src/icons/initial-traits/traditional.png",
    nameEN: "Traditional",
    nameRU: "",
    number1: "+10%",
    text1EN: "Unity from Jobs",
    text1RU: ""
  }
]

export { speciesBiologicalTraits }