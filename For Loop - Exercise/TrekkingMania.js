function trekkingMania(input) {
    let groupNumber = Number(input[0]);

    let musala = 0;
    let montblanc = 0;
    let kilimanjaro = 0;
    let K2 = 0;
    let everest = 0;

    for (let index = 1; index <= groupNumber; index++) {
        let alpinists = Number(input[index]);

        if (alpinists <= 5) {
            musala += alpinists;
        }
        else if (alpinists <= 12) {
            montblanc += alpinists;
        }
        else if (alpinists <= 25) {
            kilimanjaro += alpinists;
        }
        else if (alpinists <= 40) {
            K2 += alpinists;
        }
        else {
            everest += alpinists;
        }
    }

    let allAlppinists = musala + montblanc + kilimanjaro + K2 + everest;

    let percentMusala = (musala / allAlppinists) * 100;
    let percentMontblanc = (montblanc / allAlppinists) * 100;
    let percentKilimanjaro = (kilimanjaro / allAlppinists) * 100;
    let percentK2 = (K2 / allAlppinists) * 100;
    let percentEverest = (everest / allAlppinists) * 100;

    console.log(`${percentMusala.toFixed(2)}%`);
    console.log(`${percentMontblanc.toFixed(2)}%`);
    console.log(`${percentKilimanjaro.toFixed(2)}%`);
    console.log(`${percentK2.toFixed(2)}%`);
    console.log(`${percentEverest.toFixed(2)}%`);
}


trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
