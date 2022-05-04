function travelTime(input){

    let list = {};

    for(let el of input){
        let [country, town, price] = el.split(' > ')

        if (!list.hasOwnProperty(country)){
            list[country] = []
            list[country].push(town)
            list[country].push(Number(price))
        }else {
            if (list[country].includes(town)){
                let index = list[country].indexOf(town)
                let thePrice = index + 1
                if (list[country][thePrice] > price){
                    list[country][thePrice] = price;
                }
            }else {
                list[country].push(town)
                list[country].push(Number(price))
            }
        }
    }
    let sorted = Object.entries(list).sort((a,b) => a[0].localeCompare(b[0]) || b[1] - a[1])
    
    let newObj = {}

    for (let [country, arr] of sorted){
        if (arr.length <= 2){
        console.log(`${country} -> ${arr[0]} -> ${arr[1]}`)
        }else{
            let stringie = `${country} -> `
            for (let i = 0; i < arr.length; i++){
                if (i %2 === 0){
                    newObj[arr[i]] = null;
                }else {
                newObj[arr[i - 1]] = arr[i]
                }
            }
            let newSort = Object.entries(newObj).sort((a, b) => a[0].localeCompare(b[0]) || b[1] - a[1])
            console.log(newSort)
            for (let [town, price] of newSort){
                stringie += town + ' -> ' + price + ' '
            }
            console.log(stringie)
        }
    }
}
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
    ]
    
    )