function plantDiscovery(input) {
 
    let plants = input.shift()
    let list = {};
 
    for (let i = 0; i < plants; i++) {
        let [plant, rarity] = input[i].split('<->')
        if (!list.hasOwnProperty(plant)) {
            list[plant] = {
                'rarity': +rarity,
                'rating': [],
                'counter': 0,
            }
        } else {
            list[plant]['rarity'] = +rarity
        }
    }
 
    for (let i = plants; i < input.length; i++) {
        if (input[i] === 'Exhibition') break;
        let [command, token] = input[i].split(': ')
        let [plant, rating] = token.split(' - ')
        if (!list.hasOwnProperty(plant)) {
            console.log('error')
            continue;
        }
        if (command === 'Rate') {
            // let before = list[plant]['rating'] + +rating
            // list[plant]['rating'] = before
            // list[plant]['counter']++
 
            //NEWCODE
            //We add the ratings in the array via .push
 
            let ratingToAdd = Number(rating);
 
            if (list.hasOwnProperty(plant)) {
                list[plant].rating.push(ratingToAdd);
            }
            //NEWCODE
 
        } else if (command === 'Update') {
            list[plant]['rarity'] = +rating
 
        } else if (command === 'Reset') {
            // list[plant]['rating'] = 0;
 
            //NEWCODE
            //we reset the array to an empty one
 
            list[plant]['rating'] = [];
            //NEWCODE
        }
    }
    console.log(`Plants for the exhibition:`)
 
    //for (let el in list) {
        // let num = 0
        // if (list[el]['counter'] > 1 && list[el]['rating'] !== 0) {
        //     num = list[el]['rating'] / list[el]['counter']
        // } else {
        //     num = list[el]['rating']
        // }
 
        //NEWCODE
        //we get the average rating and store it in a new property for each plant - 'avgRating'
 
        for (const el in list) {
            if (list[el].rating.length === 0) {
                list[el]['avgRating'] = 0.00;
            } else {
                list[el]['avgRating'] = list[el].rating.reduce((a, b) => a + b) / list[el].rating.length;
            }
 
            //console.log(`- ${el}; Rarity: ${list[el]['rarity']}; Rating: ${num.toFixed(2)}`)
 
            //NEWCODE
            //print
 
            console.log(`- ${el}; Rarity: ${list[el].rarity}; Rating: ${list[el].avgRating.toFixed(2)}`);
            //NEWCODE
 
        }
        //NEWCODE
 
    //}
}