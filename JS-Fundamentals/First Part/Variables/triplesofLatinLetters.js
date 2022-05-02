function triplesofLatinLetters (num){

let result = '';
for (i = 0; i < num; num++){
    let first = String.fromCharCode(97 + i)
    for (let j = 0; j < num; j++){
        let second = String.fromCharCode(97 + j)
        for (let k = 0; k < num; k++){
            let third = String.fromCharCode(97 + k)
            result += `${first}${second}${third} \n `
           
        }
    }
}

console.log(result)


}
triplesofLatinLetters(3)