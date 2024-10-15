function specialNumber(num) {
    let result = '';

    for (let currentNum = 1111; currentNum <= 9999; currentNum++) {
        let isSpecial = true;

        let currentNumAsStr = String(currentNum);

        for (let index = 0; index < currentNumAsStr.length; index++) {
            let digit = Number(currentNumAsStr[index]);

            if (num % digit !== 0) {
                isSpecial = false;
                break;
            }
        }

        if (isSpecial) {
            result += currentNum + ' ';
        }
    }

    console.log(result);
}

specialNumber(3);