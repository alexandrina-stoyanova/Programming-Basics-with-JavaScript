function volleyball(input) {
    let year = (input[0]);
    let playday = Number(input[1]);
    let holiday = Number(input[2]);
    let weeksSofia = 48 -holiday;
    let weekendSofia = weeksSofia * 0.75;
    let playdaySofia = playday * 2.0 / 3;
    let allGames =weekendSofia + playdaySofia + holiday;
    let percent = 0;

    if (year === "leap") {
        percent = allGames * 0.15;
        allGames = allGames + percent;
        
    } 
    console.log(Math.floor(allGames));
}
volleyball(["leap", "2", "3"])