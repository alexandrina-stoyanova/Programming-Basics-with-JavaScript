function leapYears(input) {
    let leap = Number(input[0]);
    let year = Number(input[1]);
    for (let i = leap; i <= year; i += 4) {
        console.log(i)
    }
}
leapYears(["1908", "1919"])
