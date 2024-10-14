function fruitShop(input) {
    let product = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let result = 0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (product) {
                case "banana":console.log((result = quantity * 2.50).toFixed(2)); break;
                case "apple":console.log((result = quantity * 1.20).toFixed(2)); break;
                case "orange": console.log((result = quantity * 0.85).toFixed(2)); break;
                case "grapefruit": console.log((result = quantity * 1.45).toFixed(2)); break;
                case "kiwi": console.log((result = quantity * 2.70).toFixed(2)); break;
                case "pineapple": console.log((result = quantity * 5.50).toFixed(2)); break;
                case "grapes": console.log((result = quantity * 3.85).toFixed(2)); break;
                default: console.log("error"); break;
            }
            break;
        case "Saturday":
        case "Sunday":
            switch (product) {
                case "banana": console.log((result = quantity * 2.70).toFixed(2)); break;
                case "apple": console.log((result = quantity * 1.25).toFixed(2)); break;
                case "orange": console.log((result = quantity * 0.90).toFixed(2)); break;
                case "grapefruit": console.log((result = quantity * 1.60).toFixed(2)); break;
                case "kiwi": console.log((result = quantity * 3.00).toFixed(2)); break;
                case "pineapple": console.log((result = quantity * 5.60).toFixed(2)); break;
                case "grapes": console.log((result = quantity * 4.20).toFixed(2)); break;
            }break;

        default: console.log("error"); break;
    }

}
fruitShop(["apple", "Tuesday", "2"])