function mirrorWords(input){

    
    let regExp = /(@|#)(?<first>[A-Za-z]{3,})\1\1(?<second>[A-Za-z]{3,})\1/g
    let counter = 0;
    let stringie = ''
    let match = input[0].match(regExp)
    let isDone = false;
    let arr = []
    if (match){
        console.log(`${match.length} word pairs found!`)
    }else {
        console.log('No word pairs found!')
        isDone = true
    }
    if (isDone === false){
    for (let i = 0; i < match.length ; i++){
        let el = regExp.exec(input)
        let reversed = el.groups.second.split('').reverse().join('')
        if (el.groups.first === reversed){
            counter++
            let inside = el.groups.first + ' <=> ' + el.groups.second
            arr.push(inside)
            // if (i === match.length - 1){
            //     stringie += inside
            // }else {
            // stringie += inside + ', '
            // }
        }
    }
}
if (counter === 0){
    console.log('No mirror words!')
}else {
    console.log(`The mirror words are:`)
    console.log(arr.join(', '))
}
    


}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
    
    )