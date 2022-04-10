function santa(input) {

    let daysStaying = (Number(input[0]))-1;
    let roomType = input[1];
    let rating = input[2];
    let totalPrice =0;
    let discount = 0;

    if (roomType === 'apartment'){
        totalPrice = daysStaying*25
    }else if (roomType === 'president apartment'){
        totalPrice = daysStaying*35
    }else if (roomType === 'room for one person'){
        totalPrice = daysStaying*18
    }
    
    
    
    
    
    if (daysStaying < 10) {
        if (roomType === 'apartment') {
            
            discount = totalPrice*0.30
        } else if (roomType === 'president apartment') {
            discount = totalPrice * 0.10;
            
        }
    } else if (daysStaying > 10 && daysStaying < 15) {
        if (roomType === 'apartment') {
            discount = totalPrice * 0.35;
        } else if (roomType === 'president apartment') {
            discount = totalPrice * 0.15;
        }
    } else if (daysStaying > 15) {
        if (roomType === 'apartment') {
            discount = totalPrice * 0.50
        } else if (roomType === 'president apartment') {
            discount = totalPrice * 0.20
        }
    }
    let totalPriceToPay = totalPrice - discount;
   
    if (rating === 'positive'){
        totalPriceToPay = totalPriceToPay * 1.25;
    }else if (rating === 'negative'){
        totalPriceToPay = totalPriceToPay * 0.90;
    }

    
console.log(totalPriceToPay.toFixed(2))

}
santa(["14",
"apartment",
"positive"])





