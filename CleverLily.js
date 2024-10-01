function cleverLily(age, washerPrice, pricePerToy) {

    let savedMoney = 0;
    let moneyGifted = 10;

    for (let birthday = 1; birthday <= age; birthday++) {

        if (birthday % 2 === 0) {
            savedMoney +=moneyGifted - 1;
            moneyGifted +=10;
        }
        else {
            savedMoney += pricePerToy;
        }
    }

    if(savedMoney >= washerPrice) {
        console.log(`Yes! ${(savedMoney - washerPrice).toFixed(2)}`);
    }
    else{
        console.log(`No! ${Math.abs(savedMoney - washerPrice).toFixed(2)}`);
    }
}

cleverLily(10, 170.00, 6)