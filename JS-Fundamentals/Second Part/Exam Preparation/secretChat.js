function secretChat(input){
    let word = input.shift()

    for (let el of input){
        let [command, index, replacement] = el.split(':|:')

        if (command === 'InsertSpace'){
            let before = word.substring(0, index)
            let after = word.substring(index)
            word = before + ' ' + after
            console.log(word)
        }else if (command === 'Reverse'){
            if (word.includes(index)){
                let indexOf = word.indexOf(index)
                let substring = word.substring(indexOf, indexOf + index.length)
                let before = word.substring(0, indexOf)
                let after = word.substring(indexOf + index.length)
                substring = substring.split('').reverse().join('')
                word = before + after + substring
                console.log(word)
            }else {
                console.log(`error`)
            }
        }else if (command === 'ChangeAll'){
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