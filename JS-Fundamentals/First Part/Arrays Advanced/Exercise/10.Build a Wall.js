function buildAWall (arr){
    let concrete = []
    let sum = 0;
    let resultSum = 0
    isDoneWorking = false
    while (isDoneWorking === false){
        sum = 0
        for (let i = 0; i < arr.length; i++){
            if (arr[i] !== 30){
                sum += 195
                arr.splice(i,1, arr[i] + 1)
            }
        }
        concrete.push(sum)
        let numLessThan30 = Math.min(...arr)
        if(numLessThan30 === 30){
            isDoneWorking = true
        }
    }
    let allsum = 0;
    concrete.map(x => allsum += x)

    console.log(concrete.join(', '))
    console.log(allsum*1900 + ' pesos')


}
buildAWall([21, 25, 28])