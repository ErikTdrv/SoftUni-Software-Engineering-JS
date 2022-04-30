function binaryToDecimal(binary){
    
    let sum = 0
    let reversed = binary.split('').reverse().join('')
    for (let i = 0; i < reversed.length; i++){
        sum += (reversed[i] * Math.pow(2, i))
        
    }
    
    console.log(sum)
}
binaryToDecimal('00001001')


// let reversed = binary.split("").reverse().join("");
// for (let k = 0; i < reversed.length; k++) {
//     sum += (reversed[k] * Math.pow(2, k));
// }
// console.log(sum);