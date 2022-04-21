function printAndSum (a,b){
let sum = 0;
let sequence = '';
for (let i = a; i <= b; i++){
    sequence += i + ' '
    sum += i;
    
}
console.log(sequence)
console.log(`Sum: ${sum}`)


}
printAndSum(5, 21)
