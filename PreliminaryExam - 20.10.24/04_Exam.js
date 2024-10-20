function examStatistics(input) {
    let studentsCount = Number(input[0]);
    let totalGrades = 0;

    let topStudentsCount = 0;
    let betweenForAndFiveCount = 0;
    let betweenThreeAndFourCount = 0;
    let failCount = 0;

    for (let index = 1; index <= studentsCount; index++) {
        let grade = Number(input[index]);
        totalGrades += grade;

        if (grade >= 5.00) {
            topStudentsCount++;
        } else if (grade >= 4.00 && grade <= 4.99) {
            betweenForAndFiveCount++;
        } else if (grade >= 3.00 && grade <= 3.99) {
            betweenThreeAndFourCount++;
        } else if (grade < 3.00) {
            failCount++;
        }
    }

    let topStudentsPercentage = (topStudentsCount / studentsCount) * 100;
    let midStudentsPercentage = (betweenForAndFiveCount / studentsCount) * 100;
    let badStudentsPercentage = (betweenThreeAndFourCount / studentsCount) * 100;
    let failStudentsPercentage = (failCount / studentsCount) * 100;

    let averageGrade = totalGrades / studentsCount;

    console.log(`Top students: ${topStudentsPercentage.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${midStudentsPercentage.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${badStudentsPercentage.toFixed(2)}%`);
    console.log(`Fail: ${failStudentsPercentage.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);
}

examStatistics(["6",
    "2",
    "3",
    "4",
    "5",
    "6",
    "2.2"]);
