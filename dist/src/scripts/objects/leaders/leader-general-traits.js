const leaderGeneralBiological = [
    {
        trait: "leader_trait_general_psionic",
        icon: "../src/icons/leader-traits/psionic.png",
        nameEN: "Psychic",
        nameRU: "",
        traits: [
            ["good", "+15%", "Army Morale",],
            ["good", "+15%", "Army Morale Damage",],
        ],
        exclude: [
            "leader_trait_general_chosen",
            "leader_trait_general_composer_chosen",
            "leader_trait_general_eater_chosen",
            "leader_trait_general_whisperers_chosen",
            "leader_trait_general_cyborg",
            "leader_trait_general_synthetic",
            "leader_trait_hive_mind",
        ],
    },
    {
        trait: "leader_trait_general_chosen",
        icon: "../src/icons/leader-traits/chosen-one.png",
        nameEN: "Chosen One",
        nameRU: "",
        traits: [
            ["empty", "", "Immortal",],
            ["good", "+20%", "Army damage",],
            ["good", "+30%", "Army Morale",],
            ["good", "+30%", "Army Morale Damage",],
        ],
        exclude: [
            "leader_trait_general_psionic",
            "leader_trait_general_composer_chosen",
            "leader_trait_general_eater_chosen",
            "leader_trait_general_whisperers_chosen",
            "leader_trait_general_cyborg",
            "leader_trait_general_synthetic",
            "leader_trait_hive_mind",
        ],
    },
    {
        trait: "leader_trait_general_composer_chosen",
        icon: "../src/icons/leader-traits/chosen-composer.png",
        nameEN: "Chosen of the Composer",
        nameRU: "",
        traits: [
            ["empty", "", "Immortal",],
            ["good", "+10%", "Army damage",],
            ["good", "+50%", "Army health",],
        ],
        exclude: [
            "leader_trait_general_psionic",
            "leader_trait_general_chosen",
            "leader_trait_general_eater_chosen",
            "leader_trait_general_whisperers_chosen",
            "leader_trait_general_cyborg",
            "leader_trait_general_synthetic",
            "leader_trait_hive_mind",
        ],
    },
    {
        trait: "leader_trait_general_eater_chosen",
        icon: "../src/icons/leader-traits/chosen-eater.png",
        nameEN: "Chosen of the Eater",
        nameRU: "",
        traits: [
            ["empty", "", "Immortal",],
            ["good", "+30%", "Army damage",],
            ["good", "+50%", "Army Morale",],
            ["good", "+50%", "Army Morale Damage",],
        ],
        exclude: [
            "leader_trait_general_psionic",
            "leader_trait_general_chosen",
            "leader_trait_general_composer_chosen",
            "leader_trait_general_whisperers_chosen",
            "leader_trait_general_cyborg",
            "leader_trait_general_synthetic",
            "leader_trait_hive_mind",
        ],
    },
    {
        trait: "leader_trait_general_whisperers_chosen",
        icon: "../src/icons/leader-traits/chosen-whisperers.png",
        nameEN: "Chosen of the Whisperers",
        nameRU: "",
        traits: [
            ["empty", "", "Immortal",],
            ["good", "+20%", "Army damage",],
            ["good", "+30%", "Army disengagement chance",],
        ],
        exclude: [
            "leader_trait_general_psionic",
            "leader_trait_general_chosen",
            "leader_trait_general_composer_chosen",
            "leader_trait_general_eater_chosen",
            "leader_trait_general_cyborg",
            "leader_trait_general_synthetic",
            "leader_trait_hive_mind",
        ],
    },
    {
        trait: "leader_trait_general_cyborg",
        icon: "../src/icons/leader-traits/cyborg.png",
        nameEN: "Cyborg",
        nameRU: "",
        traits: [
            ["good", "+10%", "Army damage",],
        ],
        exclude: [
            "leader_trait_general_psionic",
            "leader_trait_general_chosen",
            "leader_trait_general_composer_chosen",
            "leader_trait_general_eater_chosen",
            "leader_trait_general_whisperers_chosen",
            "leader_trait_general_synthetic",
            "leader_trait_hive_mind",
        ],
    },
    {
        trait: "leader_trait_general_erudite",
        icon: "../src/icons/leader-traits/erudite.png",
        nameEN: "Erudite",
        nameRU: "",
        traits: [
            ["good", "+5%", "Army damage",],
            ["good", "+10%", "Army disengagement chance",],
        ],
    },
    {
        trait: "leader_trait_general_brainslug",
        icon: "../src/icons/leader-traits/brain-slug.png",
        nameEN: "Brain Slug Host",
        nameRU: "",
        traits: [
            ["good", "-15%", "Army Upkeep",],
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
        trait: "leader_trait_army_logistician",
        icon: "../src/icons/leader-traits/general-army-logistician.png",
        nameEN: "Army Logistician",
        nameRU: "",
        traits: [
            ["good", "-20%", "Army upkeep",],
        ],
    },
    {
        trait: "leader_trait_butcher",
        icon: "../src/icons/leader-traits/general-butcher.png",
        nameEN: "Butcher",
        nameRU: "",
        traits: [
            ["good", "+10%", "Army damage",],
            ["neutral", "+33%", "Army collateral damage",],
        ],
        exclude: [
            "leader_trait_armchair_commander",
            "leader_trait_restrained",
        ],
    },
    {
        trait: "leader_trait_restrained",
        icon: "../src/icons/leader-traits/general-restrained.png",
        nameEN: "Restrained",
        nameRU: "",
        traits: [
            ["good", "+20%", "Army disengagement chance",],
            ["neutral", "-33%", "Army collateral damage",],
        ],
        exclude: [
            "leader_trait_butcher"
        ],
    },
    {
        trait: "leader_trait_charismatic",
        icon: "../src/icons/leader-traits/general-charismatic.png",
        nameEN: "Charismatic",
        nameRU: "",
        traits: [
            ["good", "+25%", "Army morale",],
        ],
    },
    {
        trait: "leader_trait_glory_seeker",
        icon: "../src/icons/leader-traits/general-glory-seeker.png",
        nameEN: "Glory Seeker",
        nameRU: "",
        traits: [
            ["good", "+10%", "Army morale",],
            ["good", "+5%", "Army damage",],
        ],
        exclude: [
            "leader_trait_armchair_commander",
        ],
    },
    {
        trait: "leader_trait_armchair_commander",
        icon: "../src/icons/leader-traits/general-armchair-commander.png",
        nameEN: "Armchair Commander",
        nameRU: "",
        traits: [
            ["bad", "-10%", "Army morale",],
            ["bad", "-10%", "Army damage",],
        ],
        exclude: [
            "leader_trait_glory_seeker",
            "leader_trait_butcher",
        ],
    },
    {
        trait: "leader_trait_general_mercenary_warrior",
        icon: "../src/icons/leader-traits/general-mercanary-warrior.png",
        nameEN: "Mercenary Warrior",
        nameRU: "",
        traits: [
            ["good", "+10%", "Army damage",],
        ],
    },
];
const leaderGeneralSynthitic = [
    {
        trait: "leader_trait_general_synthetic",
        icon: "../src/icons/leader-traits/synthetic.png",
        nameEN: "Synthetic",
        nameRU: "",
        traits: [
            ["good", "+5%", "Army damage",],
            ["neutral", "+10%", "Army collateral damage",],
        ],
    },
    {
        trait: "leader_trait_flexible_programming",
        icon: "../src/icons/leader-traits/flexible-programming.png",
        nameEN: "Flexible Programming",
        nameRU: "",
        traits: [
            ["good", "+25%", "Leader experience gain",],
        ],
        exclude: [
            "leader_trait_rigid_programming",
        ],
    },
    {
        trait: "leader_trait_rigid_programming",
        icon: "../src/icons/leader-traits/rigid-programming.png",
        nameEN: "Flexible Programming",
        nameRU: "",
        traits: [
            ["good", "-25%", "Leader experience gain",],
        ],
        exclude: [
            "leader_trait_flexible_programming",
        ],
    },
    {
        trait: "leader_trait_newboot",
        icon: "../src/icons/leader-traits/newboot.png",
        nameEN: "Newboot",
        nameRU: "",
        traits: [
            ["good", "-50%", "Leader cost",],
            ["good", "-50%", "Leader upkeep",],
        ],
    },
    {
        trait: "leader_trait_parts_cannibalizer",
        icon: "../src/icons/leader-traits/general-parts-cannibalizer.png",
        nameEN: "Parts Cannibalizer",
        nameRU: "",
        traits: [
            ["good", "-20%", "Army upkeep",],
        ],
    },
    {
        trait: "leader_trait_butcher",
        icon: "../src/icons/leader-traits/general-butcher.png",
        nameEN: "Butcher",
        nameRU: "",
        traits: [
            ["good", "+10%", "Army damage",],
            ["neutral", "+33%", "Army collateral damage",],
        ],
        exclude: [
            "leader_trait_armchair_commander",
            "leader_trait_restrained",
        ],
    },
    {
        trait: "leader_trait_demoralizer",
        icon: "../src/icons/leader-traits/general-demoralizer.png",
        nameEN: "Demoralizer",
        nameRU: "",
        traits: [
            ["good", "+30%", "Army morale damage",],
        ],
        exclude: [
            "leader_trait_erratic_morality_core",
        ],
    },
    {
        trait: "leader_trait_erratic_morality_core",
        icon: "../src/icons/leader-traits/general-erratic-morality-core.png",
        nameEN: "Armchair Commander",
        nameRU: "",
        traits: [
            ["bad", "-10%", "Army damage",],
        ],
        exclude: [
            "leader_trait_demoralizer",
        ],
    },
    {
        trait: "leader_trait_general_mercenary_warrior",
        icon: "../src/icons/leader-traits/general-mercanary-warrior.png",
        nameEN: "Mercenary Warrior",
        nameRU: "",
        traits: [
            ["good", "+10%", "Army damage",],
        ],
    },
];
export { leaderGeneralBiological, leaderGeneralSynthitic, };
