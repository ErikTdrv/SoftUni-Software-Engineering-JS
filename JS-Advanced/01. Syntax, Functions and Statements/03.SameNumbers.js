function sameNumbers(num){
    num = num.toString()
    let areTheSame = true;
    let sum = 0
    for (let i = 0; i < num.length; i++){
        let el = num[i]
        let nextEl = num[i+1]
        if (el != nextEl && nextEl*0 === 0){
            areTheSame = false
        }
        sum += Number(el)
    }
    if (areTheSame){
        console.log('true')
    }else{
        console.log('false');
    }
    console.log(sum);
    
}
sameNumbers(2222222)