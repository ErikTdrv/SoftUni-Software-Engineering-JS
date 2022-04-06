function tennisRanklist (input){
    let index = 0;
    let tournamentsCount = Number(input[index])
    index++;
    let startingPoints = Number(input[index])
    index++;
    
    let totalPoints = 0;
    let wonTournaments = 0;
    let wonPercentage = 0;


    for (let i = 0; i < tournamentsCount; i++){
        let reachedStage = input[index]
        index++;
        
        if (reachedStage === 'W'){
            totalPoints += 2000;
            wonTournaments += 1;
        }else if (reachedStage === 'F'){
            totalPoints += 1200;
        }else if (reachedStage === 'SF'){
            totalPoints += 720
        }
        
    }
    let averagePointsWon = (totalPoints / tournamentsCount);

    wonPercentage = wonTournaments/tournamentsCount * 100 
    let finalPoints = totalPoints + startingPoints;

    console.log(`Final points: ${finalPoints}`)
    console.log(`Average points: ${Math.floor(averagePointsWon)}`)
    console.log(`${wonPercentage.toFixed(2)}%`)




}
tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"])


