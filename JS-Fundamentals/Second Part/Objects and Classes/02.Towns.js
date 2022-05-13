function towns(input){
    let finalResult = {}
    
    for (let tokens of input) {
        let commands = tokens.split(' | ')
        finalResult.town = commands[0]
        finalResult.latitude = Number(commands[1]).toFixed(2)
        finalResult.longitude = Number(commands[2]).toFixed(2)
        console.log(finalResult)
    }


}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)