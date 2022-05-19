function previousDay(year, month, day){


    const today = new Date(year, month, day)
    
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() - 1)
    
    if (year %4 === 0){
        let day = Number(tomorrow.getDate()) - 1
        console.log(tomorrow.getFullYear() + '-' + tomorrow.getMonth() + '-' + day)
    }else{
        console.log(tomorrow.getFullYear() + '-' + tomorrow.getMonth() + '-' + tomorrow.getDate())

    }
    
    
}
previousDay(2016, 10, 1)