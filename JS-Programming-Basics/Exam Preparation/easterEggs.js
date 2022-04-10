function easterEggs (input){

let paintedEggs = Number(input[0])
let red = 0;
let orange = 0;
let blue = 0;
let green = 0;
let colorOfMaxEggs = '';
let maxEggs =-99999;
let index = 1;


for (let i = 1; i <= paintedEggs; i++){
    let eggColor = input[index]
    index++
    
    switch (eggColor){
        case 'red':
            red++;
            if (red > maxEggs){
                maxEggs = red;
                colorOfMaxEggs = 'red'
            }break;
        case 'orange':
            orange++;
            if (orange > maxEggs){
                maxEggs = orange;
                colorOfMaxEggs = 'orange'
            }break;
        case "blue":
            blue++;
            if (blue > maxEggs){
                maxEggs = blue;
                colorOfMaxEggs = 'blue'
            }break;
        case "green":
            green++;
            if (green > maxEggs){
                maxEggs = green;
                colorOfMaxEggs = 'green'
            }break;
    }
}
console.log(`Red eggs: ${red}`)
console.log(`Orange eggs: ${orange}`)
console.log(`Blue eggs: ${blue}`)
console.log(`Green eggs: ${green}`)
console.log(`Max eggs: ${maxEggs} -> ${colorOfMaxEggs}`)

}
easterEggs(['7','orange','blue','green','green','blue','red','green'])