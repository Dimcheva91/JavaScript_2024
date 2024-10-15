function equalSumsEvenOddPosition(startNum, endNum) {
    let result = '';

    for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
        let evenIndexSum = 0;
        let oddIndexSum = 0;

        let currentNumAsString = currentNum + '';

        for (let index = 0; index < currentNumAsString.length; index++) {
            let digit = Number(currentNumAsString[index]);

            if (index % 2 === 0) {
                evenIndexSum += digit;
            }
            else {
                oddIndexSum += digit;
            }
        }

        if (evenIndexSum === oddIndexSum) {
            result += currentNum + ' ';
        }
    }

    console.log(result);
}


equalSumsEvenOddPosition(100000, 100050);