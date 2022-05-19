function greatestCommonDivisor(firstNum, secondNum){
    stored = 1

    for (let i = 1; i < firstNum; i++){
        if (firstNum % i === 0 && secondNum % i === 0){
            stored = i
        }
    }

    console.log(stored)

}
greatestCommonDivisor(2154, 458)