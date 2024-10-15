function numberPyramid(num) {

    let current = 1;
    let printCurrentLine = "";

    for (let rows = 1; rows <= num; rows++) {
        for (let colums = 1; colums <= rows; colums++) {
            if (current > num) {
                break;
            }

            printCurrentLine += current + " ";
            current++;
        }

        console.log(printCurrentLine);
        printCurrentLine = "";
        if (current > num) {
            break;
        }
    }
}

numberPyramid(12);