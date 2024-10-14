function minNumber(input) {
    let n = Number(input[0]);
    let minNumber = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i <= n; i++) {
        let currentNumb = Number(input[i]);
        if (currentNumb < minNumber) {
            minNumber = currentNumb;
        }
    }
    console.log(minNumber);

}
minNumber(["2", "100", "99"])
