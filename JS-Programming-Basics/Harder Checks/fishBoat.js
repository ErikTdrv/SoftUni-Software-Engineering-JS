function fishBoat (input){

    let budget = Number(input[0]);
    let season = input[1];
    let amountFishers = Number(input[2]);
    let priceToHire = 0;
    

    switch (season){
        case 'Spring': priceToHire = 3000;break;
        case 'Summer':
        case 'Autumn': priceToHire = 4200;break;
        case 'Winter' : priceToHire = 2600;break;
    }
    if (amountFishers <= 6){
        priceToHire = priceToHire*0.90;
    }else if (amountFishers <= 11 && amountFishers >= 7){
        priceToHire = priceToHire*0.85;
    }else if (amountFishers > 12){
        priceToHire = priceToHire*0.75;
    }

    if (amountFishers % 2 === 0 && season !== 'Autumn'){
        priceToHire = priceToHire*0.95
    }

    let diff = Math.abs(budget-priceToHire);

    if (budget >= priceToHire){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    }else if (budget < priceToHire){
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }
    


}
fishBoat(["3600",
"Autumn",
"6"])


