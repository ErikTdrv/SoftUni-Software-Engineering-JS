function arrayManipulations (all){

    let arr = all
        .shift()
        .split(' ')
        .map(Number)
    
    
   

    for (let i = 0; i < all.length; i++){
        let commands = all[i].split(' ')
        let operation = commands[0]
        let index = Number(commands[1])
        let whichIndex = Number(commands[2])
        switch (operation){
            case 'Add':
                arr.push(index)
            ;break;
            case 'Remove':            //4 53 6 43 3
            arr = arr.filter(el => el !== index)
            ;break;
            case 'RemoveAt':
                arr.splice(index, 1)
            ;break;
            case 'Insert':
                arr.splice(whichIndex, 0, index)
            ;break;
            
        }
    }
    console.log(arr.join(' '))

}
arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)