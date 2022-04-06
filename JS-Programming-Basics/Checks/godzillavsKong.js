function godzillaVsKong(input){

    let budget = Number(input[0]);
    let extrasCount = Number(input[1]); //статисти
    let clothingPrice = Number(input[2]);

    let decor = budget * 0.10;
    let moneyForCloth = extrasCount*clothingPrice;

    if(extrasCount > 150){
        moneyForCloth = moneyForCloth*0.90;
    }

    let totalMoney = decor + moneyForCloth;
    let diff = Math.abs(totalMoney - budget);

    if (budget >= totalMoney){
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`)
    }else {
        console.log('Not enough money!')
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    }
}
godzillaVsKong(["15437.62",
"186",
"57.99"])
