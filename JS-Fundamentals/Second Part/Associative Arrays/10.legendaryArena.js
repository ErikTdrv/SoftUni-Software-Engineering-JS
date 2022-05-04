function legendaryFarming(input){
    let list = {
        shards: 0,
        fragments: 0,
        motes: 0,
    }
    let junkList = {}
    input = input.split(' ')
    
    for (let i = 0; i < input.length; i+=2){
        let amount = Number(input[i])
        let item = input[i+1].toLowerCase()

        if (list.hasOwnProperty(item)){
            let sum = amount + list[item]
            list[item] = sum
            if (sum >= 250){
                let rest = list[item] - 250 
                if (item === 'shards'){
                    console.log('Shadowmourne obtained!')
                }else if (item === 'fragments'){
                    console.log('Valanyr obtained!')
                }else if (item === 'motes'){
                    console.log('Dragonwrath obtained!')
                }
                list[item] = rest
                break;
            }
        }else {
            if (junkList.hasOwnProperty(item)){
            let junkSum = junkList[item] + amount
            junkList[item] = junkSum
            }else {
                junkList[item] = amount
            }
        }
    }
    let sortedList = Object.entries(list).sort((b,a) => a[1] - b[1] || b[0].localeCompare(a[0]))
    let sortedJunkList = Object.entries(junkList).sort((a,b) => a[0].localeCompare(b[0]))
    console.log(sortedList)
    for (let [name, amount] of sortedList){
        console.log(`${name}: ${amount}`)
    }
    for (let [name, amount] of sortedJunkList){
        console.log(`${name}: ${amount}`)
    }
    

}