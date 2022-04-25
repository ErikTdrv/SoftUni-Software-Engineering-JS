function loadingBar (num){

    let barArr = ".........."
    let newarr = barArr.split('')
    let counter = 0
    let index = 0;

    for (let i = 10; i <= num; i+=10){
        counter += i
        newarr[index] = '%'
        index++
    }
    
    if (num < 100){
        console.log(`${num}% [${newarr.join('')}]`)
        console.log('Still loading...')
    }else{
        console.log('100% Complete!')
        console.log(`[${newarr.join('')}]`)
    }

}
loadingBar(100)