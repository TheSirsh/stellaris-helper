import { createNewImageElement, createNewSimpleElement, createNewTextElement } from "../create-functions.js";
import { audioPlayerText } from "./audio-player-text.js";
import { trackList } from "./audio-player-track-list.js";
import { convertTime, randomizer } from "./audio-player-support-function.js";

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

    let trackNumber: number = randomizer(0, trackList.length - 1);
    localStorage.setItem("trackNumber", trackNumber.toString())
    let audioTrack = new Audio(trackList[trackNumber].src)
    let duration = convertTime(trackList[trackNumber].duration)
    createNewTextElement("span", "duration", audioPlayer, "00:00 / " + duration);
    createNewTextElement("span", "track-name", audioPlayer, trackList[trackNumber].name);

    let playButton = document.querySelector(".play");
    localStorage.setItem("trackTime", "0")
    
    playButton.addEventListener("click", () => {
      tooglePlay(isPlay, audioTrack, trackNumber)
      isPlay = !isPlay
    }
    )

    const nextButton = document.querySelector(".next")
    nextButton.addEventListener("click", function() {
      nextTrack(audioTrack, isPlay)
      isPlay = true
    })
}

function tooglePlay(playStatus: boolean, track: HTMLAudioElement, trackNumber2: number) {
  let button: HTMLImageElement = document.querySelector(".play");
  let time = parseFloat(localStorage.getItem("trackTime"));
  let trackNumber = parseInt(localStorage.getItem("trackNumber"))

  if (playStatus === true) {
    button.src = "../src/icons/audio-player/play.png";
    track.pause();
    localStorage.setItem("trackTime", track.currentTime.toString())
  } else if (playStatus === false) {
    button.src = "../src/icons/audio-player/pause.png";
    track.currentTime = time;
    track.play();

    let duration = document.querySelector(".duration");
    duration.textContent =  "00:00 / " + convertTime(trackList[trackNumber].duration);
    let trackName = document.querySelector(".track-name");
    trackName.textContent = trackList[trackNumber].name;

    setInterval(function() {
      updateTime(track)
    }, 1000)
  
  }




}

function nextTrack(track: HTMLAudioElement, playStatus: boolean) {
  if (!playStatus) {
    let button: HTMLImageElement = document.querySelector(".play");
    button.src = "../src/icons/audio-player/play.png";
  }

  localStorage.setItem("trackTime", "0");
  let trackNumber = parseInt(localStorage.getItem("trackNumber"))
  if (trackNumber ===  trackList.length - 1) { trackNumber = 0; }
    else { trackNumber++; }
  localStorage.setItem("stopTimer", "yes")
  track.src = trackList[trackNumber].src;
  updateTime(track);
  localStorage.setItem("trackNumber", trackNumber.toString())
  tooglePlay(false, track, trackNumber)
}

function updateTime(track: HTMLAudioElement) {
  let time = track.currentTime;
  
  let trackNumber = parseInt(localStorage.getItem("trackNumber"))
  let duration = document.querySelector(".duration");
  duration.textContent = convertTime(time) + " / " + convertTime(trackList[trackNumber].duration);
  let progressBar: HTMLImageElement = document.querySelector(".progress-bar");
  progressBar.style.width = (time * 100) / trackList[trackNumber].duration + "%"
}

export { createAudioPlayer }
