function multiplicationTable (input){

    let num = Number(input[0]);
    
    for (let i = 1 ; i <= 10; i++){
        let total = i * num;
        console.log(i + ` * ${num} = ${total}`)
    }



}
multiplicationTable(['5'])