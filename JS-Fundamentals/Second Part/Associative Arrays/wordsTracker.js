function wordsTracker(arrOFwords) {
    let objSearchedWords = {};
    let words = arrOFwords.shift().split(` `);
    for (const word of words) {
        objSearchedWords[word] = Number(0);
    }   

    
    for (const line of arrOFwords) {
        if (objSearchedWords.hasOwnProperty(line)) {
            objSearchedWords[line]++; //+=1
        } 
    }
    let sorded = Object.entries(objSearchedWords)
    sorded.sort((b,a) => a[1] - b[1])
    for (let [line, count] of sorded) {
        console.log(`${line} - ${count}`);
    }

}

wordsTracker(
    [
        'is the', 
        'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
        
)
