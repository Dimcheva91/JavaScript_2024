function bestPlayer(input) {
    let playerOne = Number(input[0]);
    let playerTwo = Number(input[1]);

    let index = 2;
    let command = input[index];
    index++;

    let isFinishGame = false;

    while (command !== "End") {
        let winner = command;

        switch (winner) {
            case "one": playerTwo--; break;
            case "two": playerOne--; break;
        }

        if (playerOne <= 0) {
            console.log(`Player one is out of eggs. Player two has ${playerTwo} eggs left.`);
            isFinishGame = true;
            break;
        }
        else if (playerTwo <= 0) {
            console.log(`Player two is out of eggs. Player one has ${playerOne} eggs left.`);
            isFinishGame = true;
            break;
        }

        command = input[index]
        index++;
    }

    if (!isFinishGame) {
        console.log(`Player one has ${playerOne} eggs left.`);
        console.log(`Player two has ${playerTwo} eggs left.`);
    }
}

bestPlayer(["2",
    "6",
    "one",
    "two",
    "two"
])
