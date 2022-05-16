function replace (text){
    let unique = '';
    for (let index = 0; index < text.length; index++){
        let currChat = text.charAt(index)
        let nextChar = text.charAt(index + 1)
        if (currChat !== nextChar){
            unique += currChat;
        }
    }
    console.log(unique)
}
replace('aaaaabbbbbcdddeeeedssaa')