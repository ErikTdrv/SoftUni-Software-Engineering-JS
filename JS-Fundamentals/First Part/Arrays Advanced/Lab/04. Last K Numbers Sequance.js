function solve(n, k){

    let element = [1]

    for (let i = 0; i < n - 1; i++){
        let lastEl = element.slice(-k) 
        let sum = 0
        for (let el of lastEl){
            sum += el
        }
        element.push(sum)
    }

    console.log(element.join(' '))



}
solve(6, 3)