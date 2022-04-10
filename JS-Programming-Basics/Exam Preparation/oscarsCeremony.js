function oscarsCeremony(input){


    let price = Number(input[0])
    let total = 0;

    let statuetki = price*0.70
    let cetaring = statuetki* 0.85
    let ozv = cetaring * 0.50
    
    total = statuetki + cetaring + ozv + price
    console.log(total.toFixed(2))
    
    


















}
oscarsCeremony(['3500'])