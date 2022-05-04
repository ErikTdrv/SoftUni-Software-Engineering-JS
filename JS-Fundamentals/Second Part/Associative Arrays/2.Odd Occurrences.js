function oddOccurences(input){
    let arr = input.split(' ')
    let list = new Map
    let finalArr = []
    
    for (let el of arr){
        if(!list.has(el.toLowerCase())){
            list.set(el.toLowerCase(), 1)
        }else if (list.has(el.toLowerCase())){
            let numberBefore = list.get(el.toLowerCase())
            list.set(el.toLowerCase(), numberBefore += 1 )
        }
    }
    let iterable = list.keys()
    for (let el of iterable) {
        if(list.get(el) %2 !== 0){
            finalArr.push(el)
        }
    }
    console.log(finalArr.join(' '))

}
oddOccurences('Cake IS SWEET is Soft CAKE sweet Food')