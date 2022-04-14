function equalSums (arr){
    // Write a function that determines if there exists an element in the array of numbers such that the sum of the elements on its left is equal to the sum of the elements on its right. 
    // If there are NO elements to the left/right, their sum is 0. 
    // Print the index that satisfies the required condition or "no" if there is no such index.
     
    let hasEqualSum = false;
    
    for (let i = 0; i < arr.length; i++){
        let leftSum = 0
        let rightSum = 0
        for (let j = i - 1; j >= 0; j--){
            leftSum += arr[j]
        }
        for (let num = i + 1; num < arr.length; num++){
            rightSum += arr[num]
        }
        if (leftSum === rightSum){
            console.log(i);
            hasEqualSum = true;
        }
    }


    if (!hasEqualSum){
        console.log('no');
    }
}
equalSums([1, 2, 3, 3])
