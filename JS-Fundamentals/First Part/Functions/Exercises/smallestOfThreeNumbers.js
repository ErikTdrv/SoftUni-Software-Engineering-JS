function smallestOfThreeNumbers(a, b, c){
    

    if (a < b && a < c){
       console.log(a);
    }else if (b < a && b < c){
        console.log(b);
    }else if (c < a && c < b){
        console.log(c);
    }else if (a == b && b == c && c == a){
        console.log(a);
    }
   
   

}
smallestOfThreeNumbers(2,
    5,
    3
    )