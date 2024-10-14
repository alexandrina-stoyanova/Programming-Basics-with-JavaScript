function projectCreation(input){
    let nameOfArchitect = (input[0]);
    let numberOfProject = Number(input[1]); 
    let result = numberOfProject * 3 ;
    console.log(`The architect ${nameOfArchitect} will need ${result} hours to complete ${numberOfProject} project/s.`)
}
projectCreation(["Alex", 4 ])
