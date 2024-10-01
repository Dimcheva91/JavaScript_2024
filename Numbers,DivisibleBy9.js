function numbersDevidedByNine(start, end) {
    let sum = 0;

    for (let index = start; index <= end; index++) {
        if (index % 9 == 0) {
            sum += index;
        }
    }

    console.log(`The sum: ${sum}`);

    for (let index = start; index <= end; index++) {
        if (index % 9 == 0) {
            sum += index;
            console.log(index);
        }
    }
}

numbersDevidedByNine(100, 200)