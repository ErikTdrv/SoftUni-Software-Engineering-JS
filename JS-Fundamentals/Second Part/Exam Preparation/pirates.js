function pirates(input){

    let targetCities = {};
    let counter = 0;
    for (let el of input){
        counter++
        if (el === 'Sail')break;
        let [city, population, gold] = el.split('||')
        if (targetCities.hasOwnProperty(city)){
            let resultPopulation = targetCities[city]['population'] + +population
            let resultGold = targetCities[city]['gold'] + +gold
            targetCities[city]['population'] = resultPopulation
            targetCities[city]['gold'] = resultGold

        }else {
            targetCities[city] = {}
            targetCities[city]['population'] = +population
            targetCities[city]['gold'] = +gold
        }
    }

    for (let i = counter; i < input.length; i++){
        if (input[i] === 'End')break;
        let [type, city, people, gold] = input[i].split('=>')

        if (type === 'Plunder'){
            let resultPeople = targetCities[city]['population'] - +people
            let resultGold = targetCities[city]['gold'] - +gold
            targetCities[city]['population'] = resultPeople
            targetCities[city]['gold'] = resultGold
            console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`)
            if (resultPeople <= 0 || resultGold <= 0){
                console.log(`${city} has been wiped off the map!`)
                delete targetCities[city]
            }
            
        }else if (type === 'Prosper'){
            let [type, town, gold] = input[i].split('=>')
            if (gold < 0){
                console.log(`Gold added cannot be a negative number!`)
                continue;
            }else {
                targetCities[city]['gold'] =  targetCities[city]['gold'] + +gold
                console.log(`${gold} gold added to the city treasury. ${city} now has ${targetCities[city]['gold']} gold.`)
            }
        }
    }

    if (Object.keys(targetCities).length !== 0){
        console.log(`Ahoy, Captain! There are ${Object.keys(targetCities).length} wealthy settlements to go to:`)
        for (let el in targetCities){
            console.log(`${el} -> Population: ${targetCities[el]['population']} citizens, Gold: ${targetCities[el]['gold']} kg`)
        }
    }else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    }
}
pirates(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"])


