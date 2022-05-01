function specialNumbers (a){
let sum = 0;
for (let i = 1; i <= a; i++){
    b = i
    if (b > 10){
        //17
    let secondDigit = b % 10
        sum = sum + secondDigit
     b = b - secondDigit
    let firstDigit = parseInt(b / 10)
    console.log(secondDigit)
    console.log(firstDigit)
    


    }
}




}
specialNumbers(17)