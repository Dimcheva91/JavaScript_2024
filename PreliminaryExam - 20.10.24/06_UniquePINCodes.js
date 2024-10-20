// function generatePinCodes(numOne, numTwo, numThree) {
//     for (let index = 2; index <= numOne; index += 2) {
//         for (let num = 2; num <= numTwo; num++) {

//             let isPrime = true;
//             if (num < 2) {
//                 isPrime = false;
//             } else {
//                 for (let f = 2; f <= Math.sqrt(num); f++) {
//                     if (num % f === 0) {
//                         isPrime = false;
//                         break;
//                     }
//                 }
//             }

//             if (isPrime == true) {
//                 for (let k = 2; k <= numThree; k += 2) {
//                     console.log(`${index} ${num} ${k}`);
//                 }
//             }
//         }
//     }
// }

// generatePinCodes(8, 2, 8);


function generatePinCodes(input) {
    let numOne = input[0];
    let numTwo = input[1];
    let numThree = input[2];

    for (let index = 2; index <= numOne; index += 2) {
        for (let num = 2; num <= numTwo; num++) {

            let isPrime = true;
            if (num < 2) {
                isPrime = false;
            } else {
                for (let d = 2; d <= Math.sqrt(num); d++) {
                    if (num % d === 0) {
                        isPrime = false;
                        break;
                    }
                }
            }

            if (isPrime === true) {
                for (let k = 2; k <= numThree; k += 2) {
                    console.log(`${index} ${num} ${k}`);
                }
            }
        }
    }
}

generatePinCodes([3, 5, 5]);

