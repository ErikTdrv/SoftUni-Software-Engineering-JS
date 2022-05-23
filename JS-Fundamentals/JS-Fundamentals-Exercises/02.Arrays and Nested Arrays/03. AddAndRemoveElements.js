function addAndRemoveElements(array){
    let number = 1
    for (let el of array){
        console.log(number)
        if (el === 'add'){
            number++
        }else{
            number--
        }
    }
}
addAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']

)