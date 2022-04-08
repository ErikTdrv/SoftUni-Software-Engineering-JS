function journey(input){

    let budget = Number(input[0]);
    let budgetLeft = 0;
    let usedBudget = 0;
    let seasons = input[1];
    let destination;
    let hotelOrCamp;
    
    

    if (budget <= 100){
        destination = 'Somewhere in Bulgaria';
        if (seasons === 'summer'){
            budgetLeft = budget*0.30;
        }else if (seasons === 'winter'){
            budgetLeft = budget*0.70;
        }
    }else if (budget <= 1000){
        destination = 'Somewhere in Balkans';
        if (seasons === 'summer'){
            budgetLeft = budget*0.40
        }else if (seasons === 'winter'){
            budgetLeft = budget*0.80
        }
    }else if (budget > 1000){
        destination = 'Somewhere in Europe'
        budgetLeft = budget*0.90;
    }
    

    if (destination === 'Somewhere in Europe'){
        hotelOrCamp = 'Hotel'
    }else if (seasons === 'summer'){
        hotelOrCamp = 'Camp'
    }else if (seasons === 'winter'){
        hotelOrCamp = 'Hotel'
    }

   
    


    console.log(`${destination}`)
    console.log(`${hotelOrCamp} - ${budgetLeft.toFixed(2)}`)





}
journey(["50", "summer"])