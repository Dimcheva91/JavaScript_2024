function oscars(input) {
    let actorName = input[0];
    let basicPoints = Number(input[1]);
    let judgeCount = Number(input[2]);

    let totalPoints = 0;

    for (let index = 3; index < input.length; index++) {
        let judgeName = input[index++];
        let pointsFromJudge = Number(input[index]);
        let judgeNameL = Number(judgeName.length);
        
        totalPoints = basicPoints + (judgeNameL * pointsFromJudge) / 2;
        basicPoints = totalPoints;

        if (totalPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(totalPoints).toFixed(1)}!`);
            break;
        }
    }

    if (totalPoints <= 1250.5) {
        let needMoney = 1250.5 - totalPoints;
        console.log(`Sorry, ${actorName} you need ${(needMoney).toFixed(1)} more!`);
    }
}

oscars(["Zahari Baharov",
    "205",
    4,
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"])

oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])

