// function roomPainting(nailon, peintBucket, AMB, hours)
// {
//     let nailonPrice = 1.5;
//     let peintBucketPrice = 14.5;
//     let AMBPrice = 5;

//     let nailonSum = (nailon + 2) * nailonPrice;
//     let peintBucketSum = (peintBucket * 0.9 / peintBucket) * peintBucketPrice;
//     let AMBSum = AMB * AMBPrice;

//     let sumOfMaterial = nailonSum + peintBucketSum + AMBSum + 0.4;
//     let sumOfHandyManHours = (sumOfMaterial * 0.3)*8;

//     let totalSum = sumOfMaterial + sumOfHandyManHours;

//     console.log(totalSum);
// }

// roomPainting(5,10,10,1)

function calculateRenovationCosts(nylon, paint, thinner, hours) {
    // Цени на материалите
    const nylonPrice = 1.50;
    const paintPrice = 14.50;
    const thinnerPrice = 5.00;

    // Изчисляваме необходимите количества
    const totalNylon = nylon + 2; // Добавяме 2 кв.м. найлон
    const totalPaint = paint * 1.10; // Добавяме 10% боя
    const bagsPrice = 0.40; // Цена за торбички

    // Изчисляваме цените за всеки материал
    const totalNylonCost = totalNylon * nylonPrice;
    const totalPaintCost = totalPaint * paintPrice;
    const totalThinnerCost = thinner * thinnerPrice;

    // Сумата на всички разходи за материали
    const materialsCost = totalNylonCost + totalPaintCost + totalThinnerCost + bagsPrice;

    // Сумата за майсторите (30% от разходите за материали за всеки час)
    const workersCost = materialsCost * 0.30 * hours;

    // Обща сума
    const totalCost = materialsCost + workersCost;

    // Отпечатваме резултата
    console.log(totalCost);
}

// Примерен вход
calculateRenovationCosts(10, 11, 4, 8);