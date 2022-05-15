function stringSubstring(word, text){
    let didIt = false;
    let els = text.split(' ')
    for (let el of els){
        if (el.toLowerCase() === word){
            console.log(el.toLowerCase())
            didIt = true;
            break;
        }
    }
    if (!didIt){
        console.log(word.toLowerCase() + ' not found!')
    }
}
stringSubstring('python',
'JavaScript is the best programming language'

)