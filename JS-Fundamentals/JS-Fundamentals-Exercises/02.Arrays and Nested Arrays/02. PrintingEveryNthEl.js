function printingEveryNthElement(array, number){
    let resultArray = []
    for (let i = 0; i < array.length; i++){
        let el = array[i]
        if (i %number === 0){
            resultArray.push(el)
        }
    }
    return resultArray
}
printingEveryNthElement(['1', 
'2',
'3', 
'4', 
'5'], 
6

)