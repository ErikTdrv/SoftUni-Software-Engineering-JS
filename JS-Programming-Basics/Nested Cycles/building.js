function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    let currentFloor = "";
 
    for (let i = floors; i >= 1; i--)
        for (let j = 0; j < rooms; j++){
            if (i === floors) {
                if (j < rooms - 1) {
                    currentFloor += "L" + i + j + " ";
                }
                else{
                    currentFloor += "L" + i + j + "\n";
                } 
            }
            else if (i % 2 !== 0) {
                if (j < rooms - 1) {
                    currentFloor += "A" + i + j + " ";
                }
                else{
                    currentFloor += "A" + i + j + "\n";
                }
            }
            else if (i % 2 === 0) {
                if (j < rooms - 1) {
                    currentFloor += "O" + i + j + " ";
                }
                else{
                    currentFloor += "O" + i + j + "\n";
                }
            }
        }
        console.log(currentFloor);
        

}
building(['6','4'])