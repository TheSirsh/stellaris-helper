import { createHeader } from "./src/scripts/header/header.js";
import { createNewSimpleElement} from "./src/scripts/create-functions.js";
import { createFooter } from "./src/scripts/footer/footer.js";
import { createAudioPlayer } from "./src/scripts/audio-player/audio-player.js";

localStorage.clear();
const body: Element = document.querySelector(".body");
createHeader();
createAudioPlayer()

const mainSection = createNewSimpleElement("section", "main-section", body);
const mainSectionContainer = createNewSimpleElement("div", "main-section__container", mainSection);

createFooter();