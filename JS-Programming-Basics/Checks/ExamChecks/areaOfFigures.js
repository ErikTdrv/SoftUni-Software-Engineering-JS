function areaOfFigures(input){

    let shape =(input[0]);
    let firstNum = Number(input[1]);
    let secondNum = Number(input[2]);

    if (shape === 'square'){
        console.log((firstNum * firstNum).toFixed(3));
    }
    else if (shape === 'rectangle'){
        console.log( (firstNum * secondNum).toFixed(3));
    }
    else if (shape === 'circle'){
        console.log(((firstNum*firstNum)*Math.PI).toFixed(3));
    }
    else if (shape === 'triangle'){
        console.log((1/2*(firstNum*secondNum)).toFixed(3))
    }
   
}
areaOfFigures(['triangle','6','5'])