function smallShop(input) {

    let products = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let productsPrice = 0

    if (city === 'Sofia') {
        switch (products) {
            case 'coffee': productsPrice = 0.50 * quantity; break;
            case 'water': productsPrice = 0.80 * quantity; break;
            case 'beer': productsPrice = 1.20 * quantity; break;
            case 'sweets': productsPrice = 1.45 * quantity; break;
            case 'peanuts': productsPrice = 1.60 * quantity; break;
        }
    }


    if (city === 'Plovdiv') {
        switch (products) {
            case 'coffee': productsPrice = 0.40 * quantity; break;
            case 'water': productsPrice = 0.70 * quantity; break;
            case 'beer': productsPrice = 1.15 * quantity; break;
            case 'sweets': productsPrice = 1.30 * quantity; break;
            case 'peanuts': productsPrice = 1.50 * quantity; break;
        }
    }

    if (city === 'Varna') {
        switch (products) {
            case 'coffee': productsPrice = 0.45 * quantity; break;
            case 'water': productsPrice = 0.70 * quantity; break;
            case 'beer': productsPrice = 1.10 * quantity; break;
            case 'sweets': productsPrice = 1.35 * quantity; break;
            case 'peanuts': productsPrice = 1.55 * quantity; break;
        }
    }
    console.log(productsPrice)


}
smallShop(['peanuts', 'Plovdiv', '1'])