function onTimeForTheExam(input) {
    let hourExam = Number(input[0]);
    let minutesExam = Number(input[1]);
    let hourArrived = Number(input[2]);
    let minutesArrived = Number(input[3]);
    let timeOfExam = (hourExam * 60) + minutesExam;
    let timeArrived = (hourArrived * 60) + minutesArrived;
    let difference = timeOfExam - timeArrived;
    if (difference > 30) {
        console.log("Early")
        if (difference >= 60) {
            if (difference % 60 < 10) {
                console.log(`${Math.trunc(difference / 60)}:0${difference % 60} hours before the start`);
            } else {
                console.log(`${Math.trunc(difference / 60)}:${difference % 60} hours before the start`);
            }
        } else {
            console.log(`${difference % 60} minutes before the start`);
        } 
    }else if (difference >= 0) {
            console.log(`On time`);
            console.log(`${difference} minutes before the start`);
        } else {
            console.log(`Late`);
            if (Math.abs(difference) >= 60) {
                if (Math.abs(difference) % 60 < 10) {
                    console.log(`${Math.trunc(Math.abs(difference) / 60)}:0${Math.abs(difference) % 60} hours after the start`);
                } else {
                    console.log(`${Math.trunc(Math.abs(difference) / 60)}:${Math.abs(difference) % 60} hours after the start`);
                }
            } else {
                console.log(`${Math.abs(difference) % 60} minutes after the start`)
            }
        }
    }
onTimeForTheExam(["14", "00", "13", "55"])