function softuniReception (arr){

    let countHours = 0
    let answersPerHour = 0;
    let studentsCount = arr.pop()
    let newArr = arr.map(Number)
    newArr.map(x => answersPerHour += x)
    

    while (Number(studentsCount) > 0){
        countHours++
        if (countHours %4 === 0 && countHours !== 0){
            continue;
        }
        studentsCount -= answersPerHour
    }

    // for (let i = 0; studentsCount > 0; i++){
    //     if (i %4 === 0 && countHours !== 0){
    //         countHours++
    //         continue;
    //     }
    //     countHours++
    //     studentsCount -= answersPerHour
    // }


    console.log(`Time needed: ${countHours}h.`)
}
softuniReception(['1','2','3','45'])