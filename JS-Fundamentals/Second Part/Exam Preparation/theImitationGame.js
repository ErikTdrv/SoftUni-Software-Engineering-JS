function theImitationGame(input){

    let key = input.shift()

    for (let el of input){
        if (el === 'Decode')break;
        let [type, index, value] = el.split('|')
        if (type === 'Move'){
            let substring = key.substring(0, index)
            let after = key.substring(index)
            key = after + substring
        }else if(type === 'Insert'){
            let before = key.substring(0, index)
            let after = key.substring(index)
            key = before + value + after
        }else if(type === 'ChangeAll'){
            // if (key.includes(index)){
            // let pattern = new RegExp(index, 'g')
            // key = key.replace(pattern, value)
            // }
            while (key.includes(index)){
                key = key.replace(index, value)
            }
        }
    }
    console.log(`The decrypted message is: ${key}`)
}
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]
  )