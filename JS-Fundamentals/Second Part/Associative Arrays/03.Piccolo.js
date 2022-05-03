function piccolo(input){
    // let num = arr[1].split('')
    let cars = {}
    let arrS = []
    let oneMore = []
    for (let el of input){
        let arr = el.split(', ')
        if (arr[0] === 'IN'){
            cars[arr[1]] = 'Parked'
        }else {
            cars[arr[1]] = null
        }
    }
    

    for (let el in cars){
        if (cars[el] !== null){
            arrS.push(el)
        }
    }
    let newArr = arrS.sort((a ,b ) => a.localeCompare(b))
    if (newArr.length === 0){
        console.log('Parking Lot is Empty')
    }else{
    for (const el of newArr) {
        console.log(el)
    }
    }
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']

)