import { ITraits } from "../interface"

const civicsCorporate: Array<ITraits> = [
  {
    trait: "civic_criminal_heritage",
    nameEN: "Criminal Heritage",
    nameRU: "",
    icon: "../src/icons/civics/criminal-heritage.png",
    descrEN: "This megacorporation can trace its origins back to a crime syndicate that eventually grew powerful enough to supplant all forms of local government.",
    traits : [
      ["empty", "", "Cannot be added or removed after game start"],
      ["empty", "", "Cannot have Commercial Pacts"],
      ["empty", "", "Crime on Branch Office planets increases Branch Office value"],
      ["empty", "", "Can build special crime-increasing Corporate holdings"],
      ["empty", "", "Can build Branch Offices on the planet of any regular empire they have no war or truce with"],
      ["good", "+20%", "Infiltration speed"],
      ["good", "+1", "Codebreaking"],
    ],
  },
  {
    trait: "civic_franchising",
    nameEN: "Franchising",
    nameRU: "",
    icon: "../src/icons/civics/franchising.png",
    descrEN: "This megacorporation relies heavily on franchising. Subsidiaries share a greater cut of their profits with their corporate overlord, in exchange for a license to market their goods under established brands.",
    traits : [
      ["good", "-25%", "Empire size from Branch Office"],
      ["good", "+0.5", "Monthly loyalty from subjects"],
      ["empty", "", "Can construct Franchise Headquarters holdings"],
      ["empty", "", "No Loyalty loss from multiple subjects"],
      ["empty", "", "Cannot use Expansion Prohibited terms of agreement"],
      ["empty", "", "Cannot use Limited Diplomacy terms of agreement"],
    ],
  },
  {
    trait: "civic_free_traders",
    nameEN: "Free Traders",
    nameRU: "",
    icon: "../src/icons/civics/free-traders.png",
    descrEN: "The trading fleets of this megacorporation are bolstered by semi-independent free traders operating under license.",
    traits : [
      ["good", "+10%", "Trade value"],
      ["good", "+10%", "Branch Office value"],
    ],
  },
  {
    trait: "civic_private_prospectors",
    nameEN: "Private Prospectors",
    nameRU: "",
    icon: "../src/icons/civics/private-prospectors.png",
    descrEN: "Building better worlds is hazardous work, but this Megacorporation relies on private prospectors to chart and establish footholds on promising planets.",
    traits : [
      ["empty", "", "Can build private colony ships"],
      ["good", "-33%", "Empire size from systems"],
    ],
  },
  {
    trait: "civic_trading_posts",
    nameEN: "Trading Posts",
    nameRU: "",
    icon: "../src/icons/civics/trading-posts.png",
    descrEN: "Good business is where you find it. This Megacorporation has a long tradition of spreading its influence through the establishment on trading posts. Their starbases are busy centers of trade.",
    traits : [
      ["good", "+4", "Starbase capacity"],
    ],
  },
  {
    trait: "civic_brand_loyalty",
    nameEN: "Brand Loyalty",
    nameRU: "",
    icon: "../src/icons/civics/brand-loyalty.png",
    descrEN: "This Megacorporation has fostered a great sense of brand loyalty among its internal consumer base. Its catchy corporate slogans can be recited by nearly everyone.",
    traits : [
      ["good", "+15%", "Monthly unity"],
      ["good", "+25", "Edict fund"],
    ],
    exclude: [
      "civic_beacon_of_liberty",
    ],
  },
  {
    trait: "civic_gospel_of_the_masses",
    nameEN: "Gospel of the Masses",
    nameRU: "",
    icon: "../src/icons/civics/gospel-of-the-masses.png",
    descrEN: "This Megacorporation embraces a curious blend of commercial and spiritualistic values, in which the position of ordained minister and corporate officer have merged into a single role.",
    traits : [
      ["good", "+50%", "Spiritualist ethics attraction"],
      ["empty", "", "Can build Temple of Prosperity Corporate holding"],
      ["good", "+0.33", "Trade value per free Spiritualist pop on empire or planets with Branch Offices"],
    ],
  },
  {
    trait: "civic_indentured_assets",
    nameEN: "Indentured Assets",
    nameRU: "",
    icon: "../src/icons/civics/indentured-assets.png",
    descrEN: "This Megacorporation specializes in large indentured workforces. It has little to do with the barbaric practice of slavery - these workers are merely paying off their debts... indefinitely.",
    traits : [
      ["good", "+10%", "Slave pop resource output"],
      ["good", "35%", "Enslaved pop ratio"],
    ],
    exclude: [
      "civic_corporate_hedonism",
      "civic_slaver_guilds",
      "civic_pleasure_seekers",
    ],
  },
  {
    trait: "civic_media_conglomerate",
    nameEN: "Media Conglomerate",
    nameRU: "",
    icon: "../src/icons/civics/media-conglomerate.png",
    descrEN: "Before branching into other fields, this Megacorporation began its rise to fortune as a media conglomerate. Its PR department are still masters of spinning stories and presenting the latest quarterly report in the most advantageous way.",
    traits : [
      ["good", "+5%", "Citizen pop happiness"],
      ["good", "-5%", "War exhaustion gain"],
    ],
    exclude: [
      "civic_idealistic_foundation",
    ],
  },
  {
    trait: "civic_naval_contractors",
    nameEN: "Naval Contractors",
    nameRU: "",
    icon: "../src/icons/civics/naval-contractors.png",
    descrEN: "This Megacorporation relies on several semi-independent navy contractors to increase its fleet size. Competing for bids, the contractors are always struggling to outperform one another.",
    traits : [
      ["good", "+15%", "Naval capacity"],
      ["good", "+2", "Mercenary Enclave capacity"],
    ],
    exclude: [
      "civic_citizen_service",
    ],
  },
  {
    trait: "civic_private_military_companies",
    nameEN: "Private Military Companies",
    nameRU: "",
    icon: "../src/icons/civics/private-military-companies.png",
    descrEN: "This Megacorporation has a large number of powerful private military companies on its payroll. These mercenary contractors augment its ground forces.",
    traits : [
      ["good", "+20%", "Army damage"],
      ["good", "-20%", "Army upkeep"],
      ["good", "+100", "Army starting experience"],
      ["good", "+1", "Mercenary Enclave capacity"],
    ],
    exclude: [
      "civic_warrior_culture",
    ]
  },
  {
    trait: "civic_ruthless_competition",
    nameEN: "Ruthless Competition",
    nameRU: "",
    icon: "../src/icons/civics/ruthless-competition.png",
    descrEN: "All levels of society in this Megacorporation are constantly vying with each other in ruthless competition. It's a dog-eat-dog world.",
    traits : [
      ["good", "+1", "Leader level cap"],
      ["good", "+10%", "Leader experience gain"],
      ["good", "+1", "Codebreaking"],
    ],
    exclude: [
      "civic_meritocracy",
    ],
  },
  {
    trait: "civic_corporate_catalytic_processing",
    nameEN: "Catalytic Recyclers",
    nameRU: "",
    icon: "../src/icons/civics/catalytic-processing-corporate.png",
    descrEN: "This megacorporation seeks to maximize profits by recycling excess organic matter into advanced resources suitable for spacebound structures.",
    traits : [
      ["empty", "", "Replaces Metallurgist jobs with Catalytic Technician jobs"],
    ],
    exclude: [
      "civic_catalytic_processing"
    ],
  },
  {
    trait: "civic_corporate_ascensionists",
    nameEN: "Ascensionists",
    nameRU: "",
    icon: "../src/icons/civics/ascensionists-corporate.png",
    descrEN: "The ultimate goal of this empire is to ascend to ever greater levels of fulfillment.",
    traits : [
      ["good", "+25%", "Planetary ascension effects"],
      ["good", "-10%", "Planetary ascension cost"],
      ["good", "-25%", "Tradition cost from empire size"],
    ],
  },
  {
    trait: "civic_corporate_hedonism",
    nameEN: "Corporate Hedonism",
    nameRU: "",
    icon: "../src/icons/civics/hedonism-corporate.png",
    descrEN: "Work is where you want to be. The citizens of this Megacorporation happily pledge allegiance - and all their free time - to their employers in exchange for lavish corporate comforts.",
    traits : [
      ["empty", "", "Can use the Decadent Lifestyle living standard"],
      ["good", "+1%", "Pop growth speed from Entertainers"],
      ["good", "+5", "Amenities from Servants"],
    ],
    exclude: [
      "civic_pleasure_seekers",
      "civic_indentured_assets",
      "civic_slaver_guilds",
    ],
  },
  {
    trait: "civic_corporate_crafters",
    nameEN: "Mastercraft Inc.",
    nameRU: "",
    icon: "../src/icons/civics/crafters-corporate.png",
    descrEN: "This megacorporation has focused its production pipeline solely on goods of the highest quality and profit margins, creating and marketing stunning products with artistry and craft.",
    traits : [
      ["empty", "", "Replaces Artisan jobs with Artificer jobs"],
      ["good", "+1", "Building slot per 3 Industrial districts (except on Habitats)"],
    ],
    exclude: [
      "civic_crafters",
    ],
  },
  {
    trait: "civic_public_relations_specialists",
    nameEN: "Public Relations Specialists",
    nameRU: "",
    icon: "../src/icons/civics/public-relations-specialists.png",
    descrEN: "	If you can control what someone thinks, then you can also control their behavior. This Megacorporation has a virtual army of specialists ready to engage in battles of public opinion.",
    traits : [
      ["good", "+2", "Available envoys"],
      ["good", "+10%", "Diplomatic weight"],
    ],
    exclude: [
      "civic_diplomatic_corps",
    ],
  },
  {
    trait: "civic_death_cult_corporate",
    nameEN: "Corporate Death Cult",
    nameRU: "",
    icon: "../src/icons/civics/death-cult-corporate.png",
    descrEN: "This Megacorporation has embraced ritual sacrifice as a means of ensuring its continuing profits. Willing initiates periodically give their lives in hopes of good fortune for their society.",
    traits : [
      ["empty", "", "Can construct Sacrificial Temple buildings"],
      ["empty", "", "Can construct Sacrificial Shrine holdings"],
      ["empty", "", "Can use Sacrifice edicts"],
    ],
    exclude: [
      "civic_fanatic_purifiers",
      "civic_inwards_perfection",
      "civic_death_cult",
    ],
  },
  {
    trait: "civic_permanent_employment",
    nameEN: "Permanent Employment",
    nameRU: "",
    icon: "../src/icons/civics/permanent-employment.png",
    descrEN: "This Megacorporation has ensured that its employees will never be out of a job. Ever. After the employee's time is up, they will be repurposed for simpler tasks so that they can still provide for their families and pay off their debts.",
    traits : [
      ["empty", "", "Can construct Posthumous Employment Center buildings"],
      ["empty", "", "Can construct Reemployment Center holdings"],
      ["empty", "", "Pops created through organic pop assembly have the Zombie trait"],
      ["empty", "", "Start with 3 or 4 pops with the Zombie trait"],
      ["empty", "", "After 80-120 years, can gain the Zombie Contract Manipulation empire modifier"],
      ["empty", "", "Defeated organic guardians can be resurrected"],
    ],
    exclude: [
      "ethic_egalitarian",
      "ethic_fanatic_egalitarian",
    ],
  },
  {
    trait: "civic_corporate_anglers",
    nameEN: "Anglers",
    nameRU: "",
    icon: "../src/icons/civics/anglers-corporate.png",
    descrEN: "Adept at utilizing nature's bounty, this society provides for itself a stable influx of sustenance and economic value.",
    traits : [
      ["empty", "", "Cannot be added or removed after game start"],
      ["empty", "", "Main species must have the Aquatic trait"],
      ["empty", "", "No Agriculture district limit on Ocean Worlds"],
      ["empty", "", "Replaces Farmer jobs with an Angler job on wet climates"],
      ["empty", "", "Agriculture districts create Pearl Diver jobs on wet climates"],
      ["good", "-50", "Agriculture district minerals cost on wet climates"],
    ],
    exclude: [
      "civic_agrarian_idyll",
    ],
  },
  {
    trait: "civic_corporate_toxic_baths",
    nameEN: "Mutagenic Spas",
    nameRU: "",
    icon: "../src/icons/civics/mutagenic-spas-corporate.png",
    descrEN: "This civilization engages in mutagenic bathing, with professional attendants overseeing the use of highly dangerous substances. This 'invigorating' process is marketed as a necessary step in wellbeing and personal development.",
    traits : [
      ["empty", "", "Can construct Mutagenic Spa buildings"],
    ],
    exclude: [
      "civic_toxic_baths",
    ],
  },
  {
    trait: "civic_corporate_relentless_industrialists",
    nameEN: "Relentless Industrialists",
    nameRU: "",
    icon: "../src/icons/civics/relentless-industrialists-corporate.png",
    descrEN: "To live is to exploit. This civilization is built around the principle of living life to the fullest, in the sense of squeezing the maximum profit from every last ounce of matter and membrane available for exploitation.",
    traits : [
      ["empty", "", "Can construct Coordinated Fulfillment Center buildings"],
      ["empty", "", "Start with a Coordinated Fulfillment Center building"],
      ["empty", "", "First time a world is polluted triggers the Environmental Deterioration situation"],
    ],
    exclude: [
      "civic_environmentalist",
      "civic_agrarian_idyll",
      "civic_idyllic_bloom",
      "civic_memorialist",
      "civic_relentless_industrialists",
    ],
  },
  {
    trait: "civic_corporate_scavengers",
    nameEN: "Scavengers",
    nameRU: "",
    icon: "../src/icons/civics/scavengers-corporate.png",
    descrEN: "In this society, nothing goes to waste, even in the grimmest times of war: no enemy technology will go undiscovered, as teams of scrappers accompanying the war fleets scrape wreckages of anything and everything worth salvaging.",
    traits : [
      ["empty", "", "Enables the Research & Salvage Debris debris policy"],
      ["good", "+10%", "chance per ship debris to create a ship of equal size"],
      ["good", "+10", "Opinion with the Salvagers enclave"],
    ],
  },
]

export { civicsCorporate }