function areaOfFigures(input){
    let type = (input[0]);
    let area = "";
    if (type == "square") {
        let side = Number(input[1]);
        area = side * side
    } else if (type == "rectangle") {
        let sideOne = Number(input[1]);
        let sideTwo = Number(input[2]);
        area = sideOne*sideTwo
    } else if (type == "circle") {
        let r = Number(input[1]);
        area = Math.PI * r * r;
    } else if (type == "triangle") {
        let sideOne = Number(input[1]);
        let height = Number(input[2]);
        area = sideOne*height/2
    } console.log(area.toFixed(3))

}
areaOfFigures(["triangle","4.5","20"])