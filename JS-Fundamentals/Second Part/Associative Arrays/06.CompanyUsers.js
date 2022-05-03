function companyUsers(arr){
    let list = new Map
    let newArr = [];
    for (let el of arr){
        let stringie = ''
        let [company, id] = el.split(' -> ')
        
        if (list.has(company)){
            stringie = list.get(company)
            let splitted = stringie.split(' ')
            let indexOf = splitted.indexOf(id)
            if (indexOf !== -1){
                continue;
            }else {
                stringie += ' '+ id
                list.set(company, stringie)
            }
        }else {
            list.set(company, id)
        }
    }
    
    let sorted = Array.from(list.keys()).sort((a,b) => a.localeCompare(b))
    
    for (let el of sorted){
        console.log(el)
        let split = list.get(el).split(' ')
        if (split.length > 1){
            for (let el of split){
                console.log(`-- ${el}`)
            }
        }else {
            console.log(`-- ${split.join('')}`)
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    
    )