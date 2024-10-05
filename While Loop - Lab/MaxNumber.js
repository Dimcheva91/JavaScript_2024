function maxNumber(input) {
    let index = 0;
    let command = input[index];
    let myMaxNumber = Number.MIN_SAFE_INTEGER;

    while(command != "Stop") {
        let num = Number(command);

        if(num > myMaxNumber) {
            myMaxNumber = num;
        }

        command = input[index];
        index++;
    }

    console.log(myMaxNumber);
}

maxNumber(["10",
    "99",
    "80",
    "70",
    "Stop"])
    