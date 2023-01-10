import { createNewImageElement, createNewSimpleElement, createNewTextElement } from "../create-functions.js";
import { audioPlayerText } from "./audio-player-text.js";
import { trackList } from "./audio-player-track-list.js";
import { convertTime, randomizer } from "./audio-player-support-function.js";

function createAudioPlayer() {

  let isPlay: boolean = false;
  let isSound: boolean = true;

  const body: Element | null = document.querySelector(".body");
    const audioPlayer = createNewSimpleElement("section", "audio-player-bg", body)

    for (let i = 0; i < audioPlayerText.length; i++) {
      if (`${audioPlayerText[i].name}` === "progress-bar-empty") {
        createNewSimpleElement("div", `${audioPlayerText[i].name}`, audioPlayer);
        i++;
        createNewImageElement(`${audioPlayerText[i].name}`, document.querySelector(".progress-bar-empty"), `${audioPlayerText[i].src}`, `${audioPlayerText[i].alt}`);
        continue
      }
      if (`${audioPlayerText[i].name}` === "volume-bar-empty") {
        createNewSimpleElement("div", `${audioPlayerText[i].name}`, audioPlayer);
        i++;
        createNewImageElement(`${audioPlayerText[i].name}`, document.querySelector(".volume-bar-empty"), `${audioPlayerText[i].src}`, `${audioPlayerText[i].alt}`);
        continue
      }
      else if (audioPlayerText[i].type === "none") { continue }
        else if (audioPlayerText[i].type === "image") { createNewImageElement(`${audioPlayerText[i].name}`, audioPlayer, `${audioPlayerText[i].src}`, `${audioPlayerText[i].alt}`); }
          else if (audioPlayerText[i].type === "text") { createNewTextElement("span", `${audioPlayerText[i].name}`, audioPlayer, `${audioPlayerText[i].text}`); }
    }


    let trackNumber: number = randomizer(0, trackList.length - 1);
      localStorage.setItem("trackNumber", trackNumber.toString());
      document.querySelector(".track-name").textContent = trackList[trackNumber].name;
      document.querySelector(".duration").textContent = "00:00 / " + convertTime(trackList[trackNumber].duration);
      let audioTrack = new Audio(trackList[trackNumber].src);

    localStorage.setItem("volume", "0.3");
      audioTrack.volume = parseFloat(localStorage.getItem("volume"));
      const volumeBasic: HTMLImageElement = document.querySelector(".volume-bar");
        volumeBasic.style.width = parseFloat(localStorage.getItem("volume")) * 100 + "%";
      const volumeText: HTMLImageElement = document.querySelector(".volume");
        volumeText.textContent = parseFloat(localStorage.getItem("volume")) * 100 + "%";

    localStorage.setItem("trackTime", "0");

    const playButton = document.querySelector(".play");
      playButton.addEventListener("click", () => {
        tooglePlay(isPlay, audioTrack);
        isPlay = !isPlay;
      });

    const nextButton = document.querySelector(".next")
      nextButton.addEventListener("click", function() {
        nextTrack(audioTrack, isPlay);
        isPlay = true;
      });

    const prevButton = document.querySelector(".prev")
      prevButton.addEventListener("click", function() {
        prevTrack(audioTrack, isPlay);
        isPlay = true;
      });

    const trackBar = document.querySelector(".progress-bar-empty");
      trackBar.addEventListener("click", function(elem: PointerEvent) {
        setTrackPoint(audioTrack, elem);
      });

    const volumeBar = document.querySelector(".volume-bar-empty");
      volumeBar.addEventListener("click", function(elem: PointerEvent) {
        setVolumePoint(audioTrack, elem);
      });

    const soundButton = document.querySelector(".sound");
      soundButton.addEventListener("click", function() {
        toogleSound(audioTrack, isSound);
        isSound = !isSound;
      });
};

function tooglePlay(playStatus: boolean, track: HTMLAudioElement) {
  let button: HTMLImageElement = document.querySelector(".play");
  let trackNumber = parseInt(localStorage.getItem("trackNumber"));

  if (playStatus === true) {
    button.src = "../src/icons/audio-player/play.png";
    track.pause();
    localStorage.setItem("trackTime", track.currentTime.toString())
  } else if (playStatus === false) {
    let time = parseFloat(localStorage.getItem("trackTime"));
      track.currentTime = time;
    button.src = "../src/icons/audio-player/pause.png";
    track.play();

    let duration = document.querySelector(".duration");
      duration.textContent =  convertTime(time) + " / " + convertTime(trackList[trackNumber].duration);
    let trackName = document.querySelector(".track-name");
      trackName.textContent = trackList[trackNumber].name;

    setInterval(function() {
      updateTime(track);
    }, 500);
  }
};

function nextTrack(track: HTMLAudioElement, playStatus: boolean) {
  if (!playStatus) {
    let button: HTMLImageElement = document.querySelector(".play");
      button.src = "../src/icons/audio-player/play.png";
  }
  localStorage.setItem("trackTime", "0");
  
  let trackNumber = parseInt(localStorage.getItem("trackNumber"));
    if (trackNumber ===  trackList.length - 1) { trackNumber = 0; }
      else { trackNumber++; }
    localStorage.setItem("trackNumber", trackNumber.toString())
    track.src = trackList[trackNumber].src;
  updateTime(track);
  tooglePlay(false, track);
}

function prevTrack(track: HTMLAudioElement, playStatus: boolean) {
  if (!playStatus) {
    let button: HTMLImageElement = document.querySelector(".play");
    button.src = "../src/icons/audio-player/play.png";
  }
  localStorage.setItem("trackTime", "0");

  let trackNumber = parseInt(localStorage.getItem("trackNumber"));
  if (trackNumber ===  0 ) { trackNumber = trackList.length - 1; }
    else { trackNumber--; }
    localStorage.setItem("trackNumber", trackNumber.toString())
    track.src = trackList[trackNumber].src;
  updateTime(track);
  tooglePlay(false, track)
}

function updateTime(track: HTMLAudioElement) {
  let time = track.currentTime;
  let trackNumber = parseInt(localStorage.getItem("trackNumber"))
  let duration = document.querySelector(".duration");
    duration.textContent = convertTime(time) + " / " + convertTime(trackList[trackNumber].duration);
  let progressBar: HTMLImageElement = document.querySelector(".progress-bar");
    progressBar.style.width = (time * 100) / trackList[trackNumber].duration + "%";
  if (track.currentTime >= trackList[trackNumber].duration) { nextTrack(track, true) }
}

function setTrackPoint(track: HTMLAudioElement, point: PointerEvent) {
  const trackWidth: string = window.getComputedStyle(document.querySelector(".progress-bar-empty")).width;
    track.currentTime = point.offsetX / parseInt(trackWidth) * track.duration;
  const trackBar: HTMLImageElement = document.querySelector(".progress-bar");
    trackBar.style.width = point.offsetX / parseInt(trackWidth) * 100 + '%';
  const duration = document.querySelector(".duration");
    const trackNumber = parseInt(localStorage.getItem("trackNumber"));
    duration.textContent = convertTime(track.currentTime) + " / " + convertTime(trackList[trackNumber].duration);
}

function setVolumePoint(track: HTMLAudioElement, point: PointerEvent) {
  const volumeWidth: string = window.getComputedStyle(document.querySelector(".volume-bar-empty")).width;
    track.volume = point.offsetX / parseInt(volumeWidth);
    localStorage.setItem("volume", (track.volume).toString());
  const volumeBar: HTMLImageElement = document.querySelector(".volume-bar");
    volumeBar.style.width = point.offsetX / parseInt(volumeWidth) * 100 + '%';
  const volumeText: HTMLImageElement = document.querySelector(".volume");
    volumeText.textContent = Math.round(point.offsetX / parseInt(volumeWidth) * 100)  + "%";
}

function toogleSound(track: HTMLAudioElement, soundStatus: boolean) {
  const soundButton: HTMLImageElement = document.querySelector(".sound");
    if (soundStatus) {
      soundButton.src ="../src/icons/audio-player/mute.png";
      track.volume = 0;
    } else {
      soundButton.src ="../src/icons/audio-player/sound.png";
      track.volume = parseFloat(localStorage.getItem("volume"));
    }
  const volumeBar: HTMLImageElement = document.querySelector(".volume-bar");
    volumeBar.style.width = track.volume * 100 + "%";
  const volumeText: HTMLImageElement = document.querySelector(".volume");
    volumeText.textContent = Math.round(track.volume * 100)  + "%";
}

export { createAudioPlayer }