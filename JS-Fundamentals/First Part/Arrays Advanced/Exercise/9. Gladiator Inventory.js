function gladiatorInventory(arr){
    let equipment = arr.shift().split(' ')
    for (let i = 0; i < arr.length; i++){
        let token = arr[i].split(' ')
        let command = token[0]
        let equipmentFight = token[1]

        if(command === 'Buy'){
            let includes = equipment.includes(equipmentFight)
            if (includes !== true){
                equipment.push(equipmentFight)
            }
        }else if(command === 'Trash'){
            let indexOfItem = equipment.indexOf(equipmentFight)
            if (indexOfItem !== -1){
                equipment.splice(indexOfItem, 1)
            }
        }else if(command === 'Repair'){
            let indexOfItem = equipment.indexOf(equipmentFight)
            if (indexOfItem !== -1){
                equipment.splice(indexOfItem, 1)
                equipment.push(equipmentFight)
            }
        }else if(command === 'Upgrade'){
            let newEq = equipmentFight.split('-')
            let searched = newEq[0]
            let upgrade = newEq[1]
            let indexOfItem = equipment.indexOf(searched)
            if (indexOfItem !== -1){
                equipment.splice(indexOfItem + 1, 0, `${searched}:${upgrade}`)
            }
        }
    }
    console.log(equipment.join(' '))
}
gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']

)