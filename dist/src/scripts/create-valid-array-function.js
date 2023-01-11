function createValidArray(checkingArray, checkStr) {
    let newArray = [];
    for (let i = 0; i < checkingArray.length; i++) {
        if (checkingArray[i].exclude == undefined) {
            newArray.push(checkingArray[i]);
        }
        else {
            let isValid = true;
            for (let j = 0; j < checkingArray[i].exclude.length; j++) {
                if (checkingArray[i].exclude[j] === localStorage.getItem(`${checkStr}`)) {
                    isValid = false;
                }
            }
            if (isValid === true) {
                newArray.push(checkingArray[i]);
            }
        }
    }
    return newArray;
}
export { createValidArray };
