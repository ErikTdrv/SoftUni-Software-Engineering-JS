function trainTheTrainers (input){
    let index = 0;
    let judges = Number(input[index])
    index++
    let command = input[index]
    index++
    let avg = 0;
    let gradeSum = 0
    let gradeCounter = 0;
    let name = '';
    isFirst = true;
    let finalAvg = 0;
    let counterAvg = 0;

    while (command !== 'Finish'){
        name = command
        if (!isFirst){
            index++
        }
        command = Number(input[index])
        while (command !== String){
            let grade = Number(command)
            gradeSum += grade
            gradeCounter++
            finalAvg += grade
            counterAvg++
            if (gradeCounter === judges){
                gradeCounter = 0;
                avg = gradeSum/judges
                console.log(`${name} - ${avg.toFixed(2)}.`)
                index++
                command = input[index]
                isFirst = false;
                gradeSum = 0;
                break;
            }
            index++
            command = Number(input[index])   
        }       
    }
    let finalAssessment = finalAvg / counterAvg    
    console.log(`Student's final assessment is ${finalAssessment.toFixed(2)}.`)















}
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])
