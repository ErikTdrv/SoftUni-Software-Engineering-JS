function smallestTwoNumbers(arr){

    let newArr = arr.sort((a,b) => a - b).slice(0,2).join(' ')
    console.log(newArr)
    



}
smallestTwoNumbers([3, 0, 10, 4, 7, 3])