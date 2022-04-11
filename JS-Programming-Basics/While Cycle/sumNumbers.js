function sumNumbers (input){
    let index = 1;
    let number = input[0]
    let currentNumber = input[index];
    let total = 0;
    
    while (total < number){
        total += currentNumber
        index++
        currentNumber = input[index];
    }

    console.log(total)
}
sumNumbers([100,
10,
20,
30,
40])
