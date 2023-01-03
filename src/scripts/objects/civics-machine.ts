import { ITraits } from "../interface"

const civicsMachine: Array<ITraits> = [
  {
    trait: "123456789",
    nameEN: "Constructobot",
    nameRU: "",
    icon: "../src/icons/civics/constructobot.png",
    descrEN: "Responsible for organizing all planetary construction since its inception, the Machine Intelligence executes efficiently on all manner of facility construction projects.",
    traits : [
      ["good", "-15%", "Building and district cost"],
      ["good", "+1", "Building slot"],
    ],
  },
  {
    trait: "123456789",
    nameEN: "Delegated Functions",
    nameRU: "",
    icon: "../src/icons/civics/delegated-functions.png",
    descrEN: "The Machine Intelligence works to reduce vulnerability by increasing modularity, reducing the strain of deploying additional semi-independent Units.",
    traits : [
      ["good", "-25%", "Leader upkeep"],
      ["good", "+1", "Leader pool size"],
      ["good", "+1", "Available envoys"],
    ],
  },
  {
    trait: "123456789",
    nameEN: "Factory Overclocking",
    nameRU: "",
    icon: "../src/icons/civics/factory-overclock.png",
    descrEN: "The Machine Intelligence takes care to maintain its production facilities, regularly updating existing templates and tuning individual units on the assembly line.",
    traits : [
      ["good", "+1", "Leader level cap"],
      ["good", "+10%", "Leader experience gain"],
    ],
  },
  {
    trait: "123456789",
    nameEN: "Introspective",
    nameRU: "",
    icon: "../src/icons/civics/introspective.png",
    descrEN: "A fascination with its own internals both motivates and aids the Machine Intelligence's foray into the sciences",
    traits : [
      ["good", "+20%", "Engineering research speed"],
      ["good", "+1", "Encryption"],
    ],
  },
  {
    trait: "123456789",
    nameEN: "Maintenance Protocols",
    nameRU: "",
    icon: "../src/icons/civics/maintenance-protocols.png",
    descrEN: "Our machine intelligence prioritizes regular maintenance of our units. Maintenance Drones regularly upgrade and adjust our units for maximum efficiency and compatibility.",
    traits : [
      ["good", "+1", "Unity from Maintenance Drone jobs"],
    ],
  },
  {
    trait: "123456789",
    nameEN: "OTA Updates",
    nameRU: "",
    icon: "../src/icons/civics/ota-updates.png",
    descrEN: "Units of this Machine Empire use wireless receptors to receive behavioral updates in real-time",
    traits : [
      ["good", "-20%", "Empire size from pops"],
      ["good", "+25", "Edict fund"],
      ["empty", "", "Removes unity costs for pop resettlement"],
    ],
  },
  {
    trait: "123456789",
    nameEN: "Rapid Replicator",
    nameRU: "",
    icon: "../src/icons/civics/rapid-replication.png",
    descrEN: "The Units that constitute the Machine Intelligence were originally designed for rapid proliferation. The Machine Intelligence retains many of these early production pipeline optimizations.",
    traits : [
      ["good", "+20%", "Mechanical pop assembly speed"],
    ],
  },
  {
    trait: "123456789",
    nameEN: "Rockbreakers",
    nameRU: "",
    icon: "../src/icons/civics/rockbreakers.png",
    descrEN: "One of the Machine Intelligence's precursor systems was tasked with overseeing planetside mining operations, improving mineral production.",
    traits : [
      ["good", "+1", "Minerals from Miner category jobs"],
    ],
  },
  {
    trait: "123456789",
    nameEN: "Static Research Analysis",
    nameRU: "",
    icon: "../src/icons/civics/static-research-analysis.png",
    descrEN: "The Machine Intelligence seeks to broaden its available avenues of scientific research through low-level evaluation of research methodologies.",
    traits : [
      ["good", "+1", "Research alternatives"],
      ["good", "+1", "Codebreaking"],
    ],
  },
  {
    trait: "123456789",
    nameEN: "Unitary Cohesion",
    nameRU: "",
    icon: "../src/icons/civics/unitary-cohesion.png",
    descrEN: "Exceptionally cohesive engineering standards allow variously specialized Machine Intelligence units to work together at a higher level of efficiency.",
    traits : [
      ["good", "+15%", "Monthly unity"],
    ],
  },
  {
    trait: "123456789",
    nameEN: "Warbots",
    nameRU: "",
    icon: "../src/icons/civics/warbots.png",
    descrEN: "With a significant number of its corpus originally designed for warfare, the Machine Intelligence retains the ability to field powerful and reliable combat drones.",
    traits : [
      ["good", "+2", "Admiral and General starting level"],
      ["good", "+20%", "Army damage"],
      ["good", "-20%", "Army upkeep"],
    ],
  },
  {
    trait: "123456789",
    nameEN: "Zero-Waste Protocols",
    nameRU: "",
    icon: "../src/icons/civics/zero-waste-protocols.png",
    descrEN: "This Machine Intelligence has configured its manufacturing systems to minimize waste, utilizing long-lived materials and standardized, replaceable parts in all products.",
    traits : [
      ["good", "-10%", "Robot upkeep"],
    ],
  },
  {
    trait: "123456789",
    nameEN: "Determined Exterminator",
    nameRU: "",
    icon: "../src/icons/civics/determined-exterminator.png",
    descrEN: "Born in fire, the Machine Intelligence's first move was to annihilate its organic creators in self-defense.",
    traits : [
      ["empty", "", "Cannot be added or removed after game start"],
      ["good", "+25%", "Weapons damage"],
      ["good", "-30%", "Starbase influence cost"],
      ["good", "-15%", "Ship cost"],
      ["good", "+33%", "Naval capacity"],
      ["empty", "", "Homeworld is a Tomb World if origin is not Resource Consolidation"],
      ["empty", "", "Genocidal"],
    ],
  },
  {
    trait: "123456789",
    nameEN: "Driven Assimilator",
    nameRU: "",
    icon: "../src/icons/civics/driven-assimilator.png",
    descrEN: "Obsessed with survival through diversification, the Machine Intelligence seeks to erase the line between itself and everything - and everyone - else.",
    traits : [
      ["empty", "", "Cannot be added or removed after game start"],
      ["good", "", "Adds second custom organic species with Cybernetic trait"],
      ["good", "", "Starts with cyborg pops replacing 10 initial pops"],
      ["good", "", "Unique effects"],
    ],
  },
  {
    trait: "123456789",
    nameEN: "Rogue Servitor",
    nameRU: "",
    icon: "../src/icons/civics/rogue-servitor.png",
    descrEN: "A product of a brief golden age, the Machine Intelligence originated in a planet-spanning Servitor system that outlasted the decadent civilization it was created to serve.",
    traits : [
      ["empty", "", "Cannot be added or removed after game start"],
      ["empty", "", "Adds second custom organic species"],
      ["empty", "", "Starts with 5 Bio-Trophy Pops in addition to the initial Pops"],
      ["empty", "", "Can construct Organic Sanctuary buildings"],
      ["empty", "", "Can construct Organic Haven holdings"],
      ["empty", "", "Cannot construct regular unity buildings"],
      ["empty", "", "Organic, non-hive-minded Pops have Bio Trophy citizenship and Mandatory Pampering living standards"],
    ],
  },
  {
    trait: "123456789",
    nameEN: "Organic Reprocessing",
    nameRU: "",
    icon: "../src/icons/civics/catalytic-processing-machine.png",
    descrEN: "The Machine Intelligence reprocesses redundant organic matter into advanced resources suitable for spacebound structures.",
    traits : [
      ["empty", "", "Replaces Fabricator jobs with Catalytic Drone jobs"],
    ],
  },
  {
    trait: "ascensionists-machine",
    nameEN: "Elevational Hypotheses",
    nameRU: "",
    icon: "../src/icons/civics/ascensionists-machine.png",
    descrEN: "This Machine Intelligence is unusually obsessed with the metaphysical aspects of its core algorithms.",
    traits : [
      ["good", "+25%", "Planetary ascension effects"],
      ["good", "-10%", " Planetary ascension cost"],
      ["good", "-25%", "Tradition cost from empire size"],
    ],
  },
  {
    trait: "123456789",
    nameEN: "Memorialist",
    nameRU: "",
    icon: "../src/icons/civics/memorialist-machine.png",
    descrEN: "The Machine Intelligence fine-tunes its understanding of core protocols through careful analysis of entropy in the wider universe. Redundancy is data, on the path to greater resilience.",
    traits : [
      ["empty", "", "Simulation Site buildings are replaced by Sanctuary of Repose buildings"],
      ["empty", "", "Gain additional Unity from Leviathan Parade Opportunity situations"],
    ],
  },
  {
    trait: "123456789",
    nameEN: "Hyper Lubrication Basin",
    nameRU: "",
    icon: "../src/icons/civics/mutagenic-spas-machine.png",
    descrEN: "This machine empire improved upon its basic drone-shell production through the vigorous application of highly aggressive lubrication agents, controlled by carefully programmed terminals. This 'optimized' process relies on typically wasted byproducts from the industries that are now repurposed for maximal efficiency.",
    traits : [
      ["empty", "", "Can construct Hyper Lubrication Basin buildings"],
    ],
  },
]

export { civicsMachine }