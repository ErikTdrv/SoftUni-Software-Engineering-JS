import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from "../node_modules/page/page.mjs"
import { allMemesView } from '../view/allMemesView.js';
import { createView } from '../view/createMemeView.js';
import { details, editView, onDelete } from '../view/detailsId.js';
import { homeView } from '../view/homeView.js';
import { loginView } from '../view/loginView.js';
import { profileView } from '../view/profileView.js';
import { registerView } from '../view/registerView.js';



checkUser()
page('/login', loginView)
page('/logout', logout)
page('/', homeView)
page('/create', createView)
page('/register', registerView)
page('/allmemes', allMemesView)
page('/details/:id', details)
page('/edit/:id', editView)
page('/delete/:id', onDelete)
page('/profile', profileView)
page.start()

export function checkUser(){
    const userId = document.querySelector('nav .user');
    const guestId = document.querySelector('nav .guest');
    if (localStorage.length == 0){
        userId.style.display = 'none'
        guestId.style.display = 'inline'
    }else {
        //Should redirect to AllMemes
        guestId.style.display = 'none'
        userId.style.display = 'inline'
        const greetingMsg = document.getElementById('welcomeMsg');
        const currEmail = JSON.parse(localStorage.getItem('email'))
        console.log(currEmail)
        if (currEmail){
            greetingMsg.textContent = 'Welcome, ' + currEmail
        }
    } 
}

async function logout(){

    const logoutUrl = `http://localhost:3030/users/logout`
    const request = await fetch(logoutUrl, {
        method: 'GET', 
        headers: {
            'X-Authorization': JSON.parse(localStorage.getItem('authToken'))
        }
    })


    if(request.ok){
        page.redirect('/')
        localStorage.clear()
        checkUser()
    }
}

function decorateContext(ctx, next){
    ctx.render = renderMain;

    next();
}
function renderMain(templateResult){
    render(templateResult, main)
}