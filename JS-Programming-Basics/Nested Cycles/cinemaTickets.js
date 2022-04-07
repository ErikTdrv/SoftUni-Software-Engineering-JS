function cinemaTickets(input){

    let index = 0;
    let command = input[index]
    index++
    
    let totalTicket = 0;
    let studentCount = 0;
    let standartCount = 0;
    let kidsCount = 0;

    while(command !== 'Finish'){ 
        let name = command ;
        let freeSpace = Number(input[index])
        index++
        let tempCommand = input[index]
        index++
        let tempTicket = 0;

        while(tempCommand !== 'End'){
            tempTicket += 5;
            switch (tempCommand){
                case 'student':studentCount++;break;
                case 'standard':standartCount++;break;
                case 'kid':kidsCount++;break;
            }
            if (tempTicket >= freeSpace){
                break;
            }
            tempCommand = input[index]
            index++
        }
        totalTicket += tempTicket
        let tempEmptySpace = tempTicket / freeSpace * 100
        console.log(`${name} - ${tempEmptySpace.toFixed(2)}% full.`)
        command = input[index]
        index++
        
    }
    
    console.log(`Total tickets: ${totalTicket}`)
    let studentP = studentCount / totalTicket * 100
    let standartP = standartCount / totalTicket * 100
    let kidP = kidsCount / totalTicket * 100
    console.log(`${studentP.toFixed(2)}% student tickets.`)
    console.log(`${standartP.toFixed(2)}% standard tickets.`)
    console.log(`${kidP.toFixed(2)}% kids tickets.`)
}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
