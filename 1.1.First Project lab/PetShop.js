function petShop(input){
    let numberOfDogs = input[0];
    let numberOfOtherAnimals = input[1];
    let priceOfFoodForDogs = numberOfDogs * 2.50
    let priceOfFoodForOtherAnimals = numberOfOtherAnimals * 4 
    let result= priceOfFoodForDogs + priceOfFoodForOtherAnimals;

    console.log(`${result} lv.`) 
}
petShop([5,4])