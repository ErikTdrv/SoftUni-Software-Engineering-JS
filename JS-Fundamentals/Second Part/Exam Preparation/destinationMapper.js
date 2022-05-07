function destinationMapper(input){
    let regExp = /(=|\/)(?<name>([A-Z]([A-Za-z]+){2,}))\1/g
    let match = null
    let sum = 0
    let destinations = []
    match = regExp.exec(input)
    while (match !== null){
        sum += +match.groups.name.length
        destinations.push(match.groups.name)
        match = regExp.exec(input)
    }
    console.log(`Destinations: ${destinations.join(', ')}`)
    console.log(`Travel Points: ${sum}`)
}
destinationMapper(("ThisIs some InvalidInput"))