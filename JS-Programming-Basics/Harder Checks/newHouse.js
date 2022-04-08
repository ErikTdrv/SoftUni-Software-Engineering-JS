function newHouse (input){

    let flowerTypes = input[0];
    let amountFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let totalPrice = 0;
    let discount = 0;

    switch (flowerTypes){
        case 'Roses': totalPrice = 5*amountFlowers;break;
        case 'Dahlias': totalPrice = 3.80*amountFlowers;break;
        case 'Tulips' : totalPrice = 2.80*amountFlowers;break;
        case 'Narcissus' : totalPrice = 3*amountFlowers;break;
        case 'Gladiolus' : totalPrice = 2.50*amountFlowers;break;
    }
    if (amountFlowers > 80 && flowerTypes === 'Roses'){
        discount = totalPrice*0.10;
    }else if (amountFlowers > 90 && flowerTypes === 'Dahlias'){
        discount = totalPrice*0.15
    }else if (amountFlowers > 80 && flowerTypes === 'Tulips'){
        discount = totalPrice*0.15
    }else if (amountFlowers < 120 && flowerTypes === 'Narcissus'){
        totalPrice = totalPrice + (totalPrice*0.15)
    }else if (amountFlowers < 80 && flowerTypes === 'Gladiolus'){
        totalPrice = totalPrice + (totalPrice*0.20)
    }
    

    let tot =totalPrice - discount;
    let diff = Math.abs(budget-tot)

    if (tot > budget){
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    }else if (tot <= budget){
        console.log(`Hey, you have a great garden with ${amountFlowers} ${flowerTypes} and ${diff.toFixed(2)} leva left.`)
    }

}
newHouse (["Tulips",
"88",
"260"])





