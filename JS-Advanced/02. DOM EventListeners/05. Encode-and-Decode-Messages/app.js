function encodeAndDecodeMessages() {
    let firstTextAreaElement = document.querySelectorAll('textarea')[0];
    let secondTextAreaElement = document.querySelectorAll('textarea')[1];
    let encodeButton = document.querySelectorAll('button')[0];
    let decodeButton = document.querySelectorAll('button')[1];
    
    encodeButton.addEventListener('click', e => {
        let text = firstTextAreaElement.value;
        let stringie = ''
        for (let el of text){
            let asciiNum = el.charCodeAt() + 1 
            stringie += String.fromCharCode(asciiNum)
        }
        firstTextAreaElement.value = '';
        secondTextAreaElement.value = stringie;
    })
    decodeButton.addEventListener('click', e => {
        let text = secondTextAreaElement.value;
        let stringie = ''
        for (let el of text){
            let asciiNum = el.charCodeAt() - 1 
            stringie += String.fromCharCode(asciiNum)
        }
        
        secondTextAreaElement.value = stringie;
    })

}