import { ITraits } from "../../interface.js"

const authority: Array<ITraits> = [
  {
    trait: "auth_democratic",
    nameEN: "Democratic",
    nameRU: "",
    icon: "../src/icons/autority/democratic.png",
    descrEN: "Democratic governments have regular elections where all citizens can vote on who should represent them.",
    traits : [
      ["empty", "", "Rulers have mandates"],
      ["empty", "", "Re-election"],
      ["good", "+50%", "Automatic resettlement chance"],
    ],
    exclude: [
      "ethic_gestalt_consciousness",
      "ethic_authoritarian",
      "ethic_fanatic_authoritarian",
  ],
  },
  {
    trait: "auth_oligarchic",
    nameEN: "Oligarchic",
    nameRU: "",
    icon: "../src/icons/autority/oligarchic.png",
    descrEN: "Oligarchic governments are ruled by a small group of individuals that hold all political power.",
    traits : [
      ["empty", "", "Rulers have agendas"],
      ["empty", "", "Emergency elections (at 250 Unity)"],
      ["good", "+15%", "Faction Unity Gain"],
    ],
    exclude: [
      "ethic_gestalt_consciousness",
      "ethic_fanatic_egalitarian",
      "ethic_fanatic_authoritarian",
    ],
  },
  {
    trait: "auth_dictatorial",
    nameEN: "Dictatorial",
    nameRU: "",
    icon: "../src/icons/autority/dictatorial.png",
    descrEN: "Dictatorial governments are ruled by a single individual for life that wields absolute control over the state.",
    traits : [
      ["empty", "", "Rulers have agendas"],
      ["good", "-10%", "Empire Size Effec"],
    ],
    exclude: [
      "ethic_gestalt_consciousness",
      "ethic_egalitarian",
      "ethic_fanatic_egalitarian",
    ],
  },
  {
    trait: "auth_imperial",
    nameEN: "Imperial",
    nameRU: "",
    icon: "../src/icons/autority/imperial.png",
    descrEN: "Imperial governments are similar to dictatorial ones, except that the throne is always inherited by a designated successor upon the ruler's death.",
    traits : [
      ["empty", "", "Rulers have agendas"],
      ["good", "+1", "Power Projection"],
    ],
    exclude: [
      "ethic_gestalt_consciousness",
			"ethic_egalitarian",
			"ethic_fanatic_egalitarian",
    ],
  },
  {
    trait: "auth_hive_mind",
    nameEN: "Hive Mind",
    nameRU: "",
    icon: "../src/icons/autority/hive-mind.png",
    descrEN: "Hive Minds operate as a single organism more than as a state. The population has no free will, and act as an extension of the Hive Mind itself - much like the limbs of a body. When cut off from the Mind, these drones become comatose and eventually wither and die. Any free individuals on planets owned by the Mind are driven away, killed, or simply treated as prey to feed the collective.",
    traits : [
      ["good", "+25%", "Pop Growth Speed"],
      ["good", "-25%", "Empire Size Effec"],
      ["empty", "", "Pops have the Hive-Minded trait"],
    ],
  },
  {
    trait: "auth_machine_intelligence",
    nameEN: "Machine Intelligence",
    nameRU: "",
    icon: "../src/icons/autority/machine-intelligence.png",
    descrEN: "Machine Intelligences are immense artificial group minds that have been networked into a single conscious entity. Most of the actual populatio in such an empire consists of mindless work units who perform their designated tasks without any semblance of free will. A small number of semi-autonomous agents are typically employed for more specialized tasks that benefit from some degree of independent initiative.",
    traits : [
      ["good", "+1", "Extra pops when establishing colony"],
      ["good", "+1", "Monthly Mechanical Pop Assembly"],
      ["good", "+10%", "Mining Station Output"],
      ["good", "-15%", "Empire Size from Pops"],
      ["bad", "+50%", "Empire Size from Planets"],
      ["bad", "50%", "Pop Growth Reduction"],
      ["empty", "", "Pops have the Machine trait"],
    ],
  },
  {
    trait: "auth_corporate",
    nameEN: "Corporate",
    nameRU: "",
    icon: "../src/icons/autority/corporate.png",
    descrEN: "Corporate governments are organized as a massive commercial enterprise that has completely supplanted the role of the state.",
    traits : [
      ["empty", "", "Rulers have agendas"],
      ["empty", "", "Emergency elections (at 250 Unity)"],
      ["good", "+10%", "Monthly Unity"],
      ["bad", "+25%", "Empire Size Effect"],
      ["empty", "", "Can use the Mercantile Diplomatic Stance"],
      ["empty", "", "Can build Branch Offices"],
    ],
    exclude: [
      "ethic_gestalt_consciousness",
			"ethic_fanatic_egalitarian",
			"ethic_fanatic_authoritarian",
    ],
  },
]

export { authority }