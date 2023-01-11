const civicsHiveMind = [
    {
        trait: "civic_hive_ascetic",
        nameEN: "Ascetic",
        nameRU: "",
        icon: "../src/icons/civics/ascetic.png",
        descrEN: "The Hive Mind cares little for material comforts.",
        traits: [
            ["good", "+5%", "Habitability"],
            ["good", "-15%", "Pop amenities usage"],
        ],
    },
    {
        trait: "civic_hive_divided_attention",
        nameEN: "Divided Attention",
        nameRU: "",
        icon: "../src/icons/civics/divided-attention.png",
        descrEN: "The Hive Mind can divide its attention for maximum efficiency without losing sight of the bigger picture.",
        traits: [
            ["good", "-50%", "Empire size from planets"],
        ],
    },
    {
        trait: "civic_hive_ascensionists",
        nameEN: "Elevational Contemplations",
        nameRU: "",
        icon: "../src/icons/civics/ascensionists-hive-mind.png",
        descrEN: "The Hive Mind is particularly concerned with the metaphysical health of its being, and continually seeks means of self-improvement.",
        traits: [
            ["good", "+25%", "Planetary ascension effects"],
            ["good", "-10%", "Planetary ascension cost"],
            ["good", "-25%", "Tradition cost from empire size"],
        ],
    },
    {
        trait: "civic_hive_natural_neural_network",
        nameEN: "Natural Neural Network",
        nameRU: "",
        icon: "../src/icons/civics/natural-neural-network.png",
        descrEN: "The gray matter of clustered drones provides unparalleled parallelism, accelerating the Hive Mind's exploration of the sciences.",
        traits: [
            ["good", "+1", "Research alternatives"],
            ["good", "+1", "Research from unemployed drones"],
            ["good", "+1.5", "Research from unemployed drones"],
            ["good", "+1", "Research from unemployed drones"],
        ],
    },
    {
        trait: "civic_hive_one_mind",
        nameEN: "One Mind",
        nameRU: "",
        icon: "../src/icons/civics/one-mind.png",
        descrEN: "The Hive Mind takes care to not let its drones diverge.",
        traits: [
            ["good", "+15%", "Monthly unity"],
            ["empty", "", "Leaders are less likely to gain negative traits"],
        ],
    },
    {
        trait: "civic_hive_pooled_knowledge",
        nameEN: "Pooled Knowledge",
        nameRU: "",
        icon: "../src/icons/civics/pooled-knowledge.png",
        descrEN: "The Hive Minds' autonomous drones frequently share knowledge through direct links, bypassing the Hive Mind's slower registry processes.",
        traits: [
            ["good", "+1", "Leader Level Cap"],
            ["good", "+10%", "Leader Experience Gain"],
            ["good", "+1", "Encryption"],
        ],
    },
    {
        trait: "civic_hive_strength_of_legions",
        nameEN: "Strength of Legions",
        nameRU: "",
        icon: "../src/icons/civics/strength-of-legions.png",
        descrEN: "When you do not have to educate the mind, the building of muscle becomes that much easier.",
        traits: [
            ["good", "+20%", "Army damage"],
            ["good", "-20%", "Army upkeep"],
            ["good", "+100", "Army starting experience"],
            ["good", "+2", "Admiral and General starting level"],
        ],
    },
    {
        trait: "civic_hive_subspace_ephapse",
        nameEN: "Subspace Ephapse",
        nameRU: "",
        icon: "../src/icons/civics/subspace-ephapse.png",
        descrEN: "	The Hive Mind's cognitive processes exist partially in subspace, reducing the impact of time and space on the actuation of its drones.",
        traits: [
            ["good", "+15%", "Naval capacity"],
            ["good", "+20%", "Sublight speed"],
        ],
    },
    {
        trait: "civic_hive_subsumed_will",
        nameEN: "Subsumed Will",
        nameRU: "",
        icon: "../src/icons/civics/subsumed-will.png",
        descrEN: "The Hive Mind has sharpened its focus and is very capable of propagating its will even through the most autonomous of drones.",
        traits: [
            ["good", "-20%", "Empire size from Pops"],
            ["good", "+25", "Edict fund"],
            ["empty", "", "Removes unity costs for pop resettlement"],
        ],
    },
    {
        trait: "civic_hive_devouring_swarm",
        nameEN: "Devouring Swarm",
        nameRU: "",
        icon: "../src/icons/civics/devouring-swarm.png",
        descrEN: "Our Hive Mind exist only to consume and grow stronger. We will collect all available bio-matter and evolve to consume the galaxy!",
        traits: [
            ["empty", "", "Cannot be added or removed after game start"],
            ["good", "+25%", "Ship hull points"],
            ["good", "+0.25%", "Daily hull and armor regeneration"],
            ["good", "-50%", "Starbase influence cost"],
            ["good", "+40%", "Army damage"],
            ["good", "+20%", "Biology research speed"],
            ["good", "-25%", "Ship cost"],
            ["good", "+33%", "Naval capacity"],
            ["good", "+200", "Food when clearing Dangerous Wildlife blockers"],
            ["empty", "", "Genocidal"],
        ],
        exclude: [
            "civic_hive_devouring_swarm_lithoid",
        ],
    },
    {
        trait: "civic_hive_idyllic_bloom",
        nameEN: "Idyllic Bloom",
        nameRU: "",
        icon: "../src/icons/civics/idyllic-bloom-1hive-mind.png",
        descrEN: "The Hive Mind cares for the environment, building a paradise in pursuit of synergistic perfection.",
        traits: [
            ["empty", "", "Cannot be added or removed after game start"],
            ["empty", "", "Can construct and upgrade Gaia Seeders buildings"],
            ["empty", "", "Can construct Gaia Seeder Outpost holdings"],
            ["empty", "", "Start with a Gaia Seeders - Phase 1 building"],
        ],
    },
    {
        trait: "civic_hive_catalytic_processing",
        nameEN: "Organic Reprocessing",
        nameRU: "",
        icon: "../src/icons/civics/catalytic-processing-hive-mind.png",
        descrEN: "The Hive Mind reprocesses excess organic matter into advanced resources suitable for spacebound structures.",
        traits: [
            ["empty", "", "Replaces Foundry Drone jobs with Catalytic Drone jobs"],
        ],
    },
    {
        trait: "civic_hive_devouring_swarm_lithoid",
        nameEN: "Terravore",
        nameRU: "",
        icon: "../src/icons/civics/devouring-swarm.png",
        descrEN: "Our Hive Mind exist only to consume and grow stronger. We will devour the very worlds of the galaxy!",
        traits: [
            ["empty", "", "Cannot be added or removed after game start"],
            ["good", "+25%", "Ship hull points"],
            ["good", "+0.25%", "Daily hull and armor regeneration"],
            ["good", "-50%", "Starbase Influence cost"],
            ["good", "+40%", "Army damage"],
            ["good", "+20%", "Biology research speed"],
            ["good", "-25%", "Ship cost"],
            ["good", "+33%", "Naval capacity"],
            ["good", "", "Cannot terraform planets"],
            ["good", "", "Can use the Consume World decision"],
            ["good", "", "Genocidal"],
        ],
        exclude: [
            "civic_hive_devouring_swarm",
        ],
    },
    {
        trait: "civic_hive_empath",
        nameEN: "Empath",
        nameRU: "",
        icon: "../src/icons/civics/empath.png",
        descrEN: "The Hive Mind can reach out and touch the minds of others, giving them a glimpse of our will that helps them understand.",
        traits: [
            ["good", "+2", "Available envoys"],
            ["good", "+10%", "Diplomatic weigh"],
            ["good", "+20", "Opinion with individualist empires"],
        ],
        exclude: [
            "civic_hive_devouring_swarm",
            "civic_hive_devouring_swarm_lithoid",
        ],
    },
    {
        trait: "civic_hive_cordyceptic_drones",
        nameEN: "Cordyceptic Drones",
        nameRU: "",
        icon: "../src/icons/civics/cordyceptic-drones.png",
        descrEN: "	Highly specialized drones capable of infecting simple hosts and issuing rudimentary commands make up the backbone of this hive's stellar defense.",
        traits: [
            ["good", "+50%", "Space fauna weapon damage"],
            ["good", "+50%", "Space fauna weapon attack speed"],
            ["empty", "", "Starting corvettes are replaced with Space Amoebas"],
            ["empty", "", "Can construct Cordyceptic Reanimation Facility starbase buildings"],
            ["empty", "", "Defeated space fauna is resurrected"],
            ["empty", "", "Defeated organic guardians can be resurrected"],
        ],
    },
    {
        trait: "civic_hive_memorialist",
        nameEN: "Memorialist",
        nameRU: "",
        icon: "../src/icons/civics/memorialist-hive-mind.png",
        descrEN: "The Hive Mind pays special regard to the passing of other sapient entities as a means of centering its own, undying self.",
        traits: [
            ["empty", "", "Sensorium Site buildings are replaced by Sanctuary of Repose buildings"],
            ["empty", "", "Gain additional Unity from Leviathan Parade Opportunity situations"],
        ],
    },
    {
        trait: "civic_hive_toxic_baths",
        nameEN: "Permutation Pools",
        nameRU: "",
        icon: "../src/icons/civics/mutagenic-spas-hive-mind.png",
        descrEN: "	This hive mind utilizes mutagenic birthing pools, with specialized attendants overseeing the growth of newly spawned drones. This process is highly intrusive for the local environment.",
        traits: [
            ["empty", "", "Can construct Mutagenic Permutation Pool buildings"],
        ],
    },
];
export { civicsHiveMind };
