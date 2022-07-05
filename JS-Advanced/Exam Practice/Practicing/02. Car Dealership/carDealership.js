class CarDealership {
name;
availableCars;
soldCars;
totalIncome;
constructor(name){
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0
}

addCar(model, horsepower, price, mileage){
    if (model == '' || !Number.isInteger(horsepower) || price < 0 || mileage < 0){
        throw new Error('Invalid input!')
    }else {
        let car = {
            model,
            horsepower, 
            price,
            mileage,
        }
        this.availableCars.push(car);
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }
}

sellCar(model, desiredMileage){
    let current = this.availableCars.find(x => x.model == model);
    if (!current){
        throw new Error(`${model} was not found!`)
    }

    let diff = Math.abs(current.mileage - desiredMileage)
    if (desiredMileage >= current.mileage){

    }else if (diff <= 40000){
        current.price = current.price*0.95;
    }else if(diff > 40000){
        current.price = current.price*0.90;
    }
    let indexOfCar = this.availableCars.indexOf(current);
    this.availableCars.splice(indexOfCar, 1);
    let horsepower = current.horsepower
    let soldPrice = current.price
    let soldCar = {
        model,
        'horsepower': horsepower,
        'price': soldPrice
    }
    this.soldCars.push(soldCar);
    this.totalIncome += soldPrice
    return `${model} was sold for ${soldPrice.toFixed(2)}$`
}

currentCar(){
    let result = ['-Available cars:']
    if (this.availableCars.length == 0){
        return `There are no available cars`
    }else {
        for (let el of this.availableCars){
            let car = `---${el.model} - ${el.horsepower} HP - ${el.mileage.toFixed(2)} km - ${el.price.toFixed(2)}$`
            result.push(car)
        }
        return result.join('\n');
    }
}

salesReport(criteria){
    let result = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`, `-${this.soldCars.length} cars sold:`]
    if (criteria == 'horsepower'){
        
        this.soldCars.sort((b, a) => a['horsepower'] -b['horsepower']);
    }else if(criteria == 'model'){
        this.soldCars.sort((a, b) => a.model.localeCompare(b.model));

    }else {
        throw new Error('Invalid criteria!')
    }
    for (let el of this.soldCars){
        let fixed1 = el.horsepower
        let fixed2 = el.price
       
        let str = `---${el.model} - ${fixed1} HP - ${fixed2.toFixed(2)}$`
        result.push(str)
    }
    return result.join('\n')
}
}
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership.currentCar());
