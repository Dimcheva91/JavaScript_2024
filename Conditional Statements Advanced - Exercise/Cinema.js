function cinema(projectionTipe, rowCount, colCount) {
    let ticketCount = rowCount * colCount;
    let profit = 0;

    if (projectionTipe === 'Premiere') {
        profit = ticketCount * 12;
    }
    else if (projectionTipe === 'Normal') {
        profit = ticketCount * 7.5;
    }
    else if (projectionTipe === 'Discount') {
        profit = ticketCount * 5;
    }

    console.log(`${profit.toFixed(2)} leva`);
}

cinema("Premiere", 10, 12);
