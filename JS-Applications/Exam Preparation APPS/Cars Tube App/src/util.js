

function getAuthToken(){
    const authToken = JSON.parse(localStorage.getItem('user')).authToken
    return authToken
}

function getUser(){
    const user = JSON.parse(localStorage.getItem('user'))
    return user
}
function checkIfOwe(carId){
    if(!localStorage.getItem('user')){
        return false;
    }
    const userId = JSON.parse(localStorage.getItem('user')).id
    if(userId){
        if(userId == carId){
            return true
        }else {
            return false
        }
    }else {
        return false 
    }
}
export {
    checkIfOwe,
    getAuthToken,
    getUser
}