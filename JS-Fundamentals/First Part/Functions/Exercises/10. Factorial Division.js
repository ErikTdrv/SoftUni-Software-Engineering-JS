function factorialDivision(firstNumber, secondNumber){

    function firstFactorial(firstNum){
        let result = firstNum
        for (let i = firstNum - 1 ; i >= 1; i--){
            result *= i
        }
        return result
    }
    function secondFactorial(secondNumber){
        let result = secondNumber
        for (let i = secondNumber - 1 ; i >= 1; i--){
            result *= i
        }
        return result
    }
    function dividing(firstFactorial, secondFactorial){
        return firstFactorial/secondFactorial
    }
    console.log(dividing(firstFactorial(firstNumber), secondFactorial(secondNumber)).toFixed(2));
}
factorialDivision(5, 2)