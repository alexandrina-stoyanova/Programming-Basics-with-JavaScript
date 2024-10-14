function charityCampaign(input){
    let days =Number(input[0]);
    let confectioner=Number(input[1]);
    let cake=Number(input[2]);
    let waffles=Number(input[3]);
    let pancake=Number(input[4]);
    let priceForCake=cake*45 ;
    let priceForWaffles=waffles*5.80;
    let priceForPancake=pancake*3.20;
    let sum =(priceForCake+priceForWaffles+priceForPancake)* confectioner;
    let sumForDays=sum*days;
    let products=sumForDays/8;
    let finalSum=sumForDays-products;
    console.log(finalSum);
}
charityCampaign(["23","8","14","30","16"])