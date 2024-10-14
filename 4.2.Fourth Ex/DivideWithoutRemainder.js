function divideWithoutRemainder(input) {
    let n = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    for (let i = 1; i <= n; i++) {
        let currentNumber = Number(input[i]);
        if (currentNumber % 2 === 0){
            p1++;
        }
        if (currentNumber % 3 === 0){
            p2++;
        } 
        if (currentNumber % 4 === 0) {
            p3++;
        }
    }
    console.log(`${((p1 / n)*100).toFixed(2)}%`);
    console.log(`${((p2 / n)*100).toFixed(2)}%`);
    console.log(`${((p3 / n)*100).toFixed(2)}%`);

}
divideWithoutRemainder(["10", "680", "2", "600", "200", "800",
    "799", "199", "46", "128", "65"])
