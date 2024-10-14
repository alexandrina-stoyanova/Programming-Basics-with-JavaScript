function combinations(input) {
    let n = Number(input[0]);
    let validCombination = 0;
    for (let x = 0; x <= n; x++) {
        for (let y = 0; y <= n; y++) {
            for (let z = 0; z <= n; z++) {
                if (x + y + z == n) {
                    validCombination++;
                    
                }
            }
        }
    }
    console.log(validCombination);
}
combinations(["25"])