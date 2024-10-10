function shoppingNoExpireTime(budget, GPUCount, CPUCount, RAMCount) {
    let GPUPrice = GPUCount * 250;
    let CPUPrice = GPUPrice * 0.35 * CPUCount;
    let RAMPrice = GPUPrice * 0.10 * RAMCount;

    let totalPrice = GPUPrice + CPUPrice + RAMPrice;

    if (GPUCount > CPUCount) {
        totalPrice = totalPrice * 0.85;
    }

    diff = Math.abs(totalPrice - budget);

    if (budget >= totalPrice) {

        console.log(`You have ${diff.toFixed(2)} leva left!`);
    }
    else {

        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
    }
}

shoppingNoExpireTime(900, 2, 1, 3);
shoppingNoExpireTime(920.45, 3, 1, 1);