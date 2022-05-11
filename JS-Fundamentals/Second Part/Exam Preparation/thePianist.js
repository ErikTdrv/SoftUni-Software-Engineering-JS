function thePianist(input){
    let list = {}
    let num = input.shift()

    for (let i = 0; i < num; i++){
        let [piece, composer, key] = input[i].split('|')
        list[piece] = {
            'composer':composer,
            'key':key
        }
        // list[piece]['composer'] = composer
        // list[piece]['key'] = key
    }
    
    for (let i = num;  i < input.length; i++){
        if (input[i] === 'Stop')break;
        let [command, piece, composer, key] = input[i].split('|')

        if (command === 'Add'){
            if (list.hasOwnProperty(piece)){
                console.log(`${piece} is already in the collection!`)
            }else {
            list[piece] = {
                'composer':composer,
                'key':key,
            }
            console.log(`${piece} by ${composer} in ${key} added to the collection!`)
            } 
        }else if(command === 'Remove'){
            if (list.hasOwnProperty(piece)){
                delete list[piece]
                console.log(`Successfully removed ${piece}!`)
            }else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }else if (command === 'ChangeKey'){
            if (list.hasOwnProperty(piece)){
                list[piece]['key'] = composer
                console.log(`Changed the key of ${piece} to ${composer}!`)
            }else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        }
    
    }
    for (let el in list){
        console.log(`${el} -> Composer: ${list[el].composer}, Key: ${list[el]['key']}`)
    }

}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  )