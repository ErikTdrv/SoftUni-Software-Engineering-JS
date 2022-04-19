function vacation (people, type, day){
    let totalPrice = 0;
    let total = 0;
    let priceForOne = 0;
    if (type === 'Students'){
        switch (day){
            case 'Friday':priceForOne = 8.45;break;
            case 'Saturday':priceForOne = 9.80;break;
            case 'Sunday':priceForOne = 10.46;break;
        }
        
    }else if (type === 'Business'){
        switch (day){
            case 'Friday':priceForOne = 10.90;break;
            case 'Saturday':priceForOne = 15.60;break;
            case 'Sunday':priceForOne = 16;break;
        }
    }else if (type === 'Regular'){
        switch (day){
            case 'Friday':priceForOne = 15;break;
            case 'Saturday':priceForOne = 20;break;
            case 'Sunday':priceForOne = 22.50;break;
        }
    }
    totalPrice = priceForOne*people
    if (people >= 30 && type === 'Students'){
        total = totalPrice*0.85
    }else if (people >= 100 && type === 'Business'){
        total = totalPrice - (10*priceForOne)
    }else if (people >= 10 && people <= 20 && type === 'Regular'){
        total = totalPrice*0.95
    }else {
        total = totalPrice
    }

    console.log(`Total price: ${total.toFixed(2)}`)



}
vacation(90,
    "Business",
    "Saturday"    
    )