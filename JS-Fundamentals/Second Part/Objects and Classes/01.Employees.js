function employees(arr){

    for (let el of arr){
        let person = {}
        person.Name = el
        console.log(`${Object.keys(person)}: ${person.Name} -- Personal Number: ${person.Name.length}`)
    }


}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )