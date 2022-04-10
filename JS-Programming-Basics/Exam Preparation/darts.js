function darts (input){
    
    let player = input[0]
    let initialPoints = 301
    let successful = 0;
    let unsuccessful = 0
    let index = 1

    let field = input[index++]
    let score = Number(input[index++])
    
    while (initialPoints > 0){
        if (field === 'Retire'){
            break;
        }

        if(field === 'Triple'){
            score*= 3;
        }else if (field === 'Double'){
            score*= 2;
        }

        if (score <= initialPoints){
            initialPoints -= score;
            successful++
        }else {
            unsuccessful++
        }
        field = input[index++]
        score = Number(input[index++])
        
    }

    if (field === 'Retire'){
        console.log(`${player} retired after ${unsuccessful} unsuccessful shots.`)
    }else {
        console.log(`${player} won the leg with ${successful} shots.`)
    }






}
darts([
    'Michael van Gerwen',
'Triple',
'20',
'Triple',
'19',
'Double',
'10',
'Single',
'3',
'Single',
'1',
'Triple',
'20',
'Triple',
'20','Double',
'20'

])