function calorieObject(arr){
    let list = {};
    for (let i = 0; i < arr.length; i++){
        let key = arr[i]
        let value = Number(arr[i + 1])
        if (i %2 === 0){
            list[key] = value
        }
    }
    console.log(list)

}
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])