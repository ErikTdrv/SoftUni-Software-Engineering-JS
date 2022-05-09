function adAstra(input){
    let regExp = /(#|\|)(?<item>[A-Za-z\s]+)\1(?<date>(\d{2})\/(\d{2})\/(\d{2}))\1(?<calories>[0-9]{1,5})\1/g

    let arr = []
    let calories = 0;
    // for (let i = 0; i < match.length; i++){
    //     let exec = newReg.exec(match)
    //     calories+= +exec.groups.calories
    //     arr.push(`Item: ${exec.groups.item}, Best before: ${exec.groups.date}, Nutrition: ${exec.groups.calories}`)
    // }
    
    let match = regExp.exec(input[0])
    while (match !== null){
        calories+= +match.groups.calories
        arr.push(`Item: ${match.groups.item}, Best before: ${match.groups.date}, Nutrition: ${match.groups.calories}`)
        match = regExp.exec(input[0])
    }
    let count = Math.trunc(calories/2000)
    console.log(`You have food to last you for: ${count} days!`)

    arr.forEach(x => console.log(x))

}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    )