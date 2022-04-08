function onTimeForTheExam(input) {

    let examHourTime = Number(input[0]);
    let examMinTime = Number(input[1]);
    let arrivingHourTime = Number(input[2]);
    let arrivingMinTime = Number(input[3]);

    let sumExamTime = examHourTime * 60 + examMinTime;
    let sumArrivingTime = arrivingHourTime * 60 + arrivingMinTime;



    if (sumExamTime < sumArrivingTime) {
        console.log('Late')
        let diff = Math.abs(sumExamTime - sumArrivingTime);
        let h = Math.floor(diff / 60)
        let m = diff % 60

        if (h >= 1) {
            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`)
            } else {
                console.log(`${h}:${m} hours after the start`)
            }

        } else {
            console.log(`${m} minutes after the start`)
        }
    } else if (sumExamTime === sumArrivingTime || sumExamTime - sumArrivingTime <= 30) {
        console.log('On time')
        let diff = Math.abs(sumArrivingTime - sumExamTime)
        if (diff !== 0) {
            let m = diff % 60;
            console.log(`${m} minutes before the start`)
        }
    } else {
        console.log('Early');
        let diff = Math.abs(sumArrivingTime - sumExamTime)
        let h = Math.floor(diff / 60);
        let m = diff % 60
        if (h >= 1) {
            if (m < 10) {
                console.log(`${h}:0${m} hours before the start`)
            } else {
                console.log(`${h}:${m} hours before the start`)
            }
        } else {
            console.log(`${m} minutes before the start`)
        }
    }
}
onTimeForTheExam(["11",
    "30",
    "10",
    "55"])





