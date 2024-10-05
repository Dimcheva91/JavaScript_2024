function graduation(input) {
    let index
        = 0;
    let name = input[index];
    index++;

    let sumGrade = 0;
    let schoolClass = 1;

    let hasExcluded = false;
    let badGradeCounter = 0;

    while (schoolClass <= 12) {
        let grade = Number(input[index]);
        index++;

        if (grade < 4) {
            badGradeCounter++;
            if (badGradeCounter == 2) {
                hasExcluded = true;
                console.log(`${name} has been excluded at ${schoolClass} grade`);
                break;
            }
            continue;
        }

        sumGrade += grade;
        schoolClass++;
    }

    if(!hasExcluded)
    {
        let avgGrade = sumGrade / 12;
    console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }
}

graduation(["Mimi", 
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])
    