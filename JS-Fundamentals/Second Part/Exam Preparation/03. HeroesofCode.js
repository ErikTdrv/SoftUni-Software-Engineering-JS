function heroesOfCode(input){
    let list = {};
    let amountOfHeroes = input.shift()

    //creating porfolio of the heroes
    for (let i = 0; i < amountOfHeroes; i++){
        let [name, health, mana] = input[i].split(' ')
        list[name] = {};
        list[name]['health'] = +health
        list[name]['mana'] = +mana
    }

    //game proccess
    for (let el of input){
        let [type, name, amount, attacker] = el.split(' - ')
        if (el === 'End')break; // break

        if (type === 'CastSpell'){
            if (list[name]['mana'] >= amount){
                let result = list[name]['mana'] - amount
                list[name]['mana'] = result
                console.log(`${name} has successfully cast ${attacker} and now has ${list[name]['mana']} MP!`)
            }else {
                console.log(`${name} does not have enough MP to cast ${attacker}!`)
            }
        }else if (type === 'TakeDamage'){
            let result = list[name]['health'] - (+amount)
            if (result <= 0){
                delete list[name]
                console.log(`${name} has been killed by ${attacker}!`)
            }else {
                list[name]['health'] = result
                console.log(`${name} was hit for ${amount} HP by ${attacker} and now has ${list[name]['health']} HP left!`)
            }
        }else if (type === 'Recharge'){
            let resultAfterRecharging = list[name]['mana'] + (+amount)
            if (resultAfterRecharging > 200){
                let neededToMax = 200 - list[name]['mana']
                list[name]['mana'] = 200
                console.log(`${name} recharged for ${neededToMax} MP!`)
            }else if (resultAfterRecharging <= 200){
                console.log(`${name} recharged for ${amount} MP!`)
                list[name]['mana'] = resultAfterRecharging
            }
        }else if (type === 'Heal'){
            let resultAfterRecharging = list[name]['health'] + (+amount)
            if (resultAfterRecharging > 100){
                let neededToMax = 100 - list[name]['health']
                list[name]['health'] = 100
                console.log(`${name} healed for ${neededToMax} HP!`)
            }else if (resultAfterRecharging <= 100){
                console.log(`${name} healed for ${amount} HP!`)
                list[name]['health'] = resultAfterRecharging
            }
        }
    }

   
   
    for (let el in list){
        console.log(el)
        console.log(` HP: ${list[el]['health']}`)
        console.log(` MP: ${list[el]['mana']}`)
    }

}
heroesOfCode(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End',
    ]
    )