function timeAdd15Minutes(input){

    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalMin = hours * 60 + minutes + 15;

    let totHours = Math.floor(totalMin / 60);
    let totMinutes = totalMin % 60;

    if(totHours > 23){
        totHours = 0;
    }


    if (totMinutes < 10){
        console.log(`${totHours}:0${totMinutes}`)
        }
    else{
    console.log(`${totHours}:${totMinutes}`);
    }
    

    

}
timeAdd15Minutes(['23','46']);