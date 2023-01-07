import { createNewImageElement, createNewSimpleElement, createNewTextElement } from "../create-functions.js";
import { audioPlayerText } from "./audio-player-text.js";
import { trackList } from "./audio-player-track-list.js";
import { convertTime } from "./audio-player-support-function.js";

function createAudioPlayer() {

  let isPlay: boolean = false;

  const body: Element | null = document.querySelector(".body");
    const audioPlayer = createNewSimpleElement("section", "audio-player-bg", body)
    for (let i = 0; i < audioPlayerText.length; i++) {
      if (audioPlayerText[i].name === "pause") { continue }
       else if (audioPlayerText[i].name === "progress-bar-empty") { createNewSimpleElement("div", "progress-bar-empty", audioPlayer); continue}
          else if (audioPlayerText[i].name === "progress-bar") { createNewImageElement(`${audioPlayerText[i].name}`, document.querySelector(".progress-bar-empty"), `${audioPlayerText[i].src}`, `${audioPlayerText[i].alt}`); continue }
      createNewImageElement(`${audioPlayerText[i].name}`, audioPlayer, `${audioPlayerText[i].src}`, `${audioPlayerText[i].alt}`)
    }

    let audioTrack = new Audio(trackList[0].src)
    let duration = convertTime(trackList[0].duration)
    createNewTextElement("span", "duration", audioPlayer, "00:00 / " + duration);
    createNewTextElement("span", "trackName", audioPlayer, trackList[0].name);

    const playButton = document.querySelector(".play");
    localStorage.setItem("trackTime", "0")
    playButton.addEventListener("click", function() {
      tooglePlay(isPlay, audioTrack)
      isPlay = !isPlay
    })
}

function tooglePlay(playStatus: boolean, track: HTMLAudioElement) {
  let button: HTMLImageElement = document.querySelector(".play");
  let time = parseFloat(localStorage.getItem("trackTime"))
  if (playStatus === false) {
    track.currentTime = time;
    track.play();
    button.src = "../src/icons/audio-player/pause.png";
    let player = setInterval(function() {
      time++;
      updateTime(time);
      button.addEventListener("click", function() {
        clearInterval(player);
      })
    }, 1000)

  } else if (playStatus === true) {
    button.src = "../src/icons/audio-player/play.png";
    track.pause();
    localStorage.setItem("trackTime", track.currentTime.toString())
  }
}

function updateTime(time: number) {
  let duration = document.querySelector(".duration");
  duration.textContent = convertTime(time) + " / " + convertTime(trackList[0].duration);

  let progressBar: HTMLImageElement = document.querySelector(".progress-bar");
  progressBar.style.width = (time * 100) / trackList[0].duration + "%"

}

export { createAudioPlayer }

