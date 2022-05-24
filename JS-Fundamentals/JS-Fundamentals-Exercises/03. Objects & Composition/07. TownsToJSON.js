function townsToJson(arr){
    let list = {};
    let isFirst = true;
    for (let el of arr){
        let [town, latitude, longitude] = el.split('|')
        if (isFirst === true){
            isFirst = false;
            list = {
                town, 
                latitude, 
                longitude
            }
        }
    }
    console.log(list)

}
townsToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)