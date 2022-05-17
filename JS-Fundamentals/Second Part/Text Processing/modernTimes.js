function modernTimes(arr){
    let words = arr.split(' ')
    
    for(let word of words){
        if (word.startsWith('#') && word.length > 1){
            let isLetter = (word.charCodeAt(1) >= 65 && word.charCodeAt(1) <= 90) || (word.charCodeAt(1) >= 97 && word.charCodeAt(1) <= 122) 
            if (isLetter){
                console.log(word.substring(1))
            }
        }
    }



}
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')