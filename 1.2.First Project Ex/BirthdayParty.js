function birthdayParty(input){
    let rent=Number(input[0]);
    let cake=Number((rent * 20) / 100);
    let drinks=Number(cake - (cake * 45) / 100);
    let animator=Number(rent / 3);
    let result=Number(rent + cake + drinks + animator);
    console.log(result);
}
birthdayParty(["2250"])