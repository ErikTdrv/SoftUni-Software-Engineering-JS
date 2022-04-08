function hotelRoom (input){

    let month = input[0];
    let daysStaying = Number(input[1]);
    let pricePerDayAppartment = 0;
    let pricePerDayStudio = 0;

    switch(month){
        case 'October':
        case 'May':pricePerDayAppartment = 65; pricePerDayStudio = 50
                   ;break;
        case 'June':
        case 'September':pricePerDayStudio = 75.20; pricePerDayAppartment = 68.70
                        ;break;
        case 'July':
        case 'August': pricePerDayAppartment = 77; pricePerDayStudio = 76
                            ;break;
        
    }

    if (daysStaying > 7 && daysStaying <= 13 && (month === 'May' || month === 'October')){
        pricePerDayStudio = pricePerDayStudio*0.95;
        
    }else if (daysStaying > 14 && (month === 'May' || month === 'October')){
        pricePerDayStudio = pricePerDayStudio*0.70
    }else if (daysStaying > 14 && (month === 'June' || month === 'September')){
        pricePerDayStudio = pricePerDayStudio * 0.80
    }

    if (daysStaying > 14 ){
        pricePerDayAppartment = pricePerDayAppartment * 0.90
    }
    
    let totalAppartment = pricePerDayAppartment * daysStaying;
    let totalStudio = pricePerDayStudio * daysStaying;



    console.log(`Apartment: ${totalAppartment.toFixed(2)} lv.`);
    console.log (`Studio: ${totalStudio.toFixed(2)} lv.`)
}
    hotelRoom(["June",
    "14"])
    