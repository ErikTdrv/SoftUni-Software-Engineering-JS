function walking(input) {
    let index = 0;
    let goalForTheDay = 10000;
    let command = input[index];
    let stepsCounter = 0;
    index++
    
    
    while (command !== 'Going home') {
        let steps = Number(command)
        stepsCounter += steps;



        if (goalForTheDay <= stepsCounter) {
            let stepsOverTheGoal = Math.abs(stepsCounter - goalForTheDay)
            console.log(`Goal reached! Good job!`)
            console.log(`${stepsOverTheGoal} steps over the goal!`)
            break;
        } command = input[index];
        index++

    }

    if (command === 'Going home'){
        let steps = Number(input[index])
        index++
        stepsCounter += steps;
        let stepsOverTheGoal = Math.abs(stepsCounter - goalForTheDay)
        if (stepsCounter >= goalForTheDay){
            console.log(`Goal reached! Good job!`)
            console.log(`${stepsOverTheGoal} steps over the goal!`)
        }else {
            console.log(`${stepsOverTheGoal} more steps to reach goal.`)
        }
    }
}
walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])








