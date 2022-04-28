function division (number){
let divisibleBy = 0;
for (let i = 1; i < number; i++){
    if (number % i === 0){
        divisibleBy = i;
    }
}
console.log(`The number is divisible by ${divisibleBy}`)

}
division(30)