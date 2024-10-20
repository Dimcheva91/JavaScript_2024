function fruitMarket(priceStrawberris, bananasCount, orangeCount, raspberriesCount, strawberriesCount) {
    let priceRaspberries = priceStrawberris / 2;
    let priceOranges = priceRaspberries * 0.60;
    let priceBananas = priceRaspberries * 0.20;

    let totalPriceForStrawberries = priceStrawberris * strawberriesCount;
    let totalPriceForBananas = priceBananas * bananasCount;
    let totalPriceForOranges = priceOranges * orangeCount;
    let totalPriceForRaspberries = raspberriesCount * priceRaspberries;

    let price = totalPriceForStrawberries + totalPriceForBananas + totalPriceForOranges + totalPriceForRaspberries;

    console.log(price);
}

fruitMarket(63.5,
    3.57,
    6.35,
    8.15,
    2.5
)