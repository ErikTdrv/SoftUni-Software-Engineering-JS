function shoppingList(arr){
    let list = arr.shift().split('!')

    for (let i = 0; i < arr.length; i++){
        tokens = arr[i].split(' ')
        let status = tokens[0]
        let item = tokens[1]  
        if (tokens === 'Go Shopping!'){
            break;
        }
        if (status === 'Urgent'){
            let itExist = list.indexOf(item)
            if (itExist === -1){
                
                list.unshift(item)
            }
        }else if (status === 'Unnecessary'){
            let indexOfItem = list.indexOf(item)
            if (indexOfItem !== -1){
                list.splice(indexOfItem,1)
            }
        }else if (status === 'Correct'){
            let newItem = tokens[2]
            let indexOfItem = list.indexOf(item)
            if (indexOfItem !== -1){
                list.splice(indexOfItem, 1, newItem)
            }
        }else if (status === 'Rearrange'){
            let indexOf = list.indexOf(item)
            if (indexOf !== -1){
                let el = list.splice(indexOf, 1)
                list.push(el)
            }
        }
    }
    console.log(list.join(', '))
}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

//Salt, Milk, Pepper, Water, Banana
//Salt, Milk, Onion, Water, Banana
//



//6:17