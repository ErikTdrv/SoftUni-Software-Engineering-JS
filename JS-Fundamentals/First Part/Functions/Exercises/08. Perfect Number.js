function perfectNumber(number){
    // Write a function that receives a number and checks if that number is perfect or NOT.
    // A perfect number is a positive integer that is equal to the sum of its proper positive divisors. 
    // That is the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
    // let divisors = []
    // for (let i = 1; i <= number /2; i++){
    //     if (number %i === 0){
    //         divisors.push(i)
    //     }
    // }

    // let sum = 0
    // divisors.map(x => sum += x)

    // if (sum === number){
    //     console.log('We have a perfect number!')
    // }else {
    //     console.log("It's not so perfect.")
    // }

    function findItsDivisors (num){  //Намираме делителите на даденото число
        let dividors = []
        for (let i = 1; i < num; i++){
            if (num %i === 0){
                dividors.push(i)     // Присвояваме делителите към допълнителен масив
            }
        }
        return dividors
    }
    let arrOff = findItsDivisors(number)   // Запазваме масива във външен масив който ще използваме след това


    
    function sumItsDivisors (arr){      // Намираме сбора на делителите, чрез итерация на външният масив
        let sum = 0;
        for (let i = 0; i < arr.length; i++){
            sum += arr[i]
        }
        return sum
    }
    


    function isPerfect (num){           // Проверяваме дали числото е перфектно
        if (sumItsDivisors(arrOff) === num){
            return `We have a perfect number!`
        }else {
            return `It's not so perfect.`
        }
    }
    console.log(isPerfect(number))

}
perfectNumber(28)