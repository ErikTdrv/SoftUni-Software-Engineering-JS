function theCleverLily(input) {

    let age = Number(input[0]);
    let laundryPrice = Number(input[1]);
    let priceFor1Toy = Number(input[2]);
   
    let money = 0;
    let currentMoney = 10;
    let toy = 0;

    for ( let i = 1; i <= age; i++ ){
        if ( i %2 === 0){
            money += currentMoney;
            currentMoney += 10;
            money -= 1;
        }else {
            toy++;
        }
    }

    let totalMoney = toy * priceFor1Toy + money;
    let diff = Math.abs(laundryPrice - totalMoney)

    if (totalMoney >= laundryPrice){
        console.log(`Yes! ${diff.toFixed(2)}`)
    }else {
        console.log(`No! ${diff.toFixed(2)}`)
    }

}
theCleverLily(["21",
"1570.98",
"3"])
