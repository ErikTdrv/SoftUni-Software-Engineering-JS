function counterStrike (arr){

    let energy = Number(arr.shift())
    let won = 0;
    let command = arr.shift()
    let isEnough = true;
    while (command !== 'End of battle'){
        if (energy - Number(command) < 0){
            isEnough = false;
            break;
        }else {
            energy -= command
            won++
        }
        if (won %3 === 0){
            energy += won
        }
        command = arr.shift()
    }
    // if (won === arr.length - 1 || energy > 0){
    //     console.log(`Won battles: ${won}. Energy left: ${energy}`)
    // }else {
    //     console.log(`Not enough energy! Game ends with ${won} won battles and ${energy} energy`)
    // }
    if (isEnough === false){
        console.log(`Not enough energy! Game ends with ${won} won battles and ${energy} energy`)
    }else {
        console.log(`Won battles: ${won}. Energy left: ${energy}`)
    }



    // for (let i = 1; i <= arr.length; i++){
    //     let command = Number(arr[i])
    //     if (command === Number){
    //         break;
    //     }
    //     if (energy - command < 0){
    //         break;
    //     }else {
    //         energy -= command
    //         won++
    //     }

    // }
    // console.log(won)


}
counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"])
