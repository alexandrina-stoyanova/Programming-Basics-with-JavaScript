function examPreparation(input) {
    let index= 0;
    let badGrade = 0;
    let goodGrade = 0;
    let sum = 0;
    let lastTask = "";
    let consecutiveBad = Number(input[index]);
    index++;
    let task  =input[index];
    index++
   
    while (badGrade < consecutiveBad){
        let grade = Number(input[index]);
        index++;
        lastTask = task;
        task = input[index];
        index++;
        goodGrade++;
        sum+=grade;
        if (grade <= 4){
            badGrade++;
        }
        if(task === "Enough"){
            let averageGrade = sum / goodGrade;
            console.log(`Average score: ${averageGrade.toFixed(2)}`);
            console.log(`Number of problems: ${goodGrade}`);
            console.log(`Last problem: ${lastTask}`);
            break;
        }
    }
if (badGrade >= consecutiveBad){
    console.log(`You need a break, ${badGrade} poor grades.`);
}
}
examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])
