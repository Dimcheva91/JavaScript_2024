function depositCalculator(money, days ,depositPersentage)
{
    let accruedInterest = money* (depositPersentage / 100);
    let interestPerMonth = accruedInterest/12;
    let totalMoney = money + (days * interestPerMonth);

    console.log(totalMoney);
}

depositCalculator(200, 3, 5.7)