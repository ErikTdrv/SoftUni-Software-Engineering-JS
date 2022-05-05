function secretChat(input){
    let word = input.shift()

    for (let el of input){
        if (el === 'Reveal'){
            break;
        }
        let [type, index, replacement] = el.split(':|:')
        if (type === 'InsertSpace'){
            let space = ' ';
            // let splitted = word.split('')
            // splitted.splice(index, 0, space)
            // word = splitted.join('')
            // console.log(word)
            let before = word.substring(0, index)
            let after = word.substring(index)
            word = before + space + after
            console.log(word)
        }else if (type === 'Reverse'){
            if (word.includes(index)){
                let indexOf = word.indexOf(index)
                let substring = word.substring(indexOf, indexOf + index.length)
                let before = word.substring(0, indexOf)
                let after = word.substring(indexOf + index.length)
                substring = substring.split('').reverse().join('')
                word = before + after + substring
                console.log(word)
            }else console.log('error')
        }else if (type === 'ChangeAll'){
            // while (word.includes(index)){
            //     word = word.replace(index, replacement) 
            //     console.log(word)
            // }
            let pattern = new RegExp(index, 'g')
            word = word.replace(pattern, replacement)
            console.log(word)
        }
    }
    console.log(`You have a new text message: ${word}`)

}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]
  
  )