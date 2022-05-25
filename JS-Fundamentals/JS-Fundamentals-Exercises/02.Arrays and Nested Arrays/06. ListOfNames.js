function listOfNames(arr){
    let newArray = [];
    arr.sort((a,b) => a.localeCompare(b))
    let counter = 1;
    for (let el of arr){
        let name = counter + '.' + el;
        console.log(name)
        counter++;
    }
    


}
listOfNames(["John", "Bob", "Christina", "Ema"])