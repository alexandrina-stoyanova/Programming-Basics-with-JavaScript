function sumOfTwoNumbers(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let magicNumb = Number(input[2]);
    let isFound = false;
    let counter = 0;
    for (let i = x; i <= y; i++) {
        for (let z = x; z <= y; z++) {
            counter++;
            if(i + z === magicNumb){
                console.log(`Combination N:${counter} (${i} + ${z} = ${magicNumb})`);
            isFound = true;
            break;
            } 
        }
        if(isFound){
         break;
        }
    } 
    if(!isFound){
        console.log(`${counter} combinations - neither equals ${magicNumb}`)
    }

}
sumOfTwoNumbers(["1", "10", "5"])
