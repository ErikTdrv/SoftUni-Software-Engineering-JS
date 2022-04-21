function taxes(arr){
    let initialTax = 0
    let taxesOfTheCar = 0
    let vehicles = arr[0].split('>>')
    let taxColector = 0
    
    for (let i = 0; i < vehicles.length; i++){
        let tokens = vehicles[i].split(' ')
        let type = tokens[0]
        let yearsPaying = Number(tokens[1])
        let kmtravelled = Number(tokens[2])

        if (type === 'family'){
            let num = Math.trunc(kmtravelled / 3000)
            taxesOfTheCar = num * 12 + (50 - yearsPaying * 5)
            taxColector+= taxesOfTheCar
            console.log(`A ${type} car will pay ${taxesOfTheCar.toFixed(2)} euros in taxes.`)
        }else if (type === 'heavyDuty'){
            let num = Math.trunc(kmtravelled / 9000)
            taxesOfTheCar = num * 14 + (80 - yearsPaying * 8)
            taxColector+= taxesOfTheCar
            console.log(`A ${type} car will pay ${taxesOfTheCar.toFixed(2)} euros in taxes.`)
        }else if (type === 'sports'){
            let num = Math.trunc(kmtravelled / 2000)
            taxesOfTheCar = num * 18 + (100 - yearsPaying * 9)
            taxColector+= taxesOfTheCar
            console.log(`A ${type} car will pay ${taxesOfTheCar.toFixed(2)} euros in taxes.`)
        }else {
            console.log('Invalid car type.')
        }
        
        
    }
    console.log(`The National Revenue Agency will collect ${taxColector.toFixed(2)} euros in taxes.`)



}
taxes([ 'family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012' ])