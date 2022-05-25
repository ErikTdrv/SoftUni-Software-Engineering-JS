function carFactory(car){

    let newList = {}
    newList['model'] = car.model;
    
    //Adjusting engine
    if (car.power <= 90){
        newList['engine'] = {
            'power': 90,
            'volume': 1800,
        }
    }else if(car.power <= 120 && car.power > 90){
        newList['engine'] = {
            'power': 120,
            'volume': 2400,
        }
    }else if(car.power > 120){
        newList['engine'] = {
            'power': 200,
            'volume': 3500,
        }
    }

    //Adjusting carriage
    newList['carriage'] = {
        'type': car.carriage,
        'color': car.color,
    }

    //Adjusting wheels
    let carWheels = [];
    if (car.wheelsize %2 == 0){
        car.wheelsize = car.wheelsize - 1
        for (let i = 0; i <= 3; i++){
            carWheels.push(car.wheelsize)
        }
    }else {
        for (let i = 0; i <= 3; i++){
            carWheels.push(car.wheelsize)
        }
    }
    newList['wheels'] = carWheels

   return newList
}
carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }

)