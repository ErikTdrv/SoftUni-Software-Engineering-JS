function spiceMustFlow(yield){
    let days = 0;
    let yieldLeft = 0
    let sum = 0;
    while (yield > 99){
        yieldLeft = yield - 26
        sum += yieldLeft
        days++
        yield = yield - 10
    }
    
    
    console.log(days);
    if (days != 0){
        sum -= 26
        console.log(sum);
    }else {
        console.log(yieldLeft)
    }
    
    
}
spiceMustFlow(450)