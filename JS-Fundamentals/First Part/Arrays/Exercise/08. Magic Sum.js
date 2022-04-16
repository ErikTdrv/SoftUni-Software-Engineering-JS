function magicSum (arr, sum){
    // Write a function, which prints all unique pairs in an 
    // array of integers whose sum is equal to a given number. 

    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] == sum){
                
                console.log(`${arr[i]} ${arr[j]}`)
                
            }
        }
    }



}
magicSum([14, 20, 60, 13, 7, 19, 8], 27 )