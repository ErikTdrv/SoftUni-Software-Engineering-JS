function condenseArrayToNumber (arr){
// Write a program, which receives an array of numbers, 
// and condenses them by summing adjacent couples of elements until a single number is obtained. 
let sum = 0;
let condensed = []
for (let i = 0; i < arr.length - 1; i++){
    condensed [i] = arr[i] + arr[i + 1]
    
}
condensed = condensed[0] + condensed[1]

console.log(condensed);



}
condenseArrayToNumber([5,0,4,1,2])
