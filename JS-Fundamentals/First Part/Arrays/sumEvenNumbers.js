function sumEvenNumbers(arr){
//Write a program, which receives an array of strings, parse them into numbers, and sum only the even numbers.
// First solution----------
// let sum = 0
// for (let a of arr){
//     if (a % 2 == 0){
//         a = Number(a)
//         sum += a
//     }
// }
// console.log(sum);
//Second solution-----------
for (let i = 0; i < arr.length; i++){
    arr[i]= Number(arr[i])
}
console.log(arr);
}
sumEvenNumbers(['1','2','3','4','5','6'])