function hotelRoom(month, nights) {
    let studioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case 'May':
        case 'October':
            studioPrice = nights * 50;
            apartmentPrice = nights * 65;

            if (nights > 7 && nights <= 14) {
                studioPrice *= 0.95;
            }
            else if (nights > 14) {
                studioPrice *= 0.7;
            }
            break;

        case 'June':
        case 'September':
            studioPrice = nights * 75.2;
            apartmentPrice = nights * 68.7;

            if (nights > 14) {
                studioPrice *= 0.8;
            }
            break;

        case 'July':
        case 'August':
            studioPrice = nights * 76;
            apartmentPrice = nights * 77;
            break;
    }

    if (nights > 14) {
        apartmentPrice *= 0.9;
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoom("May", 15);