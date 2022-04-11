function distinctArray (arr){

    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] === arr[j]){
                arr.splice (j, 1)
                j = j - 1 
            }
        }
    }
    //7 8 9 2 3 4 1
    console.log(arr.join(' '))
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])