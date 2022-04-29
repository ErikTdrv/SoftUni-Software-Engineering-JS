function sumDigits(a){

let numAsString = String(a)
let result = 0;
for (let i = 0; i < numAsString.length; i++){
result += Number(numAsString[i])
}
console.log(result)




}
sumDigits(543)