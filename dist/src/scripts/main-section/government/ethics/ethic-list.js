const ethics = [
    {
        trait: "ethic_fanatic_spiritualist",
        nameEN: "Fanatic Spiritualist",
        nameRU: "",
        icon: "../src/icons/ethics/fanatic-spiritualist.png",
        descrEN: "Our science has proved that Consciousness begets reality. We regard with patience the childlike efforts of those who delude themselves it is the other way around, as they play with their blocks of 'hard matter'.",
        traits: [
            ["good", "+20%", "Monthly unity"],
            ["good", "-20%", "Edict cost and upkeep"],
            ["empty", "", "Can use the Veneration of Saints edict"],
            ["empty", "", "Can build Temple buildings"],
            ["empty", "", "Cannot use Citizen Rights AI policy"],
        ],
        exclude: [
            "ethic_spiritualist",
            "ethic_gestalt_consciousness",
            "ethic_fanatic_materialist",
            "ethic_materialist",
        ],
    },
    {
        trait: "ethic_spiritualist",
        nameEN: "Spiritualist",
        nameRU: "",
        icon: "../src/icons/ethics/spiritualist.png",
        descrEN: "There are those think it behooves us to remember how tiny we are, how pointless our lives in this vast uncaring universe... What nonsense! The only truth we can ever know is that of our own existence. The universe - in all its apparent glory - is but a dream we all happen to share.",
        traits: [
            ["good", "+10%", "Monthly unity"],
            ["good", "-10%", "Edict cost and upkeep"],
            ["empty", "", "Can use the Veneration of Saints edict"],
            ["empty", "", "Can build Temple buildings"],
            ["empty", "", "Cannot use Citizen Rights AI policy"],
        ],
        exclude: [
            "ethic_fanatic_spiritualist",
            "ethic_gestalt_consciousness",
            "ethic_fanatic_materialist",
            "ethic_materialist",
        ],
    },
    {
        trait: "ethic_fanatic_militarist",
        nameEN: "Fanatic Militarist",
        nameRU: "",
        icon: "../src/icons/ethics/fanatic-militarist.png",
        traits: [
            ["good", "-20%", "Claim influence cost"],
            ["good", "+20%", "Ship fire rate"],
            ["empty", "", "Can use the No Retreat War Doctrine"],
            ["empty", "", "Cannot use Defensive Wars policy"],
        ],
        exclude: [
            "ethic_militarist",
            "ethic_gestalt_consciousness",
            "ethic_fanatic_pacifist",
            "ethic_pacifist",
        ],
    },
    {
        trait: "ethic_militarist",
        nameEN: "Militarist",
        nameRU: "",
        icon: "../src/icons/ethics/militarist.png",
        traits: [
            ["good", "-10%", "Claim influence cost"],
            ["good", "+10%", "Ship fire rate"],
            ["empty", "", "Can use the No Retreat War Doctrine"],
        ],
        exclude: [
            "ethic_fanatic_militarist",
            "ethic_gestalt_consciousness",
            "ethic_fanatic_pacifist",
            "ethic_pacifist",
        ],
    },
    {
        trait: "ethic_fanatic_xenophobe",
        nameEN: "Fanatic Xenophobe",
        nameRU: "",
        icon: "../src/icons/ethics/fanatic-xenophobe.png",
        traits: [
            ["good", "-40%", "Starbase influence cost"],
            ["good", "+20%", "Pop growth speed"],
            ["empty", "", "Can use the Fear Campaign edic"],
            ["empty", "", "Can Purge and Displace aliens"],
            ["empty", "", "Can enslave aliens"],
            ["empty", "", "Can use Livestock slavery"],
            ["empty", "", "Decreased Opinion with alien empires"],
            ["empty", "", "Cannot grant aliens Full Citizenship"],
            ["empty", "", "Cannot grant aliens Full Military Service"],
            ["empty", "", "Cannot use Refugees Welcome species policy"],
            ["empty", "", "Cannot use Proactive first contact stance"],
        ],
        exclude: [
            "ethic_xenophobe",
            "ethic_gestalt_consciousness",
            "ethic_fanatic_xenophile",
            "ethic_xenophile",
        ],
    },
    {
        trait: "ethic_xenophobe",
        nameEN: "Xenophobe",
        nameRU: "",
        icon: "../src/icons/ethics/xenophobe.png",
        traits: [
            ["good", "-20%", "Starbase influence cost"],
            ["good", "+10%", "Pop growth speed"],
            ["empty", "", "Can use the Fear Campaign edic"],
            ["empty", "", "Can Purge and Displace aliens"],
            ["empty", "", "Can enslave aliens"],
            ["empty", "", "Can use Livestock slavery"],
            ["empty", "", "Decreased Opinion with alien empires"],
            ["empty", "", "Cannot grant aliens Full Citizenship"],
            ["empty", "", "Cannot grant aliens Full Military Service"],
            ["empty", "", "Cannot use Refugees Welcome species policy"],
            ["empty", "", "Cannot use Proactive first contact stance"],
        ],
        exclude: [
            "ethic_fanatic_xenophobe",
            "ethic_gestalt_consciousness",
            "ethic_fanatic_xenophile",
            "ethic_xenophile",
        ],
    },
    {
        trait: "ethic_fanatic_authoritarian",
        nameEN: "Fanatic Authoritarian",
        nameRU: "",
        icon: "../src/icons/ethics/fanatic-authoritarian.png",
        traits: [
            ["good", "+1", "Monthly influence"],
            ["good", "+10%", "Worker job output"],
            ["empty", "", "Can use the Information Quarantine edict"],
            ["empty", "", "Allows Stratified Economy Living Standards"],
            ["empty", "", "Can enslave aliens"],
            ["empty", "", "Must use Autocratic authority"],
        ],
        exclude: [
            "ethic_authoritarian",
            "ethic_gestalt_consciousness",
            "ethic_fanatic_egalitarian",
            "ethic_egalitarian",
        ],
    },
    {
        trait: "ethic_authoritarian",
        nameEN: "Authoritarian",
        nameRU: "",
        icon: "../src/icons/ethics/authoritarian.png",
        traits: [
            ["good", "+0.5", "Monthly influence"],
            ["good", "+5%", "Worker job output"],
            ["empty", "", "Can use the Information Quarantine edict"],
            ["empty", "", "Allows Stratified Economy Living Standards"],
            ["empty", "", "Can enslave aliens"],
            ["empty", "", "Cannot reform into or start with Democratic authority"],
        ],
        exclude: [
            "ethic_fanatic_authoritarian",
            "ethic_gestalt_consciousness",
            "ethic_fanatic_egalitarian",
            "ethic_egalitarian",
        ],
    },
    {
        trait: "ethic_gestalt_consciousness",
        nameEN: "Gestalt Consciousness",
        nameRU: "",
        icon: "../src/icons/ethics/gestalt-consciousness.png",
        traits: [
            ["good", "-20%", "War exhaustion gain"],
            ["good", "+1", "Monthly influence"],
            ["good", "+2", "Encryption"],
            ["empty", "", "Cannot change ethics"],
        ],
        exclude: [
            "ethic_fanatic_spiritualist",
            "ethic_spiritualist",
            "ethic_fanatic_militarist",
            "ethic_militarist",
            "ethic_fanatic_xenophobe",
            "ethic_xenophobe",
            "ethic_fanatic_authoritarian",
            "ethic_authoritarian",
            "ethic_fanatic_egalitarian",
            "ethic_egalitarian",
            "ethic_fanatic_xenophile",
            "ethic_xenophile",
            "ethic_fanatic_pacifist",
            "ethic_pacifist",
            "ethic_fanatic_materialist",
            "ethic_materialist",
        ],
    },
    {
        trait: "ethic_fanatic_egalitarian",
        nameEN: "Fanatic Egalitarian",
        nameRU: "",
        icon: "../src/icons/ethics/fanatic-egalitarian.png",
        traits: [
            ["good", "+50%", "Faction unity gain"],
            ["good", "+10%", "Specialist job output"],
            ["empty", "", "Can use the Encourage Political Thought edict"],
            ["empty", "", "Allows Utopian Living Standards"],
            ["empty", "", "Cannot use Selected Lineages or Capacity Boosters policy"],
            ["empty", "", "Must use Democratic authority"],
        ],
        exclude: [
            "ethic_egalitarian",
            "ethic_gestalt_consciousness",
            "ethic_fanatic_authoritarian",
            "ethic_authoritarian",
        ],
    },
    {
        trait: "ethic_egalitarian",
        nameEN: "Egalitarian",
        nameRU: "",
        icon: "../src/icons/ethics/egalitarian.png",
        traits: [
            ["good", "+25%", "Faction unity gain"],
            ["good", "+5%", "Specialist job output"],
            ["empty", "", "Can use the Encourage Political Thought edict"],
            ["empty", "", "Allows Utopian Living Standards"],
            ["empty", "", "Cannot use Capacity Boosters policy"],
            ["empty", "", "Cannot reform into or start with Autocratic authority"],
        ],
        exclude: [
            "ethic_fanatic_egalitarian",
            "ethic_gestalt_consciousness",
            "ethic_fanatic_authoritarian",
            "ethic_authoritarian",
        ],
    },
    {
        trait: "ethic_fanatic_xenophile",
        nameEN: "Fanatic Xenophile",
        nameRU: "",
        icon: "../src/icons/ethics/fanatic-xenophile.png",
        traits: [
            ["good", "+20%", "Trade value"],
            ["good", "+2", "Available envoys"],
            ["empty", "", "Can use the Land of Opportunity edict"],
            ["empty", "", "Increased Opinion with alien empires"],
            ["empty", "", "Cannot use No Refugees policy"],
            ["empty", "", "Cannot use Population Controls Enabled species rights"],
            ["empty", "", "Cannot Displace aliens"],
            ["empty", "", "Cannot use Aggressive first contact stance"],
            ["empty", "", "Cannot use Hunted or Extermination pre-sapients policy"],
        ],
        exclude: [
            "ethic_fanatic_xenophobe",
            "ethic_xenophobe",
            "ethic_gestalt_consciousness",
            "ethic_xenophile",
        ]
    },
    {
        trait: "ethic_xenophile",
        nameEN: "Fanatic Xenophile",
        nameRU: "",
        icon: "../src/icons/ethics/xenophile.png",
        traits: [
            ["good", "+10%", "Trade value"],
            ["good", "+1", "Available envoys"],
            ["empty", "", "Can use the Land of Opportunity edict"],
            ["empty", "", "Increased Opinion with alien empires"],
            ["empty", "", "Cannot use No Refugees policy"],
            ["empty", "", "Cannot use Population Controls Enabled species rights"],
            ["empty", "", "Cannot Displace aliens"],
            ["empty", "", "Cannot use Aggressive first contact stance"],
            ["empty", "", "Cannot use Hunted or Extermination pre-sapients policy"],
        ],
        exclude: [
            "ethic_fanatic_xenophobe",
            "ethic_xenophobe",
            "ethic_gestalt_consciousness",
            "ethic_fanatic_xenophile",
        ]
    },
    {
        trait: "ethic_fanatic_pacifist",
        nameEN: "Fanatic Pacifist",
        nameRU: "",
        icon: "../src/icons/ethics/fanatic-pacifist.png",
        traits: [
            ["good", "-30%", "Empire size from pops"],
            ["good", "+10", "Stability"],
            ["empty", "", "Can use the Peace Festivals edict"],
            ["empty", "", "Must use Defensive Wars policy"],
            ["empty", "", "Cannot use Unrestricted Studies policy"],
            ["empty", "", "Cannot engage in Indiscriminate Orbital Bombardment"],
            ["empty", "", "Cannot use Aggressive first contact stance"],
        ],
        exclude: [
            "ethic_fanatic_militarist",
            "ethic_militarist",
            "ethic_gestalt_consciousness",
            "ethic_pacifist",
        ],
    },
    {
        trait: "ethic_pacifist",
        nameEN: "Pacifist",
        nameRU: "",
        icon: "../src/icons/ethics/pacifist.png",
        traits: [
            ["good", "-15%", "Empire size from pops"],
            ["good", "+5", "Stability"],
            ["empty", "", "Can use the Peace Festivals edict"],
            ["empty", "", "Cannot use Unrestricted Wars policy"],
            ["empty", "", "Cannot use Unrestricted Studies policy"],
            ["empty", "", "Cannot engage in Indiscriminate Orbital Bombardment"],
            ["empty", "", "Cannot use Aggressive first contact stance"],
        ],
        exclude: [
            "ethic_fanatic_militarist",
            "ethic_militarist",
            "ethic_gestalt_consciousness",
            "ethic_fanatic_pacifist",
        ],
    },
    {
        trait: "ethic_fanatic_materialist",
        nameEN: "Fanatic Materialist",
        nameRU: "",
        icon: "../src/icons/ethics/fanatic-materialist.png",
        traits: [
            ["good", "-20%", "Robot upkeep"],
            ["good", "+10%", "Research speed"],
            ["empty", "", "Allows Academic Privilege living standards"],
            ["empty", "", "Cannot use Outlawed AI policy"],
            ["empty", "", "Cannot use Outlawed Robotic Workers policy"],
        ],
        exclude: [
            "ethic_fanatic_spiritualist",
            "ethic_spiritualist",
            "ethic_gestalt_consciousness",
            "ethic_materialist",
        ],
    },
    {
        trait: "ethic_materialist",
        nameEN: "Materialist",
        nameRU: "",
        icon: "../src/icons/ethics/materialist.png",
        traits: [
            ["good", "-10%", "Robot upkeep"],
            ["good", "+5%", "Research speed"],
            ["empty", "", "Allows Academic Privilege living standards"],
            ["empty", "", "Cannot use Outlawed AI policy"],
            ["empty", "", "Cannot use Outlawed Robotic Workers policy"],
        ],
        exclude: [
            "ethic_fanatic_spiritualist",
            "ethic_spiritualist",
            "ethic_gestalt_consciousness",
            "ethic_fanatic_materialist",
        ],
    },
];
export { ethics };
