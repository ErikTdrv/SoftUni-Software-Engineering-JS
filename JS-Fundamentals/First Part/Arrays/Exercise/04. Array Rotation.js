function arrayRotation(arr, rotations){
// // Write a function that receives an array and the number of rotations you have to perform. 
// Note: Depending on the number of rotations, the first element goes to the end.
let result = '';

for (let i = 0; i < rotations; i++){
    arr.push(arr[0])
    arr.shift(arr[0])
    
}
for (let i = 0; i < arr.length; i++){
    result += arr[i].toString()
    result += ' '
}
console.log(result);
}
arrayRotation([51, 47, 32, 61, 21], 2)