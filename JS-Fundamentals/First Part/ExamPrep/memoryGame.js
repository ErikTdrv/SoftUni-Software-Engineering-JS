function memoryGame(arr){
    let plays = 0 
    let newArr = arr.shift().split(' ')
    
    for (let i = 0; i < arr.length - 1; i++){
        if (newArr.length < 2){
            break;
        }
        let command = arr[i].split(' ')
        
        if (command[i] === "end"){
            break;
        }
        
        plays++
        let index1 = Number(command[0])
        let index2 = Number(command[1])

        if (newArr[index1] === newArr[index2] && Number(index1)*Number(index2) >= 0){
            console.log(`Congrats! You have found matching elements - ${newArr[index1]}!`)
            let theDigit = newArr[index1]
            newArr.splice(index1,1)
            let newIndex = newArr.indexOf(theDigit)
            newArr.splice(newIndex,1)

        }else if (newArr[index1] === undefined || newArr[index2] === undefined){
            let length = (newArr.length / 2)
            let numToAdd = `-${plays}a`
            console.log('Invalid input! Adding additional elements to the board')
            newArr.splice(length,0 ,numToAdd, numToAdd)
        }else if (newArr[index1] !== newArr[index2]){
            console.log('Try again!')
        }
    
    }
    
    if (newArr.length === 0){
        console.log(`You have won in ${plays} turns!`)
    }else {
        console.log(`Sorry you lose :(`)
        console.log(newArr.join(' '))
    }

}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ]
    
    
    )

    