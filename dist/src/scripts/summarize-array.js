function summarizeArray(sumArray) {
    let reducedTraitList = [];
    for (let i = 0; i < sumArray.length; i++) {
        if (sumArray[i]) {
            if (sumArray[i][1] === "") {
                reducedTraitList.push(sumArray[i]);
                continue;
            }
            let b = [];
            let isMinus = false;
            let num = 0;
            let isProsect = false;
            if (sumArray[i][1][sumArray[i][1].length - 1] === "%") {
                isProsect = true;
            }
            else {
                isProsect = false;
            }
            isMinus = false;
            b = [sumArray[i][0], "", sumArray[i][2]];
            num = 0;
            if (isProsect) {
                if (sumArray[i][1][0] === "-") {
                    num = -parseInt(sumArray[i][1].slice(1, -1));
                    isMinus = true;
                }
                else {
                    num = parseInt(sumArray[i][1].slice(0, -1));
                }
                for (let j = i + 1; j < sumArray.length; j++) {
                    if (sumArray[j]) {
                        if (sumArray[i][2] === sumArray[j][2]) {
                            num += parseInt(sumArray[j][1].slice(0, -1));
                            delete sumArray[j];
                        }
                    }
                }
            }
            else {
                if (sumArray[i][1][0] === "-") {
                    num = -parseInt(sumArray[i][1].slice(1));
                    isMinus = true;
                }
                else {
                    num = parseInt(sumArray[i][1]);
                }
                for (let j = i + 1; j < sumArray.length; j++) {
                    if (sumArray[j]) {
                        if (sumArray[i][2] === sumArray[j][2]) {
                            num += parseInt(sumArray[j][1].slice(0, -1));
                            delete sumArray[j];
                        }
                    }
                }
            }
            if (isMinus) {
                b[1] = "-" + Math.abs(num).toString();
            }
            else {
                b[1] = "+" + num.toString();
            }
            if (isProsect) {
                b[1] += "%";
            }
            reducedTraitList.push(b);
        }
    }
    return reducedTraitList;
}
export { summarizeArray };
