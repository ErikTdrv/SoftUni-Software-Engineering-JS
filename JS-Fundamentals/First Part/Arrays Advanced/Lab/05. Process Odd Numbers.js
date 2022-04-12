function oddNumbers(arr){

    let result ='';
    for (let i = 0; i < arr.length; i++){
        if (i %2 !== 0){
            arr[i] *= 2
            result += arr[i].toString() + ' '
        }
    }
    let split = result.split(' ').reverse().join(' ')
    console.log(split);
    

}
oddNumbers([3, 0, 10, 4, 7, 3])