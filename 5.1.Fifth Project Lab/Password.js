function password(input){
    let index = 0;
    let name = input[index];
    index++;
    let password = input[index];
    index++;
    while(true){
        let command = input[index];
        index++;
        if(command === password){
            console.log(`Welcome ${name}!`)
            break;
        }
    }

}
password(["Nakov","1234","Pass","1324","1234"])
