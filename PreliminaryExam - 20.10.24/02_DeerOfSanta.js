function calculateFood(input) {

    let daysAway = Number(input[0]);
    let foodLeft = Number(input[1]);
    let foodOne = Number(input[2]);
    let foodTwo = Number(input[3]);
    let foodThree = Number(input[4]);

    let totalFoodNeeded = (foodOne * daysAway) + (foodTwo * daysAway) + (foodThree * daysAway);
    if (foodLeft >= totalFoodNeeded) {
        let foodLeftOver = Math.floor(foodLeft - totalFoodNeeded);
        console.log(`${foodLeftOver} kilos of food left.`);
    } else {
        let foodShortage = Math.ceil(totalFoodNeeded - foodLeft);
        console.log(`${foodShortage} more kilos of food are needed.`);
    }
}

calculateFood(["5",
    "10",
    "2.1",
    "0.8",
    "11"])
