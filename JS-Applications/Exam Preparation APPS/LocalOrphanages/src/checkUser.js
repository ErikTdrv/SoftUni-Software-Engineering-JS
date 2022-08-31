export function checkUser(){
    const userId = document.getElementById('user');
    const guestId = document.getElementById('guest');
    if (localStorage.length == 0){
        userId.style.display = 'none'
        guestId.style.display = 'inline'
    }else {
        //Should redirect to AllMemes
        guestId.style.display = 'none'
        userId.style.display = 'inline'
        // const greetingMsg = document.getElementById('welcomeMsg');
        // const currEmail = JSON.parse(localStorage.getItem('user')).email
        // if (currEmail){
        //     greetingMsg.textContent = 'Welcome, ' + currEmail
        // }
    } 
}