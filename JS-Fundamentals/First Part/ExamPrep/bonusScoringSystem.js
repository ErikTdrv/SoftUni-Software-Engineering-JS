function solve(arr) {
    let students = Number(arr.shift());
    let lectures = Number(arr.shift());
    let bonus = Number(arr.shift());

    let bestStudent = [0];
    for (let i = 0; i < students; i++) {
        if ((Number(arr[i]) / lectures * (5 + bonus)) > bestStudent[0]) {
            bestStudent.splice(0, bestStudent.length);
            bestStudent.push((Number(arr[i]) / lectures * (5 + bonus)), arr[i]);
        }

    }

    return `Max Bonus: ${Math.ceil(bestStudent[0])}.\nThe student has attended ${bestStudent.slice(-1)} lectures.`
}
console.log(solve(['5', '25', '30', '24', '5', '25', '12', '26.555555555555555555555555555555555555555555']));