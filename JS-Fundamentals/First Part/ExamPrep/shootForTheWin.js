function shootForTheWin (arr){

    let targets = arr.shift().split(' ').map(Number)
    let saved = 0
    let shots = 0
    for (let i = 0; i < arr.length ; i++){
        if (arr[i].toString() === 'End'){
            break;
        }
        let index = Number(arr[i])
        if (index < targets.length){
            saved = targets[index]
            targets[index] = -1
            shots++
            for (let i = 0; i < targets.length ; i++){
                if (targets[i] > saved && targets[i] !== targets[index]){

                    targets[i] = targets[i] - saved
                }else if (targets[i] <= saved && targets[i] !== targets[index]){
                    targets[i] = targets[i] + saved
                }
            }
            
        }
    }

    console.log(`Shot targets: ${shots} -> ${targets.join(' ')}`)


      




}
shootForTheWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])

