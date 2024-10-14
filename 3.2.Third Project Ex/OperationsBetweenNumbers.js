function operationBetweenNumbers (input){
    let numOne = Number(input[0]);
    let numTwo = Number(input[1]);
    let operator = input[2];
    let result = 0;
    let check = "";
    let all = "";
    switch (operator){
        case "+":
            result = numOne + numTwo;
            if (result % 2 === 0){
                check = "even";
            } else {
                check = "odd";
            };break;
        case "-":
            result = numOne - numTwo;
            if (result % 2 === 0){
                check = "even";
            } else {
                check = "odd";
            };break;
        case "*":
            result = numOne * numTwo;
            if (result % 2 === 0){
                check = "even";
            } else {
                check = "odd";
            };break;
        case "/":
             result = numOne / numTwo;
        if (numTwo !== 0){
            all = (`${numOne} / ${numTwo} = ${result.toFixed(2)}`);
        }  else  {
            all = (`Cannot divide ${numOne} by zero`);
        } ;break;
        case "%": 
        result = numOne % numTwo ;
        if (numTwo !== 0){
        all = (`${numOne} % ${numTwo} = ${result}`);
        } else {
            all = (`Cannot divide ${numOne} by zero`);
        }
    } 
    if ( check === "even" || check === "odd"){
    all = (`${numOne} ${operator} ${numTwo} = ${result} - ${check} `);
    } console.log(all);
}
operationBetweenNumbers(["10","0","%"])