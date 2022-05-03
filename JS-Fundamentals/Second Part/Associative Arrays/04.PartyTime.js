function partyTime(input){

    let normal = new Map
    let vipS = new Map
    let counter = 0;
    let index = input.indexOf('PARTY')
    let guests = input.splice(0, index)
    input.shift()
    let arr = []
    let normalArr = []
    for (let el of guests){
    if (!Number.isNaN(Number(el[0]))){
        vipS.set(el)
    }else {
        normal.set(el)
    }
    }
    

    for (let el of input){
        if (normal.has(el)){
            normal.set(el, 'came')
        }else if (vipS.has(el)){
            vipS.set(el, 'came')
        }
    }
    for (let el of vipS){
        if (el[1] !== 'came'){
            counter++
            arr.push(el[0])
        }
    }
    for (let el of normal){
        if (el[1] !== 'came'){
            counter++
            normalArr.push(el[0])
        }
    }
    console.log(counter)
   
    for (let el of arr){
        console.log(el)
    }
    for (let el of normalArr){
        console.log(el)
    }

}
partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]

)