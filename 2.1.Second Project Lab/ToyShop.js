function toyShop(input) {
    let excursion = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let truck = Number(input[5]);

    let pricePuzzles = Number(2.60);
    let priceDolls = Number(3);
    let priceBears = Number(4.10);
    let priceMinions = Number(8.20);
    let priceTruck = Number(2);

    let numberToys = puzzles + dolls + bears + minions + truck;
    let sumToys = (pricePuzzles * puzzles) + (priceDolls * dolls) + (priceBears * bears) + (priceMinions * minions) + (priceTruck * truck);
    if (numberToys >= 50) {
        let percent = sumToys * 0.25
        sumToys = sumToys - percent
    }

    let rent = sumToys * 0.10;
    let profit = sumToys - rent;
    if (profit >= excursion) {
        let sum = Number(profit - excursion);
        console.log(`Yes! ${sum.toFixed(2)} lv left.`)
    } else {
        let sum = Number(excursion-profit);
        console.log(`Not enough money! ${sum.toFixed(2)} lv needed.`)
    }   
}
toyShop(["40.8", "20", "25", "30", "50", "10"]) 