function jorney (input){
    let budget = Number(input[0]);
    let season = input[1];
    let result = 0;
    let destinacy = "";
    let type = "";

    if (budget <= 100){
        destinacy = "Bulgaria";
        switch(season){
            case "summer":
                type = "Camp";
                result = budget * 0.30;break;
            case "winter":
                type = "Hotel";
                result = budget * 0.70;break;
        }

    } else if (budget <= 1000){
        destinacy = "Balkans";
        switch(season){
            case "summer":
                type ="Camp";
                result = budget * 0.40;break;
            case "winter":
                type = "Hotel";
                result = budget * 0.80;break;
        }

    } else if (budget > 1000){
        destinacy = "Europe";
        switch(season){
            case "summer":
            case "winter":
                type = "Hotel"
                result = budget * 0.90;break;
        }
    } 
    console.log(`Somewhere in ${destinacy}`)
    console.log(`${type} - ${result.toFixed(2)}`)
}
jorney(["678.53","winter"])