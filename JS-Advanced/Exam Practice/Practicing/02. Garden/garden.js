class Garden{
spaceAvailable;
plants;
storage;

constructor(spaceAvailable){
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
}

addPlant(plantName, spaceRequired){
    if (spaceRequired > this.spaceAvailable){
        throw new Error('Not enough space in the garden.')
    }else {
        let plant = {
            'plantName': plantName,
            spaceRequired,
            'ripe': false,
            "quantity": 0,
        }
        this.spaceAvailable -= spaceRequired
        this.plants.push(plant)
        return `The ${plantName} has been successfully planted in the garden.`
    }
}

ripenPlant(plantName, quantity){
    let current = this.plants.find(x => x.plantName == plantName)
    if (!current){
        throw new Error(`There is no ${plantName} in the garden.`)
    }else if(current.ripe == true){
        throw new Error(`The ${plantName} is already ripe.`) 
    }
    if (quantity <= 0){
        throw new Error(`The quantity cannot be zero or negative.`)
    }
    current.ripe = true;
    current.quantity += quantity;
    if (quantity == 1){
        return `${quantity} ${plantName} has successfully ripened.`
    }else if (quantity > 1){
        return `${quantity} ${plantName}s have successfully ripened.`
    }
}

harvestPlant(plantName){
    let current = this.plants.find(x => x.plantName == plantName)
    if (!current){
        throw new Error(`There is no ${plantName} in the garden.`)
    }else if(current.ripe == false){
        throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
    }
    let newPlant = {
        plantName,
        'quantity':current.quantity,
    }
    this.spaceAvailable += current.spaceRequired
    let indexOf = this.plants.indexOf(current);
    this.plants.splice(indexOf, 1)
    this.storage.push(newPlant)
    return `The ${plantName} has been successfully harvested.`
}

generateReport(){
    let stringie = 'Plants in the garden: '
    let resultList = [`The garden has ${this.spaceAvailable} free space left.`]
    this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName))
    for (let el of this.plants){
        stringie += el.plantName
        stringie += ', '
    }
    let lastIndexOf = stringie.lastIndexOf(', ')
    stringie = stringie.split('').slice(0, lastIndexOf).join('')
    resultList.push(stringie)
    let storageStringie = `Plants in storage: `
    if (this.storage.length == 0){
        resultList.push(`Plants in storage: The storage is empty.`)
    }else {
        for (let el of this.storage){
            storageStringie += el.plantName + ' '
            storageStringie += `(${el.quantity})`

                storageStringie += ', '
        }
        let lastIndexOf = storageStringie.lastIndexOf(', ')
        storageStringie = storageStringie.split('').slice(0, lastIndexOf).join('')
        resultList.push(storageStringie)
    }
    return resultList.join('\n')
}
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 100));
console.log(myGarden.addPlant('cucumber', 30));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.ripenPlant('orange', 4));
