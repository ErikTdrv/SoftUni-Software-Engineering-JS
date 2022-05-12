function bossRush(input){
    let regExp = /(\|)(?<name>[A-Z]+)\1:#(?<title>[A-Za-z]+ [A-Za-z]+)#/gm
    let newReg = /(\|)(?<name>[A-Z]+)\1:#(?<title>[A-Za-z]+ [A-Za-z]+)#/gm
    // let bossRegExp = /(\|)([A-Z]+)\1/g
    // let titleRegExp = /#[A-Za-z]+ [A-Za-z]+#/g
    let num = input.shift()


    for (let i = 0; i < num; i++){
        let match;
    if (input[i].match(regExp)){
        match = newReg.exec(input)
        console.log(`${match.groups.name}, The ${match.groups.title}`)
        console.log(`>> Strength: ${match.groups.name.length}`)
        console.log(`>> Armor: ${match.groups.title.length}`)
    }else {
        console.log(`Access denied!`)
    }
    
    // if (match === null){
    //     console.log(`Access denied!`)
    // }else {
    //     console.log(`${match.groups.name}, ${match.groups.title}`)
    //     console.log(`>> Strength: ${match.groups.name.length}`)
    //     console.log(`>> Armor: ${match.groups.title.length}`)
    // }
    }

}
solve(["//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"]);