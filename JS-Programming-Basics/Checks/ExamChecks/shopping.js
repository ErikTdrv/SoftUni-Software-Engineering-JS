function shopping(input){

    let budget = Number(input[0]);
    let countVideoCard = Number(input[1]);
    let countProcessors = Number(input[2]);
    let countRAM = Number(input[3]);

    let priceVideoCard = countVideoCard*250;
    let priceProcessors = priceVideoCard*0.35
    let priceRAM = (priceVideoCard*0.10)*countRAM;
    let totalSum = (priceVideoCard + priceProcessors + priceRAM).toFixed(2);
    
    
    
    if (countVideoCard > countProcessors){
        totalSum = totalSum*0.85;
    }
    let diff = Math.abs(totalSum - budget);
    
    
    if (totalSum <= budget){
       
        console.log(`You have ${diff.toFixed(2)} leva left!`)    
    }
    else 
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
}

shopping(["920.45",
"3",
"1",
"1"])



