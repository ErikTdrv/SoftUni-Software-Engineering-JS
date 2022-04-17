function mergeArrays(a, b){
    // •	If the index of the element is even, add into the third array the sum of both elements at that index
    // •	If the index of the element is odd, add the concatenation of both elements at that index

    let c = []
    for (let i = 0; i < a.length; i++){
        if (i %2 == 0){
            c.push(Number(a[i]) + Number(b[i]))
            
            
        }else {
            c.push(a[i] + b[i])
            
        }
    }
    console.log(c.join(' - '));

}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)