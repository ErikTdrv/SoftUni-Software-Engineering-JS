function sortingNumbers(arr){

    arr.sort((a,b) => a - b);
    let resultArray = [];
    let length = arr.length / 2

    for (let i = 0; i < length; i++){
        let firstNum = arr.shift()
        let secondNum = arr.pop()
        resultArray.push(firstNum, secondNum)
    }
    return resultArray
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))