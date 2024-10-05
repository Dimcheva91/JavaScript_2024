function sumNumbers(input) {
    let index = 0;
    let magicNumber = Number(input[index]);
    index++;

    let sum = 0;

    while (sum < magicNumber) {
        let num = Number(input[index]);
        index++;

        sum += num;
    }

    console.log(sum);
}

sumNumbers(["100",
    "10",
    "20",
    "30",
    "40"])
