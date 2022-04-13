function evenAndOddSubtraction(arr){
// Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.
let oddSum = 0
let evenSum = 0;

for (let a of arr){
    if (a % 2 == 0){
        evenSum += a
    }else {
        oddSum += a
    }

}
console.log(evenSum - oddSum);




}
evenAndOddSubtraction([1,2,3,4,5,6])