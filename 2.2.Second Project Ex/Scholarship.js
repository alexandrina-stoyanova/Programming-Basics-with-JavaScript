function scholarship(input) {
    let income = Number(input[0]);
    let averageSuccess = Number(input[1]);
    let minSalary = Number(input[2]);
    let socialScholarshipMoney = 0;
    let gradeScholarshipMoney = 0;

    let isSocialScholarship = false;
    let isScholarship = false;

    if (income < minSalary) {
        isSocialScholarship = true;
        isScholarship = true;
    }
    if (averageSuccess < 4.5) {
        isSocialScholarship = false;
        isScholarship = false;
    }
    if (isSocialScholarship) {
        socialScholarshipMoney = Math.floor(minSalary * 0.35);
    }
    if (averageSuccess >= 5.50) {
        gradeScholarshipMoney = Math.floor(averageSuccess * 25);
        isScholarship = true;
    }
    if (!isScholarship){
        console.log("You cannot get a scholarship!")
    }else if (gradeScholarshipMoney >= socialScholarshipMoney) {
        console.log(`You get a scholarship for excellent results ${gradeScholarshipMoney} BGN `)
    } else if (socialScholarshipMoney > gradeScholarshipMoney) {
        console.log(`You get a Social scholarship ${socialScholarshipMoney} BGN`)
    } 
}
scholarship(["300.00", "5.65", "420.00"])

