import { createNewImageElement, createNewSimpleElement, createNewTextElement } from "../create-functions.js";
import { audioPlayerText } from "./audio-player-text.js";
import { trackList } from "./audio-player-track-list.js";

function createAudioPlayer() {

  const body: Element | null = document.querySelector(".body");
    const audioPlayer = createNewSimpleElement("section", "audio-player-bg", body)
    for (let i = 0; i < audioPlayerText.length; i++) {
      if (audioPlayerText[i].name === "pause" || audioPlayerText[i].name === "progress-bar") { continue }
      createNewImageElement(`${audioPlayerText[i].name}`, audioPlayer, `${audioPlayerText[i].src}`, `${audioPlayerText[i].alt}`)
    }

    let duration = convertTime(trackList[0].duration)
    createNewTextElement("span", "duration", audioPlayer, "00:00 / " + duration);
    createNewTextElement("span", "trackName", audioPlayer, trackList[0].name)
}

function convertTime(value: number): string {
  if (value < 10) { return "00:0" + value } 
    else if (value < 60) { return "00:" + value }
      else if (value < 600) { let min: number = Math.floor(value / 60)
        if ((value - min *60) < 10) { return "0" + min + ":0" + (value - min *60) } 
          else { return "0" + min + ":" + (value - min *60) }
      }
}

export { createAudioPlayer }

