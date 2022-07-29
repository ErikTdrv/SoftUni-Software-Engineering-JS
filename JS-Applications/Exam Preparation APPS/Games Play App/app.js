
import { html, render } from 'https://unpkg.com/lit-html?module.js';
import page from "./node_modules/page/page.mjs"
import { allGamesView } from './views/allGamesView.js';
import { createGameView } from './views/createGameView.js';
import { details, edit, onDeleteSubmit } from './views/detailsView.js';
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';
const logoutUrl = 'http://localhost:3030/users/logout'

//Routing
page('/', homeView)
page('/login', loginView)
page('/register', registerView)
page('/logout', onLogout)
page('/create', createGameView)
page("/details/:id", details)
page('/edit/:id', edit)
page('/delete/:id', onDeleteSubmit)
page('/allgames', allGamesView)
page.start()

export function checkUser(){
    const userId = document.getElementById('user');
    const guestId = document.getElementById('guest');
    
    if (localStorage.length == 0){
        guestId.style.display = 'inline'
        userId.style.display = 'none'
    }else {
        userId.style.display = 'inline'
        guestId.style.display = 'none'
    } 
}
checkUser()

function onLogout(){
    const request = fetch(logoutUrl, {
        method: 'GET', 
        headers: {
            'X-Authorization': JSON.parse(localStorage.getItem('authToken'))
        }
    })

    localStorage.clear()
    page.redirect('/home');
    checkUser()
}
