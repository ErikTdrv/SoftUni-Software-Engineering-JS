function cone (radius, height){
// V = (1/3)πr2h (1/3) * π * r² * h. 
// B = πr2
//  𝛑r² + 𝛑rl.
// πr(r + √(r2 + h2))
    function findVolume (radius, height){
        let result = (1/3)*Math.PI*Math.pow(radius, 2)*height
        return result
    }
    function findArea (radius, height){
        let firstResult = radius + Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2))
        let result = Math.PI*radius*firstResult
        return result
    }

    console.log(`volume = ${findVolume(radius, height).toFixed(4)}`)
    console.log(`area = ${findArea(radius, height).toFixed(4)}`)

}
cone(3, 5)