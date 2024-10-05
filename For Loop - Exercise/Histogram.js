function histagram(input) {
    let numbersCount = input[0];
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;

    for (let index = 1; index <= numbersCount; index++) {
        let currentNum = input[index];

        if (currentNum < 200) {
            count1 += 1;
        }
        else if (currentNum <= 399) {
            count2 += 1;
        }
        else if (currentNum <= 599) {
            count3 += 1;
        }
        else if (currentNum <= 799) {
            count4 += 1;
        }
        else {
            count5++;
        }
    }

    let percent1 = (count1 / numbersCount) *100;
    let percent2 = (count2 / numbersCount) *100;
    let percent3 = (count3 / numbersCount) *100;
    let percent4 = (count4 / numbersCount) *100;
    let percent5 = (count5 / numbersCount) *100;

    console.log(`${percent1.toFixed(2)}%`);
    console.log(`${percent2.toFixed(2)}%`);
    console.log(`${percent3.toFixed(2)}%`);
    console.log(`${percent4.toFixed(2)}%`);
    console.log(`${percent5.toFixed(2)}%`);
}

histagram([3,
    1,
    2,
    999])
