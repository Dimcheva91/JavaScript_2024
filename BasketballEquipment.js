function basketball(annualFee)
{
    let priceAnnualFee = annualFee;
    let basketballShoesPrice = (priceAnnualFee -(40*annualFee)/100);
    let basketballSuitPrice = (basketballShoesPrice -(20*basketballShoesPrice)/100);
    let basketballBallPrice = basketballSuitPrice / 4;
    let basketballAccsesoriesPrice = basketballBallPrice / 5;

    let totalPrice = priceAnnualFee + basketballShoesPrice + basketballSuitPrice + basketballBallPrice + basketballAccsesoriesPrice;

    console.log(totalPrice)
}

basketball(550);