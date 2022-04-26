function oddAndEvenSum (a){
    let evenSum = 0
    let oddSum = 0
    let numAsString = a.toString()
    let divident = 1;

    // for (let i = 0; i < a.length; i++){
    //     if (a %divident == 0){
    //         evenSum += a % divident
    //     }else {
    //         oddSum += a % divident
    //     }
    //     divident += 10
    // }

    for (let i = 0; i < numAsString.length; i++){
        if (Number(numAsString[i]) %2 === 0){
            evenSum += Number(numAsString[i])

        }else{
            oddSum += Number(numAsString[i])
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);



}
oddAndEvenSum(1000435)