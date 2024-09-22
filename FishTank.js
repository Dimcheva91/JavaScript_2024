function fishTank(wigth, lenght, hight, parsent)
{
    let volumTank = wigth*lenght*hight;
    let volumTankLiters = volumTank / 1000;
    let closeProcent = parsent/100;
    let totalAmountLiters = volumTankLiters * (1-closeProcent);

    console.log(totalAmountLiters)
}

fishTank(105,77,89,18.5)





