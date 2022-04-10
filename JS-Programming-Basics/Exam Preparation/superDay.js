function superDay (input){

let destination = input[0]
let datesOfReservation = input[1]
let amountStayingDays = Number(input[2])

let price = 0;

if (destination === 'France'){
    switch(datesOfReservation){
        case '21-23':price += 30;break;
        case '24-27':price += 35;break;
        case '28-31':price += 40;break;
    }
}else if (destination === 'Italy'){
    switch(datesOfReservation){
        case '21-23':price += 28;break;
        case '24-27':price += 32;break;
        case '28-31':price += 39;break;
    }
}else if (destination === 'Germany'){
    switch(datesOfReservation){
        case '21-23':price += 32;break;
        case '24-27':price += 37;break;
        case '28-31':price += 43;break;
    }
}
let toal = price*amountStayingDays
console.log(`Easter trip to ${destination} : ${toal.toFixed(2)} leva.`)










}
superDay(['Germany',
    '24-27',
    '5'
    ])