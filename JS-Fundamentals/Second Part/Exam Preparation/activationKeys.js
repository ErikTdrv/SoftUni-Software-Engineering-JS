function activationKeys(input){
    let key = input.shift()
    input.pop()
    for (let el of input){

        let [type, startIndex, endIndex, moreIndex] = el.split('>>>')

        if (type === 'Contains'){
            let indexOf = key.indexOf(startIndex)
            if (indexOf !== -1){
                console.log(`${key} contains ${startIndex}`)
            }else {
                console.log(`Substring not found!`)
            }
        }else if (type === 'Flip'){ 
            let before = key.substring(0, endIndex)
            let after = key.substring(moreIndex)
            let flipped = key.substring(endIndex, moreIndex)
            if (startIndex === 'Upper'){
                flipped = flipped.toUpperCase()
            }else {
                flipped = flipped.toLowerCase()
            }
            key = before + flipped + after
            console.log(key)
        }else if (type === 'Slice'){
            let before = key.substring(0, startIndex)
            let after = key.substring(endIndex)
            key = before + after
            console.log(key)
        }
    }

    console.log(`Your activation key is: ${key}`)

}
activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"]

)