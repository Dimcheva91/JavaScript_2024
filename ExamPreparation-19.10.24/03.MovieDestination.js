function movieDestination(budget, destination, season, dayCount) {
    let total = 0;
    switch (season) {
        case "Winter":
            if (destination === "Dubai") {
                total = dayCount * 45000;
            }
            else if (destination === "Sofia") {
                total = dayCount * 17000;
            }
            else if (destination === "London") {
                total = dayCount * 24000;
            }
            break;

        case "Summer":
            if (destination === "Dubai") {
                total = dayCount * 40000;
            }
            else if (destination === "Sofia") {
                total = dayCount * 12500;
            }
            else if (destination === "London") {
                total = dayCount * 20250;
            }
            break;
    }

    if (destination === "Dubai") {
        total *= 0.70;
    }
    else if (destination === "Sofia") {
        total *= 1.25;
    }

    let diff = Math.abs(budget - total);

    if (budget >= total) {
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`);
    }
    else {
        console.log(`The director needs ${diff.toFixed(2)} leva more!`);

    }
}

movieDestination(1000000,
    "Dubai",
    "Summer",
    5
)