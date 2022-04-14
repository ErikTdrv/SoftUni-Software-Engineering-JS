function addOnSubtract (arr){
    // Write a function, which changes the value of odd and even numbers in an array of numbers. 
    // •	If the number is even - add to its value its index position
    // •	If the number is odd - subtract to its value its index position
    let stativeNumber = 0
    let result = 0
    let arr1 = []
    for (let i = 0; i < arr.length; i++){
        stativeNumber += arr[i]
        if (arr[i] %2 == 0){
            arr1.push(arr[i] + i)
            result += arr1[i]
        }else if( arr [i] %2 != 0){
            arr1.push(arr[i] - i)
            result += arr1[i]
        }
}

console.log(arr1);
console.log(stativeNumber);
console.log(result);


}
addOnSubtract([5, 15, 23, 56, 35])