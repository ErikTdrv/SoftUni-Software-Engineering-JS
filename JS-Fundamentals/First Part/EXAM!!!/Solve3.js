function phoneShop(arr){

    let list = arr.shift().split(', ')
    
    

    for (let i = 0; i < arr.length; i++){
        let tokens = arr[i].split(' - ')
        let command = tokens[0]
        if (command === 'End'){
            break;
        }
        let phone = tokens[1]

        if (command === 'Add'){
            let includes = list.includes(phone)
            if (includes === false){
                list.push(phone)
            }
        }else if (command === 'Remove'){
            let indexOf = list.indexOf(phone)
            if (indexOf !== -1){
                list.splice(indexOf, 1)
            }
        }else if (command === 'Bonus phone'){
            let split = phone.split(':')
            let oldPhone = split[0]
            let newPhone = split[1]
            let indexOf = list.indexOf(oldPhone)
            if (indexOf !== -1){
                list.splice(indexOf + 1, 0, newPhone)
            }
        }else if(command === 'Last'){
            let indexOf = list.indexOf(phone)
            let saved;
            if (indexOf !== -1){
                saved = phone
                list.splice(indexOf, 1)
                list.push(saved)
            }
        }
    }
    console.log(list.join(', '))

}
phoneShop(["SamsungA50, MotorolaG5, IphoneSE",
"Add - Iphone10",
"Remove - IphoneSE",
"End"])



