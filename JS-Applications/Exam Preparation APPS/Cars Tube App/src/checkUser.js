import { getUser } from "./util.js";

export function checkUser(){
    const userId = document.getElementById('profile');
    const guestId = document.getElementById('guest');
    if (localStorage.length == 0){
        userId.style.display = 'none'
        guestId.style.display = 'inline'
    }else {
        guestId.style.display = 'none'
        userId.style.display = 'inline'
        const greetingMsg = document.getElementById('welcomeMsg');
        console.log(greetingMsg)
        const currUsername = getUser().username
        if (currUsername){
            greetingMsg.textContent = 'Welcome, ' + currUsername
        }
    } 
}