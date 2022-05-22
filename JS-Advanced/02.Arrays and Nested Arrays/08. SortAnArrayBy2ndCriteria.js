function sortAnArrayByCriteria(arr){


    arr.sort((a,b) => a.length - b.length || a.localeCompare(b))

    console.log(arr.join('\n'))

}
sortAnArrayByCriteria(['test', 
'Deny', 
'omen', 
'Default']

)