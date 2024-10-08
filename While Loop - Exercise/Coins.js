function coins(change) {
    let changeToStotinki = Math.round(change * 100);
    let coinsUsed = 0;

    while (changeToStotinki !== 0) {

        if (changeToStotinki >= 200) {
            changeToStotinki -= 200;
        }
        else if (changeToStotinki >= 100) {
            changeToStotinki -= 100;
        }
        else if (changeToStotinki >= 50) {
            changeToStotinki -= 50;
        }
        else if (changeToStotinki >= 20) {
            changeToStotinki -= 20;
        }
        else if (changeToStotinki >= 10) {
            changeToStotinki -= 10;
        }
        else if (changeToStotinki >= 5) {
            changeToStotinki -= 5;
        }
        else if (changeToStotinki >= 2) {
            changeToStotinki -= 2;
        }
        else if (changeToStotinki >= 1) {
            changeToStotinki -= 1;
        }

        coinsUsed++;
    }

    console.log(coinsUsed);
}

coins(0.56);




