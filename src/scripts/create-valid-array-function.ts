import { ITraits } from "./interface";

function createValidArray(arr: Array<ITraits>, checkStr: string): Array<ITraits> {

  let newArray: Array<ITraits> = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].exclude == undefined) { newArray.push(arr[i]); } 
      else {
        let isValid: Boolean = true;
        for (let j = 0; j < arr[i].exclude.length; j++) {
          if (arr[i].exclude[j] === localStorage.getItem(`${checkStr}`)) { isValid = false; } 
        }
        if (isValid === true) { newArray.push(arr[i]); }
      }
  }
  return newArray
}

export { createValidArray }