function fancyBarcodes(input){
    let regExp = /[@]{1}[#]{1,}(?<name>[A-Z][A-Za-z\d]{4,}[A-Z]{1,})[@]{1}[#]{1,}/
    let numRegExp = /\d/gm

    let num = input.shift()

    for (let i = 0; i < input.length; i++){
        if (regExp.test(input[i])){
            let exec = regExp.exec(input[i])
            let match = input[i].match(numRegExp)
            if (match === null){
                console.log(`Product group: 00`)
            }else {
                console.log(`Product group: ${match.join('')}`)
            }
            
        }else {
            console.log('Invalid barcode')
        }
    }

}
fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])

