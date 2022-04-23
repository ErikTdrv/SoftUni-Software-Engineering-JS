function movingTarget (arr){

    let targets = arr.shift().split(' ').map(Number)

    for (let i = 0; i < arr.length; i++){
        let token = arr[i].split(' ')
        let command = token[0]
        if (command === 'End'){
            break;
        }
        let index = Number(token[1])

        if (command === 'Shoot' && targets[index] !== undefined ){
            let power = Number(token[2])
            if (index < targets.length){
            targets[index] = targets[index] - power
            }
            if (targets[index] <= 0){
                targets.splice(index, 1)
            }
        }else if (command === 'Add'){
            if (index < targets.length && index >= 0){
            let value = Number(token[2])
            targets.splice(index, 0, value)
            } else {
                console.log('Invalid placement!')
            }

        }else if (command === 'Strike'){
            let radius = Number(token[2])
            let startingIndex = Number(token[1]) - radius
            let length = radius*2 + 1
            if (targets[index] - 2 !== undefined && targets[index] + 2 !== undefined && startingIndex > 0 && startingIndex + length < targets.length){
                targets.splice(startingIndex, length )
            }else {
                console.log('Strike missed!')
            }
        }

        
    }

    console.log(targets.join('|'))

}
movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"])
