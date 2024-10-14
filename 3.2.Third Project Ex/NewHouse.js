function newHouse(input) {
    let flower = input[0];
    let numFlower = Number(input[1]);
    let budget = Number(input[2]);
    let result = 0;

    switch (flower) {
        case "Roses":
            result = numFlower * 5;
            if (numFlower > 80) {
                result = (numFlower * 5) * 0.90;

            }; break;
        case "Dahlias":
            result = numFlower * 3.80;
            if (numFlower > 90) {
                result = (numFlower * 3.80) * 0.85;
            } ;break;
        case "Tulips":
            result = numFlower * 2.80;
        if (numFlower > 80){
            result = (numFlower * 2.80)*0.85;
        } ;break;
        case "Narcissus":
            result = numFlower * 3;
        if (numFlower < 120){
            result = (numFlower * 3)* 1.15;
        } ;break;
        case "Gladiolus":
            result = numFlower * 2.50;
        if (numFlower < 80){
            result = (numFlower * 2.50) * 1.20;
        } ;break;
    }
    if (result <= budget) {
        console.log(`Hey, you have a great garden with ${numFlower} ${flower} and ${(budget - result).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(result - budget).toFixed(2)} leva more.`)
    }
}
newHouse(["Tulips", "88", "260"])