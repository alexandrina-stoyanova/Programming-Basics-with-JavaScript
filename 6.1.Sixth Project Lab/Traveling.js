function traveling(input) {
    let index = 0;
    let command = input[index++];

    while (command !== "End") {
        let minBudget = Number(input[index++]);
        let sum =0;
        while (sum <= minBudget) {
            let currentNumb = Number(input[index++]);
            sum += currentNumb;
            if (sum >= minBudget) {
                console.log(`Going to ${command}!`)
                break;
            } else { }
        }
        command = input[index++];
    }
}
traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])


