function heartDelivery(input){

    let neighborhood = input.shift().split('@').map(Number) 
    let jump = 0
    let indexof = 0;
    let counter = 0

    for (let i = 0; i < input.length; i++){
        let tokens = input[i].split(' ')
        let command = tokens[0]
        let length = Number(tokens[1])

        if (command === 'Love!'){
            break;
        }
        jump += length

        if (jump >= neighborhood.length){
            jump = 0
        }

        if (neighborhood[jump] === 0){
            console.log(`Place ${jump} already had Valentine's day.`)
            continue;
        }
        neighborhood[jump] -= 2
        if (neighborhood[jump] === 0){
            console.log(`Place ${jump} has Valentine's day.`)
        }
    }
    console.log(`Cupid's last position was ${jump}.`)

    for (let el of neighborhood){
        if (el !== 0){
            counter++
        }
    }
    if (counter > 0){
        console.log(`Cupid has failed ${counter} places.`)
    }else {
        console.log('Mission was successful.')
    }

//    while (input[0] != 'Love! '){
//        let tokens = input.shift().split(' ')
//        let jump = Number(tokens[1])

//         cupid += jump

//         if (cupid >= neighborhood.length){
//             cupid = 0
//         }

//         if (neighborhood[cupid] == 0){
//             console.log(`Place ${cupid} already had Valentine's day.`)
//         }else {
//             neighborhood[cupid] -= 2
//             if (neighborhood[cupid] == 0){
//                 console.log(`Place ${cupid} has Valentine's day.`)
//             }
//         }

//    }

//    let missed = 0
//    for (let houses of neighborhood){
//        if (houses > 0){
//            missed++
//        }
//    }
//    console.log(`Cupid's last position was ${cupid}.`)

//    if (missed > 0){
//        console.log(`Cupid has failed ${missed} places.`)
//    }else {
//        console.log(`Mission was successful.`)
//    }

}
heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love! "])

