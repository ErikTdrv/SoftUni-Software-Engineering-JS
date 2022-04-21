function theHuntingGames(arr){

    let days = Number(arr.shift())
    let playersCount = Number(arr.shift())
    let groupEnergy = Number(arr.shift())
    let waterPerDay = Number(arr.shift())
    let foodPerDay= Number(arr.shift())
    let neededWater = playersCount*waterPerDay*days
    let neededFood = playersCount*foodPerDay*days
    let currDays = 0
    let finished = false;
    // arr.unshift(0)
    for(let i = 0; i < arr.length; i++){
        let energyLost = Number(arr[i])
        groupEnergy -= energyLost
        if (groupEnergy <= 0){
            break;
        }
        currDays++
        if (currDays %2 === 0){
            groupEnergy += groupEnergy*0.05
            neededWater = neededWater*0.70
        }
        if (currDays %3 === 0){
            neededFood -= neededFood/playersCount
            groupEnergy = groupEnergy*1.10
        }
        

    }
    if (currDays === arr.length){
        finished = true
    }
    if(groupEnergy >= 0 && finished === true){
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`)
    }else {
        console.log(`You will run out of energy. You will be left with ${neededFood.toFixed(2)} food and ${neededWater.toFixed(2)} water.`)
    }
}
//left with 229.17 food and 118.59 water.
theHuntingGames(["12",
"6",
"4430",
"9.8",
"5.5",
"620.3",
"840.2",
"960.1",
"220",
"340",
"674",
"365",
"345.5",
"212",
"412.12",
"258",
"496"])	

