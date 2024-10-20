function bestPlayer(arr) {
    let index = 0;
    let bestPlayer = "";
    let maxGoals = 0;

    let command = arr[index];
    index++;

    while (command !== "END") {
        let playerName = command;
        let goals = Number(arr[index]);
        index++;

        if (goals > maxGoals) {
            maxGoals = goals;
            bestPlayer = playerName;
        }

        if (goals >= 10) {
            break;
        }

        command = arr[index];
        index++;
    }

    console.log(`${bestPlayer} is the best player!`);

    if (maxGoals >= 3) {
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${maxGoals} goals.`);
    }
}

bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
