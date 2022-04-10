function operationBetweenNumbers (input){

    let number1 = Number(input[0]);
    let number2 = Number(input[1]);
    let operator = input[2];

    if ( operator === '+'){
        let res = number1 + number2;
        if ( res % 2 === 0){
            console.log(`${number1} ${operator} ${number2} = ${res} - even`);
        }else {
            console.log(`${number1} ${operator} ${number2} = ${res} - odd`);
        }
    }else if (operator === '-'){
        let res = number1 - number2;
        if ( res % 2 === 0){
            console.log(`${number1} ${operator} ${number2} = ${res} - even`);
        }else {
            console.log(`${number1} ${operator} ${number2} = ${res} - odd`);
        }
    }else if (operator === '*'){
        let res = number1 * number2;
        if ( res % 2 === 0){
            console.log(`${number1} ${operator} ${number2} = ${res} - even`);
        }else {
            console.log(`${number1} ${operator} ${number2} = ${res} - odd`);
        }
    }else if (operator === '/'){
        if (number2 === 0){
            console.log(`Cannot divide ${number1} by zero`)
        }else {
            res = number1 / number2;
            console.log(`${number1} / ${number2} = ${res.toFixed(2)}`)
        }
    }else {
        if (number2 === 0){
            console.log(`Cannot divide ${number1} by zero`);
        }else {
            let res = number1 % number2 ;
            console.log(`${number1} % ${number2} = ${res}`)
        }
    }
}
operationBetweenNumbers(["10",
"3",
"%"])



