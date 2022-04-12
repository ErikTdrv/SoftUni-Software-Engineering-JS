function firstandLaskKNumber(arr){
    let k = arr.shift()
    let firstEl = arr.slice(0, k).join(' ')
    let secondEl = arr.slice(-k).join(' ')
    
    console.log(firstEl + '\n' + secondEl)

}
firstandLaskKNumber([3,
    6, 7, 8, 9]
   
    )