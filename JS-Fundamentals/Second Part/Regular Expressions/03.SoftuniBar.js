function softuniBar(input){
    let list = {};
    let totalPrice = 0;
    for (let el of input){
        if (el === 'end of shift')break;
        let sum = 0;
        let regExp = /%(?<name>[A-Z][a-z]+)%[^|$%.]*?<(?<product>[\w]+)>[^|$%.]*?\|(?<count>[\d]+)\|[^|$%.]*?(?<price>[\d]+(.[\d]+)?)\$/
        let result = regExp.exec(el)
        if (result !== null){
        sum = +result.groups.count * +result.groups.price
        console.log(`${result.groups.name}: ${result.groups.product} - ${sum.toFixed(2)}`)
        totalPrice += sum
        }
        
        
    }
    
    console.log(`Total income: ${totalPrice.toFixed(2)}`)

}
softuniBar(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']


)