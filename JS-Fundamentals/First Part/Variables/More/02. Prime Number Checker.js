function primeNumberChecker(num){
    let divided = 0;
   for (let i = 1 ; i < num; i++){
    if (num %i === 0){
        divided++
    }
   }
   if (divided > 2){
       console.log('false')
   }else {
       console.log('true');
   }
}
primeNumberChecker(14213423412431223312213321)