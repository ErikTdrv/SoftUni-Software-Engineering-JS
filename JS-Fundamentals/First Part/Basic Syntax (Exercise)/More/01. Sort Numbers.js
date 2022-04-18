function findSmallestNumber(numOne, numTwo, numThree) {
    let arrOfNums = [numOne, numTwo, numThree];
    let sorted = arrOfNums.sort()
    console.log(sorted[2])
    console.log(sorted[1])
    console.log(sorted[0]);
}
findSmallestNumber(2,1,3)