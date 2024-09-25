function godzilla(budget, actorsCount, singleCostumePrice)
{
    let decorPrice = 0.1 * budget;
    let totalCustomePrice = actorsCount * singleCostumePrice;

    if(actorsCount > 150)
    {
        totalCustomePrice *= 0.9; 
    }

    let totalPrice = decorPrice + totalCustomePrice;

    if(budget >= totalPrice)
    {
        let moneyLeft = budget - totalPrice;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
    }  
    else 
    {
        let moneyNeeded = totalPrice - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    }

}

godzilla(20000, 120, 55.5)