function nextDay(year, month, date) {
    let inputDate = new Date(year, month-1, date);

    let nextDayDate = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate() + 1)
    return `${nextDayDate.getFullYear()}-${nextDayDate.getMonth() + 1}-${nextDayDate.getDate()}`

}
console.log(nextDay(2016, 9, 30))