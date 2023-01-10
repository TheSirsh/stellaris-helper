const civicsStandart = [
    {
        trait: "civic_cutthroat_politics",
        nameEN: "Cutthroat Politics",
        nameRU: "",
        icon: "../src/icons/civics/cutthroat-politics.png",
        descrEN: "The political system in this society is renowned for its intrigue. Power struggles, shady backroom deals and cloak and dagger scheming are par for the course. Those who survive long enough to learn the game, however, tend to learn it well.",
        traits: [
            ["good", "-20%", "Edict upkeep"],
            ["good", "+1", "Codebreaking"],
        ],
        exclude: [
            "ethic_fanatic_egalitarian",
            "ethic_egalitarian",
            "civic_free_haven",
        ],
    },
    {
        trait: "civic_efficient_bureaucracy",
        nameEN: "Efficient Bureaucracy",
        nameRU: "",
        icon: "../src/icons/civics/efficient-bureaucracy.png",
        descrEN: "This society is renowned for its efficiency. Not only do the mag-trains run on time, but the colossal bureaucratic apparatus required to run an interstellar nation has been greatly streamlined.",
        traits: [
            ["good", "-20%", "Administrator category jobs upkeep"],
            ["empty", "", "Bureaucrat and Priest category jobs produce Edict Fund equal to their Unity output"],
        ],
    },
    {
        trait: "civic_environmentalist",
        nameEN: "Environmentalist",
        nameRU: "",
        icon: "../src/icons/civics/environmentalist.png",
        descrEN: "This society seeks to co-exist in harmony with nature. Great care is taken to preserve the environment and limit consumerism where possible.",
        traits: [
            ["good", "−20%", "Pop consumer goods upkeep"],
            ["empty", "", "Can construct Ranger Lodge buildings"],
            ["empty", "", "Can construct Ranger Lodge holdings"],
            ["empty", "", "Start with a Ranger Lodge building"],
        ],
        exclude: [
            "civic_relentless_industrialists",
        ],
    },
    {
        trait: "civic_functional_architecture",
        nameEN: "Functional Architecture",
        nameRU: "",
        icon: "../src/icons/civics/functional-architecture.png",
        descrEN: "This society is renowned for its simple yet functional architecture. There are those who would refer to this building style as boring or even depressing, but in most cases, concrete does the job just as well as any other building material.",
        traits: [
            ["good", "-15%", "Building and district cost"],
            ["good", "+1", "Building slots"],
        ],
    },
    {
        trait: "civic_mining_guilds",
        nameEN: "Mining Guilds",
        nameRU: "",
        icon: "../src/icons/civics/mining-guilds.png",
        descrEN: "Several large mining guilds have reached a dominant position in this society. The government relies heavily on their support.",
        traits: [
            ["good", "+1", "Minerals from Miner category jobs"],
        ],
    },
    {
        trait: "civic_agrarian_idyll",
        nameEN: "Agrarian Idyll",
        nameRU: "",
        icon: "../src/icons/civics/agrarian-idyll.png",
        descrEN: "A simple and peaceful life can often be the most rewarding. This agrarian society has, to a large extent, managed to avoid large-scale urbanization.",
        traits: [
            ["good", "+1", "Housing from Generator, Mining and Agriculture districts"],
            ["bad", "-1", "Housing from City Districts"],
            ["bad", "-5", "Housing from City Segments"],
            ["good", "+2", "Amenities from Farmers, Anglers, and Pearl Divers"],
            ["good", "+1", "Building slot per every 4 Agriculture districts"],
            ["empty", "", "Can research the Agrarian Utopias technology"],
            ["empty", "", "Cannot research the Anti-Gravity Engineering technology"],
            ["empty", "", "Cannot pick the Arcology Project ascension perk"],
        ],
        exclude: [
            "civic_relentless_industrialists",
        ],
    },
    {
        trait: "civic_aristocratic_elite",
        nameEN: "Aristocratic Elite",
        nameRU: "",
        icon: "../src/icons/civics/aristocratic-elite.png",
        descrEN: "This society has an entrenched nobility that occupies the upper echelons of society.",
        traits: [
            ["good", "+1", "Governor level cap"],
            ["empty", "", "Can construct Noble Estates buildings"],
            ["empty", "", "Can construct Noble Chateaus holdings"],
            ["empty", "", "Capital Buildings replace some Politician jobs with Noble jobs"],
        ],
        exclude: [
            "ethic_egalitarian",
            "ethic_fanatic_egalitarian",
            "civic_merchant_guilds",
            "civic_exalted_priesthood",
            "civic_technocracy",
        ],
    },
    {
        trait: "civic_beacon_of_liberty",
        nameEN: "Beacon of Liberty",
        nameRU: "",
        icon: "../src/icons/civics/beacon-of-liberty.png",
        descrEN: "This society is a shining beacon of light in a sea of darkness. Liberty and individual freedoms are held in the highest regard here.",
        traits: [
            ["good", "+15%", "Monthly unity"],
            ["good", "-15%", "Empire size from pops"],
        ],
        exclude: [
            "ethic_xenophobe",
            "ethic_fanatic_xenophobe",
        ],
    },
    {
        trait: "civic_citizen_service",
        nameEN: "Citizen Service",
        nameRU: "",
        icon: "../src/icons/civics/citizen-service.png",
        descrEN: "Are you doing your part? Full citizenship and the political responsibility that comes with it is limited to those who have served a tour of duty in the military. Service guarantees citizenship.",
        traits: [
            ["good", "+2", "Unity from Soldiers"],
            ["good", "+15%", "Naval capacity"],
            ["empty", "", "Can construct Recruitment Office holdings"],
            ["empty", "", "Full Citizenship pops must have Full Military Service and vice versa"],
        ],
        exclude: [
            "ethic_fanatic_xenophile",
            "civic_reanimated_armies",
        ]
    },
    {
        trait: "civic_corporate_dominion",
        nameEN: "Corporate Dominion",
        nameRU: "",
        icon: "../src/icons/civics/corporate-dominion.png",
        descrEN: "This society is dominated by a megacorporation that has completely supplanted the role of the state.",
        traits: [
            ["good", "+1", "Energy per Starbase Trading Hub module"],
            ["empty", "", "Can build private colony ships"],
            ["empty", "", "Starts with the Offworld Trade Companies technology"],
            ["empty", "", "Can use the Mercantile Diplomatic Stance (unless also Inward Perfection)"],
        ],
        exclude: [
            "ethic_xenophobe",
            "ethic_fanatic_xenophobe",
        ],
    },
    {
        trait: "civic_corvee_system",
        nameEN: "Corvée System",
        nameRU: "",
        icon: "../src/icons/civics/corvee-system.png",
        descrEN: "This society considers it the absolute right of the state to decide where its citizens live and work.",
        traits: [
            ["good", "+15%", "Pop growth from immigration"],
            ["empty", "", "Removes unity costs for pop resettlement"],
        ],
        exclude: [
            "civic_corvee_system",
        ],
    },
    {
        trait: "civic_distinguished_admiralty",
        nameEN: "Distinguished Admiralty",
        nameRU: "",
        icon: "../src/icons/civics/distinguished-admiralty.png",
        descrEN: "The Fleet and the Admiralty have unusually prominent roles in this society, wielding a great deal of influence in political circles. They have the pick of the litter when it comes to new military recruits.",
        traits: [
            ["good", "+2", "Admiral and General starting level"],
            ["good", "+1", "Admiral level cap"],
            ["good", "+10%", "Ship fire rate"],
            ["good", "+10", "Fleet command limit"],
        ],
    },
    {
        trait: "civic_exalted_priesthood",
        nameEN: "Exalted Priesthood",
        nameRU: "",
        icon: "../src/icons/civics/exalted-priesthood.png",
        descrEN: "To guard against heresy, this society is ruled by a religious council consisting of the wisest and most pious members of the clergy.",
        traits: [
            ["good", "+1", "Unity from Priest category jobs"],
            ["empty", "", "Capital Buildings replace some Politician jobs with High Priest jobs"],
        ],
        exclude: [
            "civic_merchant_guilds",
            "civic_aristocratic_elite",
            "civic_technocracy",
        ],
    },
    {
        trait: "civic_feudal_realm",
        nameEN: "Feudal Society",
        nameRU: "",
        icon: "../src/icons/civics/feudal-society.png",
        descrEN: "	This society is organized in a feudal manner, with a monarch whose rule relies on powerful vassals that govern their territories with considerable autonomy.",
        traits: [
            ["good", "+1", "Unity from Priest category jobs"],
            ["good", "-50%", "Leader cost"],
            ["good", "+1", "Monthly loyalty from subjects"],
            ["empty", "", "Leaders have no upkeep"],
            ["empty", "", "No loyalty loss from multiple subjects"],
            ["empty", "", "Cannot dismiss leaders"],
            ["empty", "", "Cannot use Expansion Prohibited terms of agreement"],
            ["empty", "", "Cannot use Limited Diplomacy terms of agreement"],
        ],
    },
    {
        trait: "civic_free_haven",
        nameEN: "Free Haven",
        nameRU: "",
        icon: "../src/icons/civics/free-haven.png",
        descrEN: "This society has a well-earned reputation as a free haven. The tired, the poor, the huddled masses yearning to breathe free - all are welcome here, regardless of their species or origin.",
        traits: [
            ["good", "+15%", "Pop growth from immigration"],
            ["good", "+50%", "Immigration pull"],
        ],
    },
    {
        trait: "civic_idealistic_foundation",
        nameEN: "Idealistic Foundation",
        nameRU: "",
        icon: "../src/icons/civics/idealistic-foundation.png",
        descrEN: "This society was founded on strong idealistic values. Whether the current government remains true to them or not, the people have not forgotten.",
        traits: [
            ["good", "+10%", "Citizen pop happiness"],
        ],
    },
    {
        trait: "civic_imperial_cult",
        nameEN: "Imperial Cult",
        nameRU: "",
        icon: "../src/icons/civics/imperial-cult.png",
        descrEN: "This society has a dominant state religion where the ruler is worshiped as a living deity.",
        traits: [
            ["good", "+100", "Edict fund"],
        ],
    },
    {
        trait: "civic_inwards_perfection",
        nameEN: "Inward Perfection",
        nameRU: "",
        icon: "../src/icons/civics/inwards-perfection.png",
        descrEN: "This calm and pacifist society has little use for strangers who do not understand their way of life. More than anything, they would prefer to be left alone.",
        traits: [
            ["empty", "", "Cannot be added or removed after game start"],
            ["good", "+20%", "Monthly unity"],
            ["good", "+10%", "Pop growth speed"],
            ["good", "+5%", "Citizen pop happiness"],
            ["good", "+50", "Edict fund"],
            ["good", "+1", "Encryption"],
            ["bad", "-1", "Codebreaking"],
            ["bad", "-1", "Available envoys"],
            ["empty", "", "Cannot infiltrate Pre-FTL civilizations"],
            ["empty", "", "Diplomatic restrictions"],
        ],
        exclude: [
            "civic_pompous_purists",
        ],
    },
    {
        trait: "civic_meritocracy",
        nameEN: "Meritocracy",
        nameRU: "",
        icon: "../src/icons/civics/meritocracy.png",
        descrEN: "An individual's social station or personal connections should have no bearing on their profession. The sole basis for advancement in this society is demonstrated ability and talent.",
        traits: [
            ["good", "+1", "Leader level cap"],
            ["good", "+10%", "Specialist pop resource output"],
        ],
    },
    {
        trait: "civic_nationalistic_zeal",
        nameEN: "Nationalistic Zeal",
        nameRU: "",
        icon: "../src/icons/civics/nationalistic-zeal.png",
        descrEN: "A strong sense of nationalistic pride permeates all layers of this society.",
        traits: [
            ["good", "-20%", "War exhaustion gain"],
            ["good", "-15%", "Claim influence cost"],
        ],
    },
    {
        trait: "civic_parliamentary_system",
        nameEN: "Parliamentary System",
        nameRU: "",
        icon: "../src/icons/civics/parliamentary-system.png",
        descrEN: "The parliamentary system in this society encourages a free and lively debate. Currying favor with one of the dominant political factions can prove to be quite advantageous.",
        traits: [
            ["good", "+40%", "Faction unity gain"],
            ["empty", "", "Factions will form within 3 months"],
        ],
    },
    {
        trait: "civic_philosopher_king",
        nameEN: "Philosopher King",
        nameRU: "",
        icon: "../src/icons/civics/philosopher-king.png",
        descrEN: "It is not enough to simply rule. The Ship of State must be guided by a king that wields enough wisdom and knowledge to steer it true.",
        traits: [
            ["good", "+2", "Ruler level cap"],
            ["empty", "", "Ruler and Governor leaders can't gain negative traits from leveling up"],
        ],
    },
    {
        trait: "civic_police_state",
        nameEN: "Police State",
        nameRU: "",
        icon: "../src/icons/civics/police-state.png",
        descrEN: "To quash any traces of dissent, the population in this repressive society is carefully monitored and controlled by a large internal police force.",
        traits: [
            ["good", "+5", "Stability"],
            ["good", "+1", "Unity from Enforcers and Telepaths"],
        ],
        exclude: [
            "ethic_fanatic_egalitarian",
        ],
    },
    {
        trait: "civic_shadow_council",
        nameEN: "Shadow Council",
        nameRU: "",
        icon: "../src/icons/civics/shadow-council.png",
        descrEN: "Unbeknownst to its own citizens, this society is actually manipulated from behind the scenes by a secretive shadow council. Appearances must be kept, but the tyranny of the majority should also be guarded against. After all, what if the fools vote for the wrong candidate?",
        traits: [
            ["good", "-75%", "Election Cost"],
            ["good", "+10%", "Ruler pop resource output"],
            ["good", "+1", "Codebreaking"],
        ],
    },
    {
        trait: "civic_slaver_guilds",
        nameEN: "Slaver Guilds",
        nameRU: "",
        icon: "../src/icons/civics/slaver-guilds.png",
        descrEN: "Much of the true political power in this society rests with a number of powerful and ruthless slaver guilds. They know how to get the most out of a slave.",
        traits: [
            ["good", "+10%", "Slave pop resource output"],
            ["neutral", "35%", "Enslaved pop ratio"],
        ],
        exclude: [
            "civic_pleasure_seekers",
        ],
    },
    {
        trait: "civic_technocracy",
        nameEN: "Technocracy",
        nameRU: "",
        icon: "../src/icons/civics/technocracy.png",
        descrEN: "To maximize efficiency, this society is governed according to the principles of science and rationality. The personal whims of an ignorant and dangerously unqualified political elite must not be allowed to interfere.",
        traits: [
            ["good", "+1", "Research alternatives"],
            ["empty", "", "Expertise traits have double effects on tech choices"],
            ["empty", "", "Capital Buildings replace some Politician jobs with Science Director jobs"],
        ],
        exclude: [
            "civic_merchant_guilds",
            "civic_exalted_priesthood",
            "civic_aristocratic_elite",
            "civic_shared_burden",
        ],
    },
    {
        trait: "civic_warrior_culture",
        nameEN: "Warrior Culture",
        nameRU: "",
        icon: "../src/icons/civics/warrior-culture.png",
        descrEN: "This society has developed into a hardy warrior culture. Martial prowess is valued above all else, and true glory can only be found on the field of battle.",
        traits: [
            ["empty", "", "Replaces Entertainer jobs with Duelist jobs"],
            ["good", "+20%", "Army damage"],
            ["good", "+1", "Mercenary Enclave capacity"],
        ],
        exclude: [
            "civic_pleasure_seekers",
        ],
    },
    {
        trait: "civic_catalytic_processing",
        nameEN: "Catalytic Processing",
        nameRU: "",
        icon: "../src/icons/civics/catalytic-processing.png",
        descrEN: "By focusing their industrial efforts into catalytic chemistry, this civilization has unlocked the key to using organic materials in the construction of spacebound structures.",
        traits: [
            ["empty", "", "Replaces Metallurgist jobs with Catalytic Technician jobs"],
        ],
    },
    {
        trait: "civic_idyllic_bloom",
        nameEN: "Idyllic Bloom",
        nameRU: "",
        icon: "../src/icons/civics/idyllic-bloom.png",
        descrEN: "This society has always spent much time on improving and caring for their environment, in pursuit of building a true paradise for its inhabitants.",
        traits: [
            ["empty", "", "Cannot be added or removed after game start"],
            ["empty", "", "Can construct and upgrade Gaia Seeders buildings"],
            ["empty", "", "Can construct Gaia Seeder Outpost holdings"],
            ["empty", "", "Start with a Gaia Seeders - Phase 1 building"],
            ["empty", "", "Disabled by synthetic ascension special project"],
        ],
        exclude: [
            "civic_relentless_industrialists",
        ],
    },
    {
        trait: "civic_ascensionists",
        nameEN: "Ascensionists",
        nameRU: "",
        icon: "../src/icons/civics/ascensionists.png",
        descrEN: "The ultimate goal of this empire is to ascend to ever greater levels of fulfillment.",
        traits: [
            ["good", "+25%", "Planetary ascension effects"],
            ["good", "-10%", "Planetary ascension cost"],
            ["good", "-25%", "Tradition cost from empire size"],
        ],
    },
    {
        trait: "civic_fanatic_purifiers",
        nameEN: "Fanatic Purifiers",
        nameRU: "",
        icon: "../src/icons/civics/fanatic-purifiers.png",
        descrEN: "This society appears hellbent on scouring the galaxy of all other sapient life. Come what may, they will suffer no xenos to live",
        traits: [
            ["empty", "", "Cannot be added or removed after game start"],
            ["good", "+33%", "Fire rate"],
            ["good", "+33%", "Army damage"],
            ["good", "+33%", "Naval capacity"],
            ["good", "-15%", "Ship cost"],
            ["empty", "", "Genocidal"],
        ],
        exclude: [
            "civic_barbaric_despoilers",
            "civic_pompous_purists",
        ],
    },
    {
        trait: "civic_crafters",
        nameEN: "Masterful Crafters",
        nameRU: "",
        icon: "../src/icons/civics/crafters.png",
        descrEN: "A penchant for meticulous crafting lies at the heart of this society. Deft appendages and keen sensory organs aid them in creating truly wondrous treasures even in the most basic of trades.",
        traits: [
            ["empty", "", "Replaces Artisan jobs with Artificer jobs"],
            ["good", "+1", "Building slot per 3 Industrial districts (except on Habitats)"],
        ],
    },
    {
        trait: "civic_pleasure_seekers",
        nameEN: "Pleasure Seekers",
        nameRU: "",
        icon: "../src/icons/civics/pleasure-seekers.png",
        descrEN: "This society rejoices in its own perfection. Those who are elevated by their privileged social structure have surrendered to a culture which glorifies pleasure and entertainment, regardless of a cost typically borne by others.",
        traits: [
            ["empty", "", "Can use the Decadent Lifestyle living standard"],
            ["good", "+1%", "Pop growth speed from Entertainers"],
            ["good", "+5", "Amenities from Servants"],
        ],
        exclude: [
            "civic_warrior_culture",
            "civic_shared_burden",
            "civic_slaver_guilds",
        ],
    },
    {
        trait: "civic_pompous_purists",
        nameEN: "Pompous Purists",
        nameRU: "",
        icon: "../src/icons/civics/pompous-purists.png",
        descrEN: "A society so utterly convinced of their own superiority, that any attempt at diplomacy not initated by themselves will be utterly ignored.",
        traits: [
            ["good", "+30%", "Trust growth"],
            ["good", "+2", "Available envoys"],
            ["empty", "", "Can send but cannot receive diplomatic propositions"],
        ],
        exclude: [
            "civic_fanatic_purifiers",
            "civic_inwards_perfection",
        ],
    },
    {
        trait: "civic_barbaric_despoilers",
        nameEN: "Barbaric Despoilers",
        nameRU: "",
        icon: "../src/icons/civics/barbaric-despoilers.png",
        descrEN: "This society holds few things sacred. To fight is to live, and the strongest may seize whatever they covet.",
        traits: [
            ["empty", "", "Cannot be added or removed after game start"],
            ["good", "+1", "Mercenary Enclave capacity"],
            ["empty", "", "Can use the Despoliation casus belli"],
            ["empty", "", "Can use the Raiding orbital bombardment stance"],
            ["empty", "", "Cannot form Migration Treaties"],
            ["empty", "", "Can only create Martial Alliance and Hegemony federations"],
        ],
        exclude: [
            "ethic_xenophile",
            "ethic_fanatic_xenophile",
            "civic_fanatic_purifiers",
        ],
    },
    {
        trait: "civic_byzantine_bureaucracy",
        nameEN: "Byzantine Bureaucracy",
        nameRU: "",
        icon: "../src/icons/civics/byzantine-bureaucracy.png",
        descrEN: "This society is largely governed by a complex and, to the outsider, almost labyrinthine system of bureaucracy. An army of officials and functionaries work tirelessly to keep the government running smoothly and ensure no citizens are allocated resources they cannot demonstrate a properly filed and triple-stamped need for.",
        traits: [
            ["good", "+1", "Unity from Administrator category jobs"],
            ["good", "+1", "Stability from Bureaucrat jobs"],
        ],
        exclude: [
            "ethic_spiritualist",
            "ethic_fanatic_spiritualist",
        ],
    },
    {
        trait: "civic_merchant_guilds",
        nameEN: "Merchant Guilds",
        nameRU: "",
        icon: "../src/icons/civics/merchant-guilds.png",
        descrEN: "A number of powerful and very influential merchant guilds have risen to prominent positions in this society. They hold significant sway with the government.",
        traits: [
            ["empty", "", "Capital Buildings replace some Politician jobs with Merchant jobs"],
            ["empty", "", "Can use the Mercantile Diplomatic Stance (unless also Inward Perfection)"],
        ],
        exclude: [
            "civic_exalted_priesthood",
            "civic_aristocratic_elite",
            "civic_technocracy",
        ],
    },
    {
        trait: "civic_shared_burden",
        nameEN: "Shared Burdens",
        nameRU: "",
        icon: "../src/icons/civics/shared-burden.png",
        descrEN: "This society believes in an equitable distribution of resources, making little to no distinction between the needs of ruler and ruled. All work together for the benefit of the whole.",
        traits: [
            ["empty", "", "Can use the Shared Burden living standard"],
            ["empty", "", "Cannot use other Living Standards except Utopian Abundance and Chemical Bliss"],
            ["good", "+5", "Stability"],
            ["good", "-45%", "Pop Demotion Time"],
            ["empty", "", "Can build Communal Housing and Utopian Communal Housing buildings"],
            ["empty", "", "Can construct Communal Housing Outreach holdings"],
            ["empty", "", "Doubles unity from Progressive faction"],
        ],
        exclude: [
            "ethic_xenophobe",
            "ethic_fanatic_xenophobe",
            "civic_technocracy",
            "civic_pleasure_seekers",
        ],
    },
    {
        trait: "civic_diplomatic_corps",
        nameEN: "Diplomatic Corps",
        nameRU: "",
        icon: "../src/icons/civics/diplomatic-corps.png",
        descrEN: "This society has a long tradition of rhetoric and debate and celebrate those who are able to get their way using only words.",
        traits: [
            ["good", "+2", "Available envoys"],
            ["good", "+10%", "Diplomatic weight"],
        ],
        exclude: [
            "civic_fanatic_purifiers",
            "civic_inwards_perfection",
        ]
    },
    {
        trait: "civic_death_cult",
        nameEN: "Death Cult",
        nameRU: "",
        icon: "../src/icons/civics/death-cult.png",
        descrEN: "This society's religion is built around periodic, ritual sacrifices. Willing initiates devote themselves to a decade of study before meeting an end whose effects ripple throughtout their culture.",
        traits: [
            ["empty", "", "Can construct Sacrificial Temple buildings"],
            ["empty", "", "Can construct Sacrificial Shrine holdings"],
            ["empty", "", "Can use Sacrifice edicts"],
        ],
        exclude: [
            "civic_fanatic_purifiers",
            "civic_inwards_perfection",
            "civic_ancient_preservers",
        ],
    },
    {
        trait: "civic_memorialist",
        nameEN: "Memorialists",
        nameRU: "",
        icon: "../src/icons/civics/memorialist.png",
        descrEN: "This empire pays tribute to memories and sapients of the past, deriving greater stability and insight from the continuous cycles of death, rebirth and legacy.",
        traits: [
            ["empty", "", "Autochthon Monument buildings are replaced by Sanctuary of Repose buildings"],
            ["empty", "", "Gain additional Unity from Leviathan Parade Opportunity situations"],
        ],
        exclude: [
            "civic_fanatic_purifiers",
            "civic_relentless_industrialists",
        ],
    },
    {
        trait: "civic_reanimated_armies",
        nameEN: "Reanimators",
        nameRU: "",
        icon: "../src/icons/civics/reanimated-armies.png",
        descrEN: "Within this society, death is no bar to the call of arms. Masters of the art of necromancy reanimate deceased corpses to raise a dread host that strikes fear into the hearts of lesser mortals.",
        traits: [
            ["empty", "", "Military Academy buildings are replaced by Dread Encampment buildings"],
            ["empty", "", "33% chance to gain an Undead Army per killed army"],
            ["empty", "", "Defeated organic guardians can be resurrected"],
        ],
        exclude: [
            "ethic_pacifist",
            "ethic_fanatic_pacifist",
            "civic_citizen_service",
        ],
    },
    {
        trait: "civic_anglers",
        nameEN: "Anglers",
        nameRU: "",
        icon: "../src/icons/civics/anglers.png",
        descrEN: "Adept at utilizing nature's bounty, this society provides for itself a stable influx of sustenance and economic value.",
        traits: [
            ["empty", "", "Cannot be added or removed after game start"],
            ["empty", "", "Main species must have the Aquatic trait"],
            ["empty", "", "No Agriculture district limit on Ocean Worlds"],
            ["empty", "", "Replaces Farmer jobs with an Angler job on wet climates"],
            ["empty", "", "Agriculture districts create Pearl Diver jobs on wet climates"],
            ["good", "-50", "Agriculture district minerals cost on wet climates"],
        ],
    },
    {
        trait: "civic_toxic_baths",
        nameEN: "Mutagenic Spas",
        nameRU: "",
        icon: "../src/icons/civics/mutagenic-spas.png",
        descrEN: "This civilization engages in ritualistic mutagenic bathing, with professional attendants overseeing the use of highly dangerous substances. This 'invigorating' process may appall uninitiated onlookers.",
        traits: [
            ["empty", "", "Can construct Mutagenic Spa buildings"],
        ],
    },
    {
        trait: "civic_relentless_industrialists",
        nameEN: "Relentless Industrialists",
        nameRU: "",
        icon: "../src/icons/civics/relentless-industrialists.png",
        descrEN: "To live is to exploit. This civilization is built around the principle of living life to the fullest, in the sense of squeezing the maximum profit from every last ounce of matter and membrane available for exploitation.",
        traits: [
            ["empty", "", "Can construct Coordinated Fulfillment Center buildings"],
            ["empty", "", "Start with a Coordinated Fulfillment Center building"],
            ["empty", "", "First time a world is polluted triggers the Environmental Deterioration situation"],
        ],
        exclude: [
            "civic_environmentalist",
            "civic_agrarian_idyll",
            "civic_idyllic_bloom",
            "civic_memorialist",
        ]
    },
    {
        trait: "civic_scavengers",
        nameEN: "Scavengers",
        nameRU: "",
        icon: "../src/icons/civics/scavengers.png",
        descrEN: "In this society, nothing goes to waste, even in the grimmest times of war: no enemy technology will go undiscovered, as teams of scrappers accompanying the war fleets scrape wreckages of anything and everything worth salvaging.",
        traits: [
            ["empty", "", " Enables the Research & Salvage Debris debris policy"],
            ["good", "10%", "chance per ship debris to create a ship of equal size"],
            ["good", "+10", "Opinion with the Salvagers enclave"],
        ],
    },
];
export { civicsStandart };
