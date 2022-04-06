function toyShop(input){

let tripPrice = Number(input[0])
let puzzleCount = Number(input[1]);
let speakingDollCount = Number(input[2]);
let teddyBearCount = Number(input[3]);
let minionCount = Number(input[4]);
let truckCount = Number(input[5]);
let discount = 0;

let orderedToys = puzzleCount + speakingDollCount + minionCount + teddyBearCount + truckCount
let price = puzzleCount*2.60 + speakingDollCount*3 + teddyBearCount*4.10 + minionCount*8.20 + truckCount*2;


if(orderedToys >= 50){
    price = price * 0.75; 
    
}

price = price * 0.90;
let diff = Math.abs(price - tripPrice);

if(price >= tripPrice){
    console.log(`Yes! ${diff.toFixed(2)} lv left.`)
}else{
    console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
}


}
toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])

