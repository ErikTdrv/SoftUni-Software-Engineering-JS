function needForSpeed(input){
    let numb = input.shift()
    let list = {};

    for (let i = 0; i < numb; i++){
        let [car, mileage, fuel] = input[i].split('|')
        list[car]= {
            'mileage':+mileage,
            'fuel':+fuel,
        }
    }
    
    for (let i = numb; i < input.length; i++){
        if (input[i] === 'Stop')break;
        let  [command, car, distance, fuel] = input[i].split(' : ')

        if (command === 'Drive'){
            if (list[car]['fuel'] < +fuel){
                console.log(`Not enough fuel to make that ride`)
            }else if (list[car]['fuel'] >= +fuel){
                list[car]['mileage'] = +list[car]['mileage'] + +distance
                list[car]['fuel'] = +list[car]['fuel'] - +fuel
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`)
                if (list[car]['mileage'] > 100000){
                    console.log(`Time to sell the ${car}!`)
                    delete list[car]
                }
            }
        }else if (command === 'Refuel'){
            if (list[car]['fuel'] + +distance >= 75){
                let diff = 75 - list[car]['fuel']
                list[car]['fuel'] = 75
                console.log(`${car} refueled with ${diff} liters`)
            }else {
                list[car]['fuel'] = list[car]['fuel'] + +distance
                console.log(`${car} refueled with ${distance} liters`)
            }
        }else if (command === 'Revert'){
            if (list[car]['mileage'] - distance <= 10000){
                list[car]['mileage'] = 10000
            }else {
                list[car]['mileage'] = list[car]['mileage'] - distance 
                console.log(`${car} mileage decreased by ${distance} kilometers`)
            }
        }

    }
    for (let el in list){
        console.log(`${el} -> Mileage: ${list[el]['mileage']} kms, Fuel in the tank: ${list[el]['fuel']} lt.`)
    }

}
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  
  
  )