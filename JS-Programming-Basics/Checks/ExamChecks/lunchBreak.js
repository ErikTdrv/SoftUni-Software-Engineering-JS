function lunchBreak(input){

    let serialName = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);
    
    let timeForLunch = (breakDuration * 1/8).toFixed(1);
    let timeForFun =  (breakDuration * 1/4).toFixed(1);
    let timeRest = breakDuration - timeForFun - timeForLunch;
    
    
    let diff = Math.abs(timeRest - episodeDuration)
    if (episodeDuration <= timeRest){
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(diff)} minutes free time.`)
    }else if(episodeDuration > timeRest)
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(diff)} more minutes.`);


}
lunchBreak(["Teen Wolf",
"48",
"60"])
