function graduation(input){
    let index = 0;
    let name = input[index];
    index++;
    let klass = 0;
    let avGrade = 0;

    while(index<=12){
        let grade = Number(input[index]);
        klass+=1;
        if(grade<4){
            console.log(`${name} has been excluded at ${klass} grade`);
            break;
        }
        index++;
        avGrade+=grade;
        if(klass===12){
            console.log(`${name} graduated. Average grade: ${(avGrade/12).toFixed(2)}`);
            break;
        }
    }
}
graduation(["Gosho","5","5.5","6","5.43","5.5","6",
"5.55","5","6","6","5.43","5"])

