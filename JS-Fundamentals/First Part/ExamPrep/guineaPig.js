function guineaPig(arr){
    let days = 0
    let food = Number(arr.shift())*1000
    let hay = Number(arr.shift())*1000
    let cover = Number(arr.shift())*1000 //for 30 days in KGs
    let pigWeight = Number(arr.shift())*1000
    let isEnough = true

    for (let i = 1; i <= 30; i++){
        if (food < 300 || hay < food * 0.05 || cover < pigWeight / 3) {
            console.log('Merry must go to the pet store!');
            isEnough = false;
            break
        }
        food -= 300
        
        if (i %2 === 0){
            hay -= food*0.05
        }
        if (i %3 === 0){
            cover -= pigWeight/3
        }
        
    }
    

    if (isEnough){
    console.log(`Everything is fine! Puppy is happy! Food: ${(food/1000).toFixed(2)}, Hay: ${(hay/1000).toFixed(2)}, Cover: ${(cover/1000).toFixed(2)}.`)
    }






// everyday 300g food
// Merry feeds him every second day
//gives amount of hay equal 5% of the rest of the food
//on the third day puts a cover with a quantity 1/3 of its weight
    // while (food*hay*cover*pigWeight !== 0){
    //     days++
    //     food -= 300
    //     if (days %2 === 0){
    //         hay -= food*0.05
    //     }
        
    //     if (days %3 === 0){
    //         cover -= pigWeight/3
    //     }
    //     if (days === 31){
    //         break;
    //     }
    // }
    // if (days === 30 &&food*hay*cover*pigWeight !== 0 ){
    //     console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`)
    // }else {
    //     console.log(`Merry must go to the pet store!`)
    // }
}
guineaPig(["9",
"5",
"5.2",
"1"])

