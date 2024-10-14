function vacantionBookList(input){
    let page=Number(input[0]);
    let pageForOneHour=Number(input[1]);
    let daysForBook=Number(input[2]);
    let hoursForOneDay=(page/pageForOneHour) /daysForBook
    console.log(hoursForOneDay)
}
vacantionBookList(["212","20","2"])