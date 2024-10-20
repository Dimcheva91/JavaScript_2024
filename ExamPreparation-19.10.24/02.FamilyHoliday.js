function familyHoliday(budget, nightCount, price, extraPercentage) {
    let total = 0;

    if (nightCount > 7) {
        price *= 0.95;
    }

    total = nightCount * price;
    total += budget * (extraPercentage / 100);

    let diff = Math.abs(budget - total);

    if (budget >= total) {
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    }
    else {
        console.log(`${diff.toFixed(2)} leva needed.`);
    }
}

familyHoliday(500,
    7,
    66,
    15
)