import { createNewSimpleElement } from "../create-functions.js";

function createAudioPlayer() {

  const body: Element | null = document.querySelector(".body");
    createNewSimpleElement("section", "audio-player-bg", body)
}

export { createAudioPlayer }

