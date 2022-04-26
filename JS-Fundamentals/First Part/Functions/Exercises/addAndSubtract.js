function addAndSubtract (a, b, c){
    
    function sum(num1, num2){
        let sumOfNumbers = num1 + num2
        return sumOfNumbers
    }
    let summedNumbers = sum (a, b)
    
    function divide (summedNumbers1, divident){
        let result = summedNumbers1 - divident
        return result
    }
    let resultt = divide (summedNumbers, c)
    console.log(resultt);
    
}
addAndSubtract(42,
    58,
    100
    )