function fruit(type, weight, kilograms){


        weight = weight/1000
        let sum = kilograms* weight
        console.log(`I need $${sum.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${type}.`)


}
fruit('apple', 1563, 2.35)