function fruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let fruitPrice = 0;

    if (day === 'Monday' || day === 'Thursday' || day === 'Wednesday' || day === 'Tuesday' || day === 'Friday') {
        switch (fruit) {
            case 'banana':
                fruitPrice = quantity * 2.50;
                break;
            case 'apple':
                fruitPrice = quantity * 1.20;
                break;
            case 'orange': fruitPrice = quantity * 0.85; break;
            case 'grapefruit': fruitPrice = quantity * 1.45; break;
            case 'kiwi': fruitPrice = quantity * 2.70; break;
            case 'pineapple': fruitPrice = quantity * 5.50; break;
            case 'grapes': fruitPrice = quantity * 3.85; break;
            default: console.log('error')
        }
    } else if (day === 'Saturday' || day === 'Sunday') {
        switch (fruit) {
            case 'banana': fruitPrice = quantity * 2.70; break;
            case 'apple': fruitPrice = quantity * 1.25; break;
            case 'orange': fruitPrice = quantity * 0.90; break;
            case 'grapefruit': fruitPrice = quantity * 1.60; break;
            case 'kiwi': fruitPrice = quantity * 3.00; break;
            case 'pineapple': fruitPrice = quantity * 5.60; break;
            case 'grapes': fruitPrice = quantity * 4.20; break;
            default: console.log('error')
        }

    } else console.log('error')

    if (fruitPrice != 0) {
        console.log(fruitPrice.toFixed(2))
    }
}
fruitShop(['apple', 'Tuesday', '2'])