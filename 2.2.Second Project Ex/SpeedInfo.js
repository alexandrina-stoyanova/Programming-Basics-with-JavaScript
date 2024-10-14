function speedInfo(input) {
    let speed = input[0];
    let kind = ("");
    if (speed <= 10) {
        kind = "slow";
    } else if (speed <= 50) {
        kind = "average";
    } else if (speed <= 150) {
        kind = "fast"
    } else if (speed <= 1000) {
        kind = "ultra fast"
    } else {
        kind = "extremely fast"
    }
    console.log(kind);
}
speedInfo(["49.5"]);