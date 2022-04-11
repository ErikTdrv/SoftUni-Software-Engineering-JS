function bombNumbers(array, bomb){

 let bombNumber = bomb[0]
 let bombPower = bomb[1]
 let indexOfBombNumber = array.indexOf(bombNumber)

    while (indexOfBombNumber !== -1){
        let explosionStart = Math.max(0, indexOfBombNumber - bombPower)
        let explosionLength = bombPower*2 + 1
        array.splice(explosionStart, explosionLength)
        indexOfBombNumber = array.indexOf(bombNumber)
    }
    let sum = 0;
    for (let el of array){
        sum += el
    }
    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
    )