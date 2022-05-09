function passwordReset(input){

    let key = input.shift()
    

    for (let el of input){
        if (el === 'Done')break;
        if (el.includes('TakeOdd')){
            let newKey = '';
            for (let i = 0; i < key.length; i++){
            if (i %2 !== 0){
                newKey += key[i]
            }
            }
            key = newKey
            console.log(key)
        }else if (el.includes('Cut')){
            let [command, index, length] = el.split(' ')
            let before = key.substring(0, index)
            index = +index + +length
            let after = key.substring(index)
            key = before + after
            console.log(key)
        }else if (el.includes('Substitute')){
            let [command, substring, substitute] = el.split(' ')
            if (key.includes(substring)){
                let pattern = new RegExp (substring, 'g')
                key = key.replace(pattern, substitute)
                console.log(key)
            }else {
                console.log(`Nothing to replace!`)
            }
        }
    }   
    console.log(`Your password is: ${key}`)


}
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])
