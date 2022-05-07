function asAstra(input){
    let regExp = /(#|\|)(?<item>[A-Za-z\s]+)\1(?<date>(\d{2})\/(\d{2})\/(\d{2}))\1(?<calories>[0-9]{1,5})\1/g
    let newRegExp = /(#|\|)(?<item>[A-Za-z\s]+)\1(?<date>(\d{2})\/(\d{2})\/(\d{2}))\1(?<calories>[0-9]{1,5})\1/
    let list = {}
    let arr = input[0].match(regExp)
    let sum = 0;
    let newArr = [];
    let matches = arr.length
    let info = null
    if (matches > 0){
    for (let i = 0; i < arr.length; i++){
        info = newRegExp.exec(arr[i])
        sum += +info.groups['calories']
        let item = info.groups['item']
        let date = info.groups['date']
        let nutrition = info.groups['calories']
        newArr.push(`Item: ${item}, Best before: ${date}, Nutrition: ${nutrition}`)
    }
}
    // for (let i = 0; i < matches ;i++){
        
    //     sum += +info.groups['calories']
    //     let item = info.groups['item']
    //     let date = info.groups['date']
    //     let nutrition = info.groups['calories']
    //     newArr.push(`Item: ${item}, Best before: ${date}, Nutrition: ${nutrition}`)
    // }
    // while (info = regExp.exec(input)){
    //     sum += +info.groups['calories']
    //     let item = info.groups['item']
    //     let date = info.groups['date']
    //     let nutrition = info.groups['calories']
    //     newArr.push(`Item: ${item}, Best before: ${date}, Nutrition: ${nutrition}`)
    // }
    let days = sum/2000
    console.log(`You have food to last you for: ${Math.floor(days)} days!`)

    for (let el of newArr){
        console.log(el)
    }

    

}
asAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    )