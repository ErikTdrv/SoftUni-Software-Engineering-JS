function vacation(peopleCount,groupType, dayOfWeek){
 
    let studentPriceFriday = 8.45
    let studentPriceSaturday = 9.80
    let studentPriceSunday = 10.46
 
    let bussinesPriceFriday = 10.90
    let bussinesPriceSaturday = 15.60
    let bussinesPriceSunday = 16
 
    let regularPriceFriday = 15
    let regularPriceSaturday = 20
    let regularPriceSunday = 22.50
 
    let studentDisProcent = 15/100;
    let bussinesDiscount = 10;
    let regularDisProcent = 5/100;
 
    let totalPrice = 0;
 
 
    if(groupType === "Students" && dayOfWeek === "Friday"){
        totalPrice += peopleCount * studentPriceFriday
    }else if(groupType === "Students" && dayOfWeek === "Saturday"){
        totalPrice += peopleCount * studentPriceSaturday;
    }else if(groupType === "Students" && dayOfWeek === "Sunday"){
        totalPrice += peopleCount * studentPriceSunday;
    }else if(groupType === "Business" && dayOfWeek === "Friday"){
        totalPrice = 10.90
    }else if(groupType === "Business" && dayOfWeek === "Saturday"){
        totalPrice = 15.60
    }else if(groupType === "Business" && dayOfWeek === "Sunday"){
        totalPrice = 16
    }else if(groupType === "Regular" && dayOfWeek === "Friday"){
        totalPrice += peopleCount * regularPriceFriday;
    }else if(groupType === "Regular" && dayOfWeek === "Saturday"){
        totalPrice += peopleCount * regularPriceSaturday;
    }else if(groupType === "Regular" && dayOfWeek === "Sunday"){
        totalPrice += peopleCount * regularPriceSunday;
    }   
 
    if(groupType === "Students" && peopleCount >= 30){
        totalPrice -= studentDisProcent * totalPrice
    }else if(groupType === "Regular" && peopleCount >= 10 && peopleCount <= 20){
        totalPrice -= regularDisProcent * totalPrice
    }else if(groupType === "Business" && peopleCount >= 100){
        peopleCount -= bussinesDiscount;
        totalPrice = totalPrice*peopleCount
    }else if (groupType === 'Business'){
        totalPrice = totalPrice*peopleCount
    }
 
 
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
 
}
vacation(90,
    "Business",
    "Saturday"    
    )