function courierExpress(input) {
    let index = 0;
    let weight = Number(input[index]);
    index++;
    let typeOfService = input[index];
    index++;
    let distance = Number(input[index]);

    let pricePerKm = 0;
    let additionalCharge = 0;

    switch (typeOfService) {
        case 'standard':
            if (weight <= 1) {
                pricePerKm = 0.03;
            } else if (weight <= 9.99) {
                pricePerKm = 0.05;
            } else if (weight <= 39.99) {
                pricePerKm = 0.10;
            } else if (weight <= 89.99) {
                pricePerKm = 0.15;
            } else if (weight <= 150) {
                pricePerKm = 0.20;
            }
            break;

        case 'express':
            if (weight <= 1) {
                pricePerKm = 0.03;
                additionalCharge = 0.03 * 0.8 * weight;
            } else if (weight <= 9.99) {
                pricePerKm = 0.05;
                additionalCharge = 0.05 * 0.4 * weight;
            } else if (weight <= 39.99) {
                pricePerKm = 0.10;
                additionalCharge = 0.10 * 0.05 * weight;
            } else if (weight <= 89.99) {
                pricePerKm = 0.15;
                additionalCharge = 0.15 * 0.02 * weight;
            } else if (weight <= 150) {
                pricePerKm = 0.20;
                additionalCharge = 0.20 * 0.01 * weight;
            }
            break;
    }

    let totalPrice = (pricePerKm * distance) + (additionalCharge * distance);

    console.log(`The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${totalPrice.toFixed(2)} lv.`);
}

courierExpress(["1.5", "standard", "100"]);