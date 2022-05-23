function cooking(char, p1, p2, p3, p4, p5) {
    let num = Number(char)
    let arr = [p1, p2, p3, p4, p5]
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i]
        if (el === 'chop') {
            num = num / 2
            console.log(num)
        } else if (el === 'dice') {
            num = Math.sqrt(num)
            console.log(num)
        } else if (el === 'spice') {
            num = num + 1
            console.log(num)
        } else if (el === 'bake') {
            num = num * 3
            console.log(num)
        } else if (el === 'fillet') {
            num = num * 0.80
            console.log(num)
        }

    }

}
cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')