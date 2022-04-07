function cake (input){
    let index = 0;
    let length = Number(input[index])
    index++
    let width = Number(input[index])
    index++
    let command = input[index]
    index++
    let amountPieces = length*width
    let isCake = true;

    while (command !== 'STOP'){
        let pieces = Number(command)
        amountPieces -= pieces
        if (amountPieces < 0){
            isCake = false
            break;
        }
        command = input[index]
        index++
    }
    
    if (isCake){
        console.log(`${amountPieces} pieces are left.`)
    }else {
        console.log(`No more cake left! You need ${Math.abs(amountPieces)} pieces more.`)
    }






}
cake (["10",
"2",
"2",
"4",
"6",
"STOP"])


