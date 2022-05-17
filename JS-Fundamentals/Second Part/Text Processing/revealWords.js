function revealWords(words, sentence){
    words = words.split(', ')
    for (let word of words){
       sentence = sentence.replace('*'.repeat(word.length), word)
        
    }
    console.log(sentence)
    
}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'

)