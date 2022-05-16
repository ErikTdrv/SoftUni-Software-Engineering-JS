function cutAndReverse(input){
    let cutter = Math.trunc(input.length/2)
    let first = input.substring(0, cutter)
    let second = input.substring(cutter)
    console.log(first.split('').reverse().join(''))
    console.log(second.split('').reverse().join(''))


}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')