function summerOutfit(input){

    let temperature = Number(input[0]);
    let time = input[1];
    let outfitAndShoes = String;

    if (temperature <= 18 && temperature >= 10){
        switch (time){
            case 'Morning': outfitAndShoes = 'Sweatshirt and Sneakers';break;
            case 'Afternoon' : outfitAndShoes = 'Shirt and Moccasins';break;
            case 'Evening' : outfitAndShoes = 'Shirt and Moccasins';break;
        }
    } else if (temperature <= 24 && temperature > 18){
        switch (time){
            case 'Morning': outfitAndShoes = 'Shirt and Moccasins';break;
            case 'Afternoon' : outfitAndShoes = 'T-Shirt and Sandals';break;
            case 'Evening' : outfitAndShoes = 'Shirt and Moccasins';break;
        }
    } else if (temperature >= 25){
        switch (time){
            case 'Morning': outfitAndShoes = 'T-Shirt and Sandals';break;
            case 'Afternoon' : outfitAndShoes = 'Swim Suit and Barefoot';break;
            case 'Evening' : outfitAndShoes = 'Shirt and Moccasins';break;
        }
    }

console.log(`It's ${temperature} degrees, get your ${outfitAndShoes}.`)


}
summerOutfit(['22','Afternoon'])