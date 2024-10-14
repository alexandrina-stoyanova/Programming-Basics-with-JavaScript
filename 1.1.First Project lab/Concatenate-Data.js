function concatenateData(input){
    let name = (input[0]);
    let surname = (input[1]);
    let years = Number(input[2]);
    let town = (input[3]);
    console.log("You are " + name + " " + surname + ", a " + years + "-years old person from " + town + ".");
console.log(`You are ${name}, ${surname}`);
}
concatenateData(["Alexandrina","Nedelcheva", 24, "Varna"])