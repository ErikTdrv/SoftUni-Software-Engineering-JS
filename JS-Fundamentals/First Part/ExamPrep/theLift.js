function theLift(arr){
    let people = Number(arr.shift())
    let wagons = arr[0].split(' ').map(Number)
    let sumToAdd = 0
    let sum = 0
    let isFull = false;
    
    for (let i = 0; people > 0; i++){
        if (wagons[i] !== 4){
            sumToAdd = 4- wagons[i]
            if (sumToAdd <= people){
                wagons[i] +=sumToAdd 
                people -= sumToAdd
            }else {
                sumToAdd = people
                wagons[i] += sumToAdd
                people -= sumToAdd
            }
        }
        for (let el of wagons){
            if (el === 4){
                isFull = true;
            }else {
                isFull = false;
                break;
            }
        }
        if (people < 1){
        
            break;
        }
        if (isFull === true){
            break;
        }
        
    }
    
    if (isFull && people > 0){
        console.log(`There isn't enough space! ${people} people in a queue!`)
        console.log(wagons.join(' '))
    }else if(isFull && people === 0){
        console.log(wagons.join(' '))
    }else if (people < 1 && isFull === false){
        console.log(`The lift has empty spots!`)
        console.log(wagons.join(' '))
        
    }
    




}
theLift([
    "15",
    "0 0 0 0 0"
   ]
   
   )

   //3:52