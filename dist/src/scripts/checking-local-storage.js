function checkLocalStorage(currentArray, dataArray, localValue, checkValue) {
    if (localStorage.getItem(localValue) !== undefined && localStorage.getItem(localValue) !== checkValue) {
        for (let i = 0; i < dataArray.length; i++) {
            if (localStorage.getItem(localValue) === dataArray[i].trait) {
                currentArray.push(dataArray[i]);
                continue;
            }
        }
    }
}
export { checkLocalStorage };
