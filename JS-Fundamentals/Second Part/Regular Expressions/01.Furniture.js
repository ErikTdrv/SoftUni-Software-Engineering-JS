function furniture(input){

    console.log('Bought furniture:')
    let totalSum = 0;
    
    
    for (let line of input){
        if (line === 'Purchase'){
            break;
        }
        let regExp = />>(?<name>[A-Za-z\s]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/
        let result = regExp.exec(line)
        if (result !== null){
            console.log(result.groups.name)
            totalSum += +result.groups.price * +result.groups.quantity
        }
        
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`)
}
furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']

)