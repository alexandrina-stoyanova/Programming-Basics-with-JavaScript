function worldSwimmingRecord(input) {
    let recordSeconds = Number(input[0]);
    let meter = Number(input[1]);
    let secondsForMeter = Number(input[2]);

    let record = meter * secondsForMeter;
    let delay =Math.floor(meter/15)*12.5;
    let sumRecord = record + delay;

    if (sumRecord < recordSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${sumRecord.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(sumRecord - recordSeconds).toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord(["10464", "1500", "20"]);
