function fishingBoat (input){
    let budget = Number(input[0]);
    let season = input[1];
    let fishers = Number(input[2]);
    let result = 0;

    if (fishers <= 6){
    switch(season){
        case "Spring":
            result = 3000;break;
        case "Summer":
        case "Autumn":
            result = 4200;break;
        case "Winter":
            result = 2600;break;
    } result = result * 0.90;
} else if (fishers > 7 && fishers <= 11){
    switch(season){
        case "Spring":
            result = 3000;break;
        case "Summer":
        case "Autumn":
            result = 4200;break;
        case "Winter":
            result = 2600;break;
    } result = result * 0.85;
} else if (fishers > 12){
    switch(season){
        case "Spring":
            result = 3000;break;
        case "Summer":
        case "Autumn":
            result = 4200;break;
        case "Winter":
            result = 2600;break;
    } result = result * 0.75;
} if (season === "Spring" && fishers % 2 == 0){
    result = result * 0.95;
} else if (season === "Summer" && fishers % 2 == 0){
    result = result * 0.95;
} else if (season === "Winter" && fishers % 2 == 0){
    result = result * 0.95;
}
if (budget >= result){
    console.log(`Yes! You have ${(budget- result).toFixed(2)} leva left.`)
} else {
    console.log(`Not enough money! You need ${(result- budget).toFixed(2)} leva.`)
}

}
fishingBoat(["2000","Winter","13"])