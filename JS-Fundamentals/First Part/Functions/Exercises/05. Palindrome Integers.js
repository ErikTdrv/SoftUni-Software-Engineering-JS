function palindromeIntegers (inputArr){
    let arrOfNums = inputArr

    function isPalindrom(number){
        let startNum = number
        let reversedNum = (Number(number.toString().split('').reverse().join('')))
        if (startNum === reversedNum){
            return true
        }else{
            return false
        }
    }

    for (let i = 0; i < arrOfNums.length; i++){
        let currNum = arrOfNums[i]
        console.log(isPalindrom(currNum))

    }

}
palindromeIntegers([123,323,421,121])