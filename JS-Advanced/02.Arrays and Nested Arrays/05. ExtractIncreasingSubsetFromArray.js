function extractIncreasingSubsetFromArray(arr){
    let num = 0; 
    let resultArr = [];
    for (let el of arr){
        if (el >= num){
            num = el;
            resultArr.push(num)
        }
    }
    return resultArr
    
}
extractIncreasingSubsetFromArray([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )