function decrypting(input){
    let word = input.shift()

    for (let el of input){
        
        let [command, startIndex, endIndex] = el.split(' ')
        
        if (command === 'Replace'){
            while (word.includes(startIndex)){
                word = word.replace(startIndex, endIndex)
            }
            console.log(word)
        }else if (command === 'Cut'){
            let charS = word[+startIndex]
            let charE = word[+endIndex]
            endIndex = +endIndex + 1
                if (word.indexOf(charS) >= 0 && word.indexOf(charE) >= 0){
                    let before = word.substring(0, startIndex)
                    let after = word.substring(endIndex)
                    word = before + after
                    console.log(word) 
                }else {
                    console.log(`Invalid indices!`)
                }
        }else if (command === 'Make'){
            if (startIndex === 'Upper'){
                word = word.toUpperCase()
            }else if (startIndex === 'Lower'){
                word = word.toLowerCase()
            }
            console.log(word)
        }else if (command === 'Check'){
            if (word.includes(startIndex)){
                console.log(`Message contains ${startIndex}`)
            }else {
                console.log(`Message doesn't contain ${startIndex}`)
            }
        }else if (command === 'Sum'){
            let charS = word[startIndex]
            endIndex = +endIndex + 1
            let charE = word[endIndex]
            let indexOfS = word.indexOf(charS)
            let indexOfE = word.indexOf(charE)
            if (indexOfE >= 0 && indexOfS >= 0){
                let cutted = word.substring(startIndex, endIndex)
                let sum = 0

                for (let el of cutted){
                    sum += +(el.charCodeAt())
                }
                console.log(sum)
            }else {
                console.log(`Invalid indices!`)
            }
        }
    }



}
decrypting(["ILikeSoftUni",
"Replace I We",
"Make Upper",
"Check SoftUni",
"Sum 1 4",
"Cut 1 4",
"Finish"])

