function rotateArray(array, number){

    for (let i = 0; i < number; i++){
        let num = array.pop()
        array.unshift(num)
    }
    console.log(array.join(' '))

}
rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15

)