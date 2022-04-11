function train (arr){

    let wagons = arr.shift().split(' ').map(Number)
    let maxCapacityOfWagon = arr.shift().split().map(Number)
    for (let i = 0; i < arr.length; i++){
        let command = arr[i].split(' ')
        let add = command[0]
        let amount = Number(command[1])
        if (add === 'Add'){
            wagons.push(amount)
        }else {
            add = Number(command[0])
            for (let i = 0; i < wagons.length; i++){
                if (wagons[i] + add <= maxCapacityOfWagon){
                    wagons.splice(i,1,wagons[i] + add)
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '))
    
//72 54 21 12 4 75 23 10 0
// //[OFF] Проблем ли е, ако не винаги успяваме да решаваме задачите по най-рационалният начин, ами си измисляме наш 'по-странен' алгоритъм и пак получим резултата?
// [OFF] Нормално ли е да се объркваме понякога при използването на методите? Като например кой индекс ще обхване slice/splice или пък при кой метод ще ни обърне масива в стринг или в друг масив?

// Вярно ли е, че Advance е най-тежкият модул от всички? 
// Смятате ли, че ако не изкараме пълен брой точки на изпита е по-добре да се откажем?
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)