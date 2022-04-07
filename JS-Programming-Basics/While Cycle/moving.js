function moving(input) {

    let index = 0;
    let w = input[index];
    index++
    let l = input[index];
    index++
    let h = input[index]
    index++
    let freeSpace = w * l * h;
    let command = input[index]
    index++
    

    while (command !== 'Done') {
        let amountBox = Number(command);
        freeSpace -= amountBox
        if (freeSpace <= 0) {
            break;
        }
        command = input[index]
        index++
    }


    if (freeSpace > 0) {
        console.log(`${Math.abs(freeSpace)} Cubic meters left.`)
    } else if (freeSpace <= 0) {

        console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`)

    }





}
moving
(["10", 
"1",
"2",
"4", 
"6",
"Done"])
