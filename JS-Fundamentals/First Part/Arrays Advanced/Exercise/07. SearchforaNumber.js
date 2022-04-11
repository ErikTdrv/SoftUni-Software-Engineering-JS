function searchForANumber(array, conditions){

    let elToTake = conditions.shift()
    let elToDelete = conditions.shift()
    let elToSearch = conditions.shift()
    let newArr = array.splice(0, elToTake)
    let counter = 0;
    newArr.splice(0,elToDelete)
    
    // while (includeEl === true){
    // counter++
    // includeEl = newArr.includes(elToSearch)
    //     if (includeEl === true){
    //         counter++
    //     }
    // }
    for (let i = 0; i < newArr.length; i++){
        if (newArr[i] === elToSearch){
            counter++
        }
    }
    console.log(`Number ${elToSearch} occurs ${counter} times.`)



}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )