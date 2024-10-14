function fruitMarket(input){
    let priceForStrawberries=Number(input[0]);
    let banana=Number(input[1]);
    let orange=Number(input[2]);
    let raspberries=Number(input[3]);
    let strawberries=Number(input[4]);
    let priceForRaspberries=priceForStrawberries / 2;
    let priceForOrange= priceForRaspberries- ((priceForRaspberries*40) / 100);
    let priceForBanana= priceForRaspberries- ((priceForRaspberries*80) / 100);
    let sumForStrawberries=strawberries*priceForStrawberries;
    let sumForBanana=banana*priceForBanana;
    let sumForOrange=orange*priceForOrange;
    let sumForRaspberries=raspberries*priceForRaspberries;
    let finalSum=(sumForBanana+sumForOrange+sumForRaspberries+sumForStrawberries);
    console.log(finalSum);
}
fruitMarket(["48","10","3.3","6.5","1.7"])