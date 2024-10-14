function hotelRoom(input) {
    let month = input[0];
    let night = Number(input[1]);
    let resultOne = 0;
    let result = 0;

    switch (month) {
        case "May":
        case "October":
            if (night <= 7){
                resultOne = night * 50;
                result = night * 65;
            } else if (night > 7 && night <= 14){
                resultOne = (night * 50)* 0.95;
                result = night * 65;
            } else if (night > 14){
                resultOne = (night * 50)* 0.70;
                result = (night * 65) * 0.90;
            } break;
        case "June":
        case "September":
            if (night > 14) {
                resultOne = (night * 75.2) * 0.80;
                result = (night * 68.7) * 0.90;
            } else if (night<=14){
                resultOne = night * 75.2;
                result = (night* 68.7);
            } break;
        case "July":
        case "August":
            if (night <= 14){
                resultOne = night * 76;
                result = night *77;
            } else if (night > 14){
                resultOne = night*76;
                result = (night * 77)*0.90;
            } break;
    } 
 console.log(`Apartment: ${result.toFixed(2)} lv.`)
console.log(`Studio: ${resultOne.toFixed(2)} lv.`)
}
hotelRoom(["May", "15"])