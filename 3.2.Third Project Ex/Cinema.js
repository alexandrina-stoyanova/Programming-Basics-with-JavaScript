function cinema (input){
    let projection = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);
    let result = r * c ;
    let sum = 0;
    switch (projection){
        case "Premiere": sum = result * 12;break;
        case "Normal": sum = result * 7.50;break;
        case "Discount": sum = result * 5;break;
    }
    console.log(`${sum.toFixed(2)} leva`)
}
cinema(["Premiere","10","12"])