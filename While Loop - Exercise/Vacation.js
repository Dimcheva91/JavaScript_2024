function vacation(input) {
    let index = 0;

    let vacationPrice = Number(input[index]);
    index++;

    let avalibleMoney = Number(input[index]);
    index++;

    let daysSpend = 0;
    let totalDays = 0;

    while (avalibleMoney < vacationPrice) {
        let action = input[index];
        index++;

        let sum = Number(input[index]);
        index++;

        if (action === 'save') {
            avalibleMoney += sum;
            daysSpend = 0;
        }
        else if (action === 'spend') {

            if (sum > avalibleMoney) {
                avalibleMoney = 0;
            }
            else {
                avalibleMoney -= sum;
            }

            daysSpend++;
        }

        totalDays++;

        if (daysSpend === 5) {
            console.log("You can't save the money.");
            console.log(totalDays);
            break;
        }

    }

    if (avalibleMoney >= vacationPrice) {
        console.log(`You saved the money for ${totalDays} days.`);
    }
}

vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])

