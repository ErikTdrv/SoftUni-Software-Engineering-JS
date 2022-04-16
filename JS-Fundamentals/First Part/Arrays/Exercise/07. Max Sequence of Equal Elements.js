function maxSequenceofEqualElements(arr){
    // Write a function that finds the longest sequence of equal elements in an array of numbers. 
    // If several longest sequences exist, print the leftmost one.
    
    let newArray = []
    let firstArray = []

    for (let i = 0 ; i < arr.length; i++){
        firstArray = []
        for (let j = i ; j < arr.length ; j++){
            if (arr [i] === arr[j]){
                firstArray.push(arr[j])
            }else {
                break;
            }
            if (firstArray.length > newArray.length){
                newArray = firstArray
            }
        }
    }
    console.log(newArray.join(' '));
}
maxSequenceofEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])