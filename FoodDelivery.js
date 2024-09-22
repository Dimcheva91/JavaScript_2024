function foodDelivery(chickenMenu, fishMenu, veganMenu)
{
    let chickenPrice = chickenMenu * 10.35;
    let fishPrice = fishMenu * 12.4;
    let veganPrice = veganMenu * 8.15;

    let menuSum = chickenPrice + fishPrice + veganPrice;
    let desert = (20 * menuSum)/100;
    let shipingPrice = 2.5;

    let totalPrice = menuSum + desert + shipingPrice;

    console.log(totalPrice);
}

foodDelivery(9,2,6)