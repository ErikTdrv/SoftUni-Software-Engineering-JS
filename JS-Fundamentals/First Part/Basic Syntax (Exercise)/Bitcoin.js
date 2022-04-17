function bitcoin(input){

let leva = 0;
let counterDays = 0;
let bitcoins = 0;
let index = 0;
let command = input[index]
let currentLeva = 0
let dayOfPurchase = 0;
let isPurchased = false;
for (let i = 0; i < input.length; i++){
    counterDays++
    command = input[index]
    if (counterDays % 3 == 0){
        command = command*0.70
    }
    currentLeva = command* 67.51
    leva = currentLeva + leva
    if (leva >= 11949.16){
        bitcoins++
        if (bitcoins === 1 && isPurchased === false){
            dayOfPurchase = counterDays
            isPurchased = true;
        }
        leva = leva - 11949.16
        while (leva > 11949.16){
            leva = leva - 11949.16
            bitcoins++
        }
    }
    
    index++
}

console.log(`Bought bitcoins: ${bitcoins}`)
if (bitcoins > 0){
console.log(`Day of the first purchased bitcoin: ${dayOfPurchase}`)
}
console.log(`Left money: ${leva.toFixed(2)} lv.`)

}
bitcoin([3124.15,
    504.212,
    2511.124])