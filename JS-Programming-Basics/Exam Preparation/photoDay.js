function photoDay (input){

    let amountTimePhotos = Number(input[0])
    let amountScenes = Number(input[1])
    let sceneTime = Number(input[2])

    let preparation = amountTimePhotos*0.15
    let timeForScenes = amountScenes*sceneTime
    timeForScenes += preparation
    let diff = (Math.abs(timeForScenes - amountTimePhotos))
    if (timeForScenes > amountTimePhotos){
        console.log(`Time is up! To complete the movie you need ${Math.ceil(diff)} minutes.`)
    }else if (timeForScenes <= amountTimePhotos){
        console.log(`You managed to finish the movie on time! You have ${Math.ceil(diff)} minutes left!`)
    }
    


}
photoDay(['89',
    '9',
    '2'
    ])