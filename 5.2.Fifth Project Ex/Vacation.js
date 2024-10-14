function weekend(input) {
    let budget = Number(input[0]);
    let money = Number(input[1]);
    let index = 2;
    let days = 0;
    let spendDays = 0;

    while (true) {
        let command = input[index++];
        let amount = Number(input[index]);
        if (command === "spend") {
            spendDays++;
            days++;
            if (amount > money) {
                money = 0;
            } else {
                money -= amount;
            }
        } else if (command === "save") {
            spendDays = 0;
            days++;
            money += amount;
        }
        if (spendDays === 5) {
            console.log(`You can't save the money.`);
            console.log(`${days}`);
            break;
        }
        if (money >= budget) {
            console.log(`You saved the money for ${days} days.`);
            break;
        }
        index++;
    }

}
weekend(["2000", "1000", "spend", "1200", "save", "2000"])
