function caseSplitter(input){
    let list = input[0];
  
    for (let i = 1; i < input.length; i++){
        let el = input[i]
        let elUpperCase = el.toUpperCase()
        if (el === elUpperCase){
            list += '-' + el 
        }else {
            list += el 
           
        }

    }
    let array = list.split('-').join(', ')
    console.log(array) 
}
caseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')