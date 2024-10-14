function tradeCommissions (input){
    let city = input[0];
    let sells = Number(input[1]);
    let commission = 0;
    
    if (sells >= 0 && sells <= 500){
        switch(city){
            case "Sofia":commission= sells * 0.05;break;
            case "Varna":commission= sells * 0.045;break;
            case "Plovdiv":commission= sells * 0.055;break    
            default : "error"; break;
        }
    } else if (sells > 500 && sells <= 1000){
        switch(city){
            case "Sofia":commission= sells * 0.07;break;
            case "Varna":commission= sells * 0.075;break;
            case "Plovdiv":commission= sells * 0.08;break    
            default : "error"; break;
        }

    } else if (sells > 1000 && sells <= 10000){
        switch(city){
            case "Sofia":commission= sells * 0.08;break;
            case "Varna":commission= sells * 0.10;break;
            case "Plovdiv":commission= sells * 0.12;break    
            default : "error"; break;
        }

    } else if (sells > 10000){
        switch(city){
            case "Sofia":commission= sells * 0.12;break;
            case "Varna":commission= sells * 0.13;break;
            case "Plovdiv":commission= sells * 0.145;break    
            default : "error"; break;
        }

    }
    if (commission !== 0.0) {
      console.log(commission.toFixed(2))
    } else {
        console.log("error")
    }
}
tradeCommissions(["Kaspichan","-50"])
