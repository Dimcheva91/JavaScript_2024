function minNumber(input) {
    let index = 0;
    let command = input[index];
    let myMinNumber = Number.MAX_SAFE_INTEGER;

    while(command != "Stop") {
        let num = Number(command);

        if(num < myMinNumber) {
            myMinNumber = num;
        }

        command = input[index];
        index++;
    }

    console.log(myMinNumber);
}

minNumber(["-10",
    "20",
    "-30",
    "Stop"])
    