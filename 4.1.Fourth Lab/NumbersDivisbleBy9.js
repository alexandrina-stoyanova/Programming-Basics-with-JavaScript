function numbersDivisible (input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let sum = 0;
   
    for (let i = x; i < y; i++){
        if(i % 9 ==0){
            sum += i;
        }
    }
console.log(`The sum: ${sum}`)
for (let z=x;z<=y; z++){
    if(z % 9 == 0){
        console.log(z)
    }
}
}
numbersDivisible(["100", "200"])