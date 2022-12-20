const species = [
    {
        trait: "Synthitic",
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
        trait: "HiveMind",
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
        trait: "Biological",
        nameEN: "Not Hive-Minded",
        nameRU: "",
        icon: "../src/icons/species/not-hive-mind.png",
        traits: [
            ["empty", "", "Additional Traits are Available"]
        ]
    }
];
const leaders = [
    {
        trait: "trait_machine_unit",
        nameEN: "Ruler",
        nameRU: "",
        icon: "../src/icons/ruler.png",
        traits: [
            ["empty", "", "Not affected by Happiness"],
            ["good", "+200%", "Habitability"],
            ["good", "Immortal", "Leaders"]
        ]
    },
    {
        trait: "trait_machine_unit",
        nameEN: "Governor",
        nameRU: "",
        icon: "../src/icons/governor.png",
        traits: [
            ["empty", "", "Not affected by Happiness"],
            ["good", "+200%", "Habitability"],
            ["good", "Immortal", "Leaders"]
        ]
    },
    {
        trait: "trait_machine_unit",
        nameEN: "Scientist",
        nameRU: "",
        icon: "../src/icons/scientist.png",
        traits: [
            ["empty", "", "Not affected by Happiness"],
            ["good", "+200%", "Habitability"],
            ["good", "Immortal", "Leaders"]
        ]
    },
    {
        trait: "trait_machine_unit",
        nameEN: "Admiral",
        nameRU: "",
        icon: "../src/icons/admiral.png",
        traits: [
            ["empty", "", "Not affected by Happiness"],
            ["good", "+200%", "Habitability"],
            ["good", "Immortal", "Leaders"]
        ]
    },
    {
        trait: "trait_machine_unit",
        nameEN: "General",
        nameRU: "",
        icon: "../src/icons/general.png",
        traits: [
            ["empty", "", "Not affected by Happiness"],
            ["good", "+200%", "Habitability"],
            ["good", "Immortal", "Leaders"]
        ]
    },
];
export { species, leaders, };
