function skiTrip (input){
    let days = Number(input[0]);
    let room = input[1];
    let evaluation = input[2];
    days = days - 1;
    let result = 0;

    if (days < 10){
        switch(room){
            case "room for one person":
                result = 18 * days ;break;
            case "apartment":
                 result = (25 * days) * 0.70;break;
            case "president apartment": 
            result = (35 * days) * 0.90;break;
        } 
    } else if (days > 10 && days <= 15){
        switch(room){
            case "room for one person":
                result = 18 * days ;break;
            case "apartment":
                 result = (25 * days) * 0.65;break;
            case "president apartment": 
            result = (35 * days) * 0.85;break;
        } 
    } else if (days > 15){
        switch(room){
            case "room for one person":
                result = 18 * days ;break;
            case "apartment": 
            result = (25 * days) * 0.50;break;
            case "president apartment": 
            result = (35 * days) * 0.80;break;
        } 
    }
    if (evaluation === "positive"){
        console.log((result * 1.25).toFixed(2))
    } else if (evaluation === "negative"){
        console.log((result * 0.90).toFixed(2))
    }

}
skiTrip (["14","apartment","positive"])