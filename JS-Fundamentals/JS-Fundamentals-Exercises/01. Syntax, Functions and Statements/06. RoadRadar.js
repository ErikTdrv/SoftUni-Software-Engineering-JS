function roadRadar(speed, area){
    let diff = 0;
    let message = ''
    let zone = 0;
    let isFaster = true;
    if (area === 'motorway'){
        zone = 130
    }else if(area === 'interstate'){
        zone = 90
    }else if(area === 'city'){
        zone = 50
    }else if(area === 'residential'){
        zone = 20
    }





    if (speed > 20 && area === 'residential'){
        diff = speed - 20
        message = `The speed is ${diff} km/h faster than the allowed speed of 20 - `
    }else if(speed > 50 && area === 'city'){
        diff = speed - 50
        message = `The speed is ${diff} km/h faster than the allowed speed of 50 - `
    }else if(speed > 90 && area === 'interstate'){
        diff = speed - 90
        message =`The speed is ${diff} km/h faster than the allowed speed of 90 - `
    }else if(speed > 130 && area === 'motorway'){
        diff = speed - 130
        message =`The speed is ${diff} km/h faster than the allowed speed of 130 - `
    }else{
        message =`Driving ${speed} km/h in a ${zone} zone`
        isFaster = false
    }
    if (isFaster){

        if (diff <= 20 && diff >= 1){
            message += 'speeding'
        }else if(diff <= 40){
            message += 'excessive speeding'
        }else if(diff > 40){
            message += 'reckless driving'
        }
    }
    console.log(message)
}
roadRadar(200, 'motorway')