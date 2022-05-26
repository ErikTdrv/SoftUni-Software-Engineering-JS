function magicMatrices(matrix){
    let arr = []
    let isMagical = true;

    for (let el of matrix){
        let sum = 0
        for (let num of el){
            sum += num
        }
        arr.push(sum)
    }

    for (let i = 0; i < arr.length; i++){
        let num = arr[i]
        let secondNum = arr[i + 1]
        if (num != secondNum){
            isMagical = false;
        }
        if (i < arr.length - 1)break;
    }

    if (!isMagical){
        console.log('false')
    }else{
        console.log(true)
    }
}
magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )