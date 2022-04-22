function numbers (num){
    let arr = num.split(' ').map(Number);
    let sum = 0
    let average = arr.map(x => sum += x)
    average = sum / arr.length
    let newArr = []
    
    for (let el of arr){
        if (el > average){
            newArr.push(el)
        }
    }
    newArr.sort((a,b) => b - a)
    for (let i = 0; i < arr.length; i++){
        if (newArr.length - 1 >= 5){
            newArr.pop()
        }
    }
    if (newArr.length > 0){
        console.log(newArr.join(' '))
    }else{
        console.log('No')
    
    }
}
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')