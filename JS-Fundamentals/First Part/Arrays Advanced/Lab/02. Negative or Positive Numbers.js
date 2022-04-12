function negativeOrPositiveNumber(arr){

    let result = []

    for (element of arr){
        if (Number(element) >= 0){
            result.push(element)
        }else {
            result.unshift(element)
        }

        
    }
    console.log(result.join('\n'))
    // for (element of result){
    //     console.log(element)
    // }
}
negativeOrPositiveNumber(['7', '-2', '8', '9'])