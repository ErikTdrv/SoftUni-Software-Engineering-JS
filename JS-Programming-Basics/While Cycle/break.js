function breakTime (input){
    let index = 2;
    let moneyNeeded = Number(input[0])
    let currentMoney = Number(input[1])
    
    let spendCounter = 0;
    let daysCounter = 0;

    for (let i = 1; i < input.length; i++){
        
    let option = input[index]
    index++ 
    let sumSpPh = Number(input[index])
    index++


        if (option === 'save'){
            currentMoney += sumSpPh;
            daysCounter++;
            spendCounter = 0;
        }else if (option === 'spend'){
            currentMoney -= sumSpPh
            spendCounter++;
            daysCounter++
        }
        if (currentMoney <= 0){
            currentMoney = 0;
        }
        
    }
    


    if (spendCounter >= 5){
        console.log("You can't save the money.")
        console.log(daysCounter)
    }else{
        console.log(`You saved the money for ${daysCounter} days.`)
    }

    







    
}
breakTime(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])


