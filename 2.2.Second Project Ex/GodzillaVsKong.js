function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let statist = Number(input[1]);
    let priceOneStatist = Number(input[2]);
    let sumPriceClothes = statist * priceOneStatist;
    let decor = budget * 0.1;
    if (statist > 150) {
        sumPriceClothes = sumPriceClothes * 0.9;
    }
    let sum = sumPriceClothes + decor;
    if (sum > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(sum - budget).toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - sum).toFixed(2)} leva left.`);
    }
}
godzillaVsKong(["15437.62","186","57.99"])

