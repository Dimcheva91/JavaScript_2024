function toyShop(priceForTrip, puzzeleCount, doll, tedyBear, minions, truck)
{
    let puzzelePrice = 2.6;
    let dollPrice = 3;
    let teddyBearPrice = 4.1;
    let minionsPrice = 8.2;
    let truckPrice = 2;

    let discount = 0;

    let quantityOfAllProducts = puzzeleCount + doll + tedyBear + minions + truck;

    let priceAmountOfAllProducts =(puzzeleCount * puzzelePrice) + (doll * dollPrice)  + 
    (tedyBear * teddyBearPrice) + (minions * minionsPrice) + (truck * truckPrice);

    if(quantityOfAllProducts >= 50)
    {
      discount = priceAmountOfAllProducts * 0.25
    }

    let priceWithDiscount = priceAmountOfAllProducts - discount;

    let rentForShop = priceWithDiscount * 0.10;

    let moneyFromGoods = priceWithDiscount - rentForShop;

    let neededMoney = moneyFromGoods - priceForTrip; 

    let notEnough = moneyFromGoods - priceForTrip;

    if(moneyFromGoods > priceForTrip)
    {

        console.log(`Yes! ${neededMoney.toFixed(2)} lv left.`)
    }
    else
    {
        console.log(`Not enough money! ${Math.abs(notEnough.toFixed(2))} lv needed.`)
    }
}

// toyShop(40.8, 20, 25, 30, 50, 10) 
toyShop(320, 8, 2, 5,5,1) 


// function toyShop(priceForTrip, puzzeleCount, doll, teddyBear, minions, truck) {
//     let puzzlePrice = 2.6;
//     let dollPrice = 3;
//     let teddyBearPrice = 4.1;
//     let minionsPrice = 8.2;
//     let truckPrice = 2;

//     // Calculate total quantities and prices
//     let totalToys = puzzeleCount + doll + teddyBear + minions + truck;
//     let totalPrice = (puzzeleCount * puzzlePrice) + (doll * dollPrice) + 
//                      (teddyBear * teddyBearPrice) + (minions * minionsPrice) + 
//                      (truck * truckPrice);

//     // Apply discount if necessary
//     if (totalToys >= 50) {
//         totalPrice *= 0.75; // Apply 25% discount
//     }

//     // Subtract rent (10% of total price)
//     let finalPrice = totalPrice * 0.9;

//     // Calculate difference between available money and trip price
//     let moneyLeft = finalPrice - priceForTrip;

//     if (moneyLeft >= 0) {
//         console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
//     } else {
//         console.log(`Not enough money! ${Math.abs(moneyLeft).toFixed(2)} lv needed.`);
//     }
// }

// // Test case
// toyShop(320, 8, 2, 5, 5, 1);
