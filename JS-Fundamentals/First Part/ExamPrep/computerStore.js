function computerStore (arr){
    let priceWithoutTaxes = 0;
    let taxes = 0;
    let totalPrice = 0;
    let clientStatus = arr.pop()
    let newArr = arr.map(Number)
    let isInvalid = true;
    
    
    
    for (let i = 0; i < newArr.length; i++){
        if (newArr[i] < 0){
            console.log('Invalid price!')
            continue;
        }else if(newArr[i] === 0){
            console.log('Invalid order!')
        }
        priceWithoutTaxes += newArr[i]
        isInvalid = false;
    }
    taxes = priceWithoutTaxes*0.20
    totalPrice = priceWithoutTaxes + taxes
    if (clientStatus === 'special'){
        totalPrice *= 0.90
    }
    if (!isInvalid === true){
    console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${priceWithoutTaxes.toFixed(2)}$
    Taxes: ${taxes.toFixed(2)}$
    -----------
    Total price: ${totalPrice.toFixed(2)}$
    `)
    }else {
        console.log('Invalid order!')
    }

}
computerStore([
    '1','2'
    ])
    