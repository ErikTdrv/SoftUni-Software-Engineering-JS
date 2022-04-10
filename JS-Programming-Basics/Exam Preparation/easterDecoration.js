function easterDecoration (input){
    let index = 1;
    let clientsNumber = Number(input[0])
    let average = 0;

    for (let i = 1; i <= clientsNumber; i++){
        let command = input[index]
        index++
        let price = 0;
        let count = 0;
        let stuffs = 0;

        while(command !== 'Finish'){
            switch (command){
                case 'basket':
                    price += 1.50;
                    stuffs++
                    count++;
                    break;
                    case 'wreath':
                        price += 3.80;
                    stuffs++
                    count++;
                    break;
                        case 'chocolate bunny':
                            price += 7;
                    stuffs++
                    count++;
                    break;
            }
            command = input[index++]
        }
        if (count % 2 === 0){
            price *= 0.8;
        }
        average += price;
        console.log(`You purchased ${stuffs} items for ${price.toFixed(2)} leva.`)
    }

console.log(`Average bill per client is: ${(average / clientsNumber).toFixed(2)} leva.`)















}
easterDecoration(['2',
    'basket',
   'wreath',
    'chocolate bunny',
    'Finish',
    'wreath',
    'chocolate bunny',
    'Finish',
    ])
