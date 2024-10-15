function trainTheTrainers(input) {
    let judgeCouunt = Number(input[0]);
    let totalGradeSum = 0;
    let presentationCount = 0;

    let index = 1;
    let command = input[index];
    index++;

    while (command !== "Finish") {
        let presentationTitle = command;
        let presentationGradeSum = 0;

        for (let currentJudge = 1; currentJudge <= judgeCouunt; currentJudge++) {
            let grade = Number(input[index]);
            index++;

            presentationGradeSum += grade;
        }

        let avgPresentationGrade = presentationGradeSum / judgeCouunt;
        console.log(`${presentationTitle} - ${avgPresentationGrade.toFixed(2)}.`);

        presentationCount++;
        totalGradeSum += avgPresentationGrade;

        command = input[index];
        index++;
    }

    let totalAvgGrade = totalGradeSum / presentationCount;
    console.log(`Student's final assessment is ${totalAvgGrade.toFixed(2)}.`);
}

trainTheTrainers(["2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish"])


