function cake(input){
    let index =0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let cakeSize = w*l;
    
    let command = input[index];
    index++;
    while(command !== "STOP"){
        cakeSize-=Number(input[index-1]);
        if(index >input.length - 1){
            if(cakeSize<=0){
                console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
            } else {
                console.log(`${Math.abs(cakeSize)} pieces are left.`);
            }
            index++;
            break;
        }
        command= input[index];
        index++;
    }
    if (index <= input.length){
        if (cakeSize <= 0){
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
        } else{
            console.log(`${Math.abs(cakeSize)} pieces are left.`);
        }
    }
}
cake(["10","10","20","20","20","20","21"])