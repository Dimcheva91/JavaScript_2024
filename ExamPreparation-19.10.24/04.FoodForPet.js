function foodForPet(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;

    let totalFood = Number(input[index]);
    index++;

    let eatenDog = 0;
    let eatenCat = 0;
    let biscuits = 0;

    for (let i = 1; i <= days; i++) {
        let eatenFoodDog = Number(input[index]);
        index++;
        let eatenFoodCat = Number(input[index]);
        index++;

        eatenDog += eatenFoodDog;
        eatenCat += eatenFoodCat;
        let tempFood = eatenFoodDog + eatenFoodCat;
        if (i % 3 === 0) {
            biscuits += Math.ceil(tempFood * 0.1);
        }
    }

    let totalEatenFood = eatenCat + eatenDog;
    let presentEatenFood = totalEatenFood / totalFood * 100;
    let presentEatenDogFood = eatenDog / totalEatenFood * 100;
    let presentEatenCatFood = eatenCat / totalEatenFood * 100;

    console.log(`Total eaten biscuits: ${biscuits}gr.`);
    console.log(`${presentEatenFood.toFixed(2)}% of the food has been eaten.`);
    console.log(`${presentEatenDogFood.toFixed(2)}% eaten from the dog.`);
    console.log(`${presentEatenCatFood.toFixed(2)}% eaten from the cat.`);
}

foodForPet(["3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40"]);
