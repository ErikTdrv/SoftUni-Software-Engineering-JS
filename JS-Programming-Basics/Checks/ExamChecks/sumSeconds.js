function sumSeconds(input){

    let firstRacer = Number(input[0]);
    let secondRacer = Number(input[1]);
    let thirdRacer = Number(input[2]);
    let totalTime = Number(firstRacer + secondRacer + thirdRacer);
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60

    
   

    if (seconds < 10){
        console.log(`${minutes}:0${seconds}`)
    }
    else{
        console.log(`${minutes}:${seconds}`);
    }

}
sumSeconds(['35','45','44']);