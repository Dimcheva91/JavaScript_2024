function worldSwimmingRecord(currentRecord, distance, timePerMeter) {
    let initialTime = distance * timePerMeter;
    let delaysCount = Math.floor(distance / 15);
    let totalDelayTime = delaysCount * 12.5;

    let totalTime = initialTime + totalDelayTime;

    if (totalTime >= currentRecord) {
        let secondsMore = totalTime - currentRecord;
        console.log(`No, he failed! He was ${secondsMore.toFixed(2)} seconds slower.`);
    }
    else {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
}

worldSwimmingRecord(10464, 1500, 20);
worldSwimmingRecord(55555.67, 3017, 5.03);