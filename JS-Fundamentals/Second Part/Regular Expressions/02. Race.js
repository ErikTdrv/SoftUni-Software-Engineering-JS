function race (input){
    let racersTable = {}
    let regExpLetters = /[A-Z]+/ig
    let regExpDigits = /\d/g
    let racers = input.shift().split(', ')
    for (let el of input){
        if (el === 'end of race'){
            break;
        }
        let name = el.match(regExpLetters).join('')
        let quantity = el.match(regExpDigits)
        let sum = 0;
        for (let el of quantity){
            sum += +el
        }
        if (racers.includes(name) && !racersTable.hasOwnProperty(name)){
            racersTable[name] = sum
        }else if (racersTable.hasOwnProperty(name)){
            let sumBetween = racersTable[name] + sum
            racersTable[name] = sumBetween
        }
    }
    let sorted = Object.entries(racersTable).sort((b,a) => a[1] - b[1])
    //let sorted = Object.keys(racersTable).sort((b,a) => racersTable[a] - racersTable[b])
    let array = sorted.slice(0,3)
    console.log(array)
    console.log(`1st place: ${array[0][0]}`)
    console.log(`2nd place: ${array[1][0]}`)
    console.log(`3rd place: ${array[2][0]}`)
    

    
}
race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']
)