function maxNumber(arr){
    // Write a function to find all the top integers in an array.
    //  A top integer is an integer, which is bigger than all the elements to its right. 
    let result = []
    for (let i = 0; i < arr.length; i++){
       let currElement = arr[i]
       let isTopInteger = true;

       for (let j = i + 1; j < arr.length; j++){
           let nextEl = arr[j]
           if (currElement <= nextEl){
               isTopInteger = false;
               break;
           }
       }

       if (isTopInteger){
           result.push(currElement)
       }
    }
console.log(result.join(' '));

}
maxNumber([1, 4, 3, 2])