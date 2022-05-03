function aMinerTask(input){
    let object = {};
    
    for (let i = 0; i < input.length; i+=2){
        let doesItExist = object.hasOwnProperty(input[i])
        if (doesItExist){
            let sum = Number(object[input[i]]) + Number(input[i + 1])
            object[input[i]] = sum
        }else {
            object[input[i]] = Number(input[i + 1])
        }
    }

    for(let el in object){
        console.log(`${el} -> ${object[el]}`)
    }
}
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    
    )