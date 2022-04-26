function charactersInRange(char1, char2) {

    let startChar = Math.min(char1.charCodeAt(0), char2.charCodeAt(0))
    let endChar = Math.max(char1.charCodeAt(0), char2.charCodeAt(0))

    let charsInRange = []

    for (let index = startChar + 1; index < endChar; index++) {
        charsInRange.push(String.fromCharCode(index))
        
    }
    console.log(charsInRange.join(' '));





}
charactersInRange('a',
    'd'
)