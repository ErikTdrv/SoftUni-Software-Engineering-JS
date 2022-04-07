function traveling (input){

let index = 0;
let command = input[index]


while (command !== 'End'){
    let destination = command
    index++
    let moneyNeeded = Number(input[index])
    index++
    let savings = 0;
    
    while (savings < moneyNeeded){
        let moneyReceived = Number(input[index])
        index++
        savings += moneyReceived

    }
    console.log(`Going to ${destination}!`)
    command = input[index]
}






}
traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
