function building (input){
    let floor = Number(input[0]);
    let room = Number(input[1]);
    for (let x = floor; x>0 ; x--){
        let result ="";
        for (let y = 0;y <room; y++){
            if(x===floor){
            result += "L"+x+y+" ";
            }else if(x%2===0){
                result +="O"+x+y+" ";
            } else {
                result+= "A"+x+y+" ";
            }
        }
        console.log(result);
}

}
building(["6", "4"])