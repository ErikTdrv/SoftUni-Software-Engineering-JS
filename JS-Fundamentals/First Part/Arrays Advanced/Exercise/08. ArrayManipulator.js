function arrayManipulator(arr, commandsArr){
    let passed = false;
    for (let i = 0; i < commandsArr.length; i++){
        let commands = commandsArr[i].split(' ')
        let command = commands[0]
        let index = Number(commands[1])
        
        if (command === 'add'){
        let element = Number(commands[2])
        arr.splice(index, 0, element)
    }else if(command === 'addMany'){
        let elements = commands.splice(2)
        let numToAdd = elements.map(Number)
        arr.splice(index, 0, ...numToAdd)
        
    }else if (command === 'contains'){
        let result = arr.indexOf(index)
        console.log(result)
    }else if (command === 'remove'){
        arr.splice(index, 1)
    }else if(command === 'shift'){
        for (let i = 0; i < index; i++){
            let num = arr.shift()
            arr.push(num)
        }
    }else if(command === 'sumPairs'){
        // var newArr = []
        // while(arr.length > 0){
        //     let sum = 0;
        //     if (arr.length === 1){
        //         sum = arr[0]
        //     }else {
        //     sum = arr[0] + arr[1]
        //     }
        //     newArr.push(sum)
        //     sum = 0;
        //     arr.shift()
        //     arr.shift()
        //     passed = true
        let resArr = []
        if (arr.length %2 !== 0){
            arr.push(0)
        }
        for (let i = 0; i < arr.length - 1; i+=2){
            let sum = arr[i] + arr[i + 1]
            resArr.push(sum)
        }
        arr = resArr
        
    }else if(command === 'print'){
        
            console.log(`[ ${arr.join(', ')} ]`)
        
    }

}




}
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
    )

