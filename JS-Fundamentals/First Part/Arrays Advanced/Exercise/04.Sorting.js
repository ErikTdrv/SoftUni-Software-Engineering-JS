function sorting(arr){
    let sortedArray = arr.map(Number).sort((a,b) => b - a)
    let newArr = []
    
    while (sortedArray.length > 0){
        let biggerNumber = sortedArray.shift()
        let smallestNumber = sortedArray.pop()
        newArr.push(biggerNumber)
        newArr.push(smallestNumber)
    }
    console.log(newArr.join(' '))
// 94 1 69 2 63 3 52 18 31 21
//690 2 47 6 45 7 34 19 32 32
}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])