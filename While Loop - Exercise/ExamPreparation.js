function examPreperation(input) {
    let maxBadGrades = Number(input[0]);
    let currentBadGrades = 0;
    let gradesSum = 0;
    let gradesCount = 0;
    let lastProblem = '';

    let index = 1;
    let command = input[index];
    index++;

    while (command !== 'Enough') {
        lastProblem = command;

        let grade = Number(input[index]);
        index++;

        if (grade <= 4) {
            currentBadGrades++;

            if (currentBadGrades === maxBadGrades) {
                console.log(`You need a break, ${currentBadGrades} poor grades.`);
                return;
            }
        }

        gradesCount++;
        gradesSum += grade;

        command = input[index];
        index++;
    }

    let avgGrade = gradesSum / gradesCount;

    console.log(`Average score: ${avgGrade.toFixed(2)}`);
    console.log(`Number of problems: ${gradesCount}`);
    console.log(`Last problem: ${lastProblem}`);
}

examPreperation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])