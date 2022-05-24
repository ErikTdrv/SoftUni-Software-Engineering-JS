function storeCatalogue(arr){
    let list = {};
    //Adgusting the object
    for (let el of arr){
        let [key, value] = el.split(' : ');
        value = Number(value);
        list[key] = value;
    }
    
    //Sorting
    let sortedList = Object.entries(list).sort((a,b) => a[0].localeCompare(b[0]))
    
  

    let mainLetter;
    for (let i = 0; i < sortedList.length; i++){
        let [name, value] = sortedList[i];
        let currentLetter = name[0];
        if (i === 0){
            console.log(name[0]);
            mainLetter = name[0]
        }
        if (currentLetter === mainLetter){
            console.log('  ' + name + ': ' + value)
        }else {
            mainLetter = currentLetter;
            console.log(mainLetter)
            console.log('  ' + name + ': ' + value)
        }
        
    }
}
storeCatalogue(['Banana : 2',
'Rubics Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']

)