function convertTime(value: number): string {
  if (value < 10) { return "00:0" + Math.floor(value) } 
    else if (value < 60) { return "00:" + Math.floor(value) }
      else if (value < 600) { let min: number = Math.floor(value / 60)
        if ((value - min *60) < 10) { return "0" + min + ":0" + Math.floor(value - min *60) } 
          else { return "0" + min + ":" + Math.floor(value - min *60) }
      }
}

function randomizer(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

export { convertTime, randomizer }