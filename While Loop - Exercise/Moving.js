function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);

    let volume = width * length * height;

    let index = 3;
    let command = input[index];
    index++;

    while (command !== 'Done') {
        let boxesCount = Number(command);
        volume -= boxesCount;

        if (volume <= 0) {
            console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`);
            return;
        }

        command = input[index];
        index++;
    }

    console.log(`${volume} Cubic meters left.`);
}

moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])

