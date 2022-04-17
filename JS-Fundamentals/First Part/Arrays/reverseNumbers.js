function reverseNumbers(n, arr){
let newArr = []
for (let i = 0; i < n ; i++){
    newArr.push(arr[i])
}
let result = []
for (let j = n - 1; j >= 0; j--){
    result.push(arr[j])
    

}
console.log(result.join(' '));


}
reverseNumbers(3 , [10,20,30,40,50])