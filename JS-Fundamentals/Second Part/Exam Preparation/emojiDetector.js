function emojiDetector(input){

    let regExp = /(:|\*){2}([A-Z][a-z]{2,})\1\1/g
    let digitsRegExp = /\d/g

    let matchOfDigits = input[0].match(digitsRegExp)
    let matchOfWords = input[0].match(regExp)
    let coolThreshold = 1;
    for (let el of matchOfDigits){
        coolThreshold *= (+el)
    }
    console.log(`Cool threshold: ${coolThreshold}`)
    console.log(`${matchOfWords.length} emojis found in the text. The cool ones are:`)


    for (let el of matchOfWords){
        let newRegExp = /[A-Z][a-z]{2,}/
        let exec = newRegExp.exec(el)
        let word = exec[0]
        let sum = 0;
        for (let el of word){
           sum += el.charCodeAt()
        }
        if (sum >= coolThreshold){
            console.log(el)
        }
        
    }
}
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])