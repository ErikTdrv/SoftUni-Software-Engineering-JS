function arenaTier(input){

 let list = {}

    for (let el of input){
        [gladiator, technique, skill] = el.split(' -> ')
        list[gladiator] = {}
        list[gladiator][technique] = skill
    }
    console.log(list)
}
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    ]
    
    )