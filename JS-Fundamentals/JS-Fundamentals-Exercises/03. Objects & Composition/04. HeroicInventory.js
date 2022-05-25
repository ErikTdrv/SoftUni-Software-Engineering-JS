function heroicInventory(arr){
    let list = {};
    let arrForList = [];
    if (arr.length > 0){

        for (let el of arr){
            let [name, level, items] = el.split(' / ');
            items = items.split(', ')
            level = Number(level);
            list = {
                name, 
                level, 
                items,
            }
            arrForList.push(list)
        }
    }
    if (arr.length > 0){

        console.log(JSON.stringify(arrForList))
    }
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)