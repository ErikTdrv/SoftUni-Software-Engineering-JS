import { html, render } from 'https://unpkg.com/lit-html?module.js';
import { checkUser } from '../app.js';
import page from "../node_modules/page/page.mjs"
const mainContent = document.getElementById('main-content');
const loginUrl = 'http://localhost:3030/users/login'
const loginTemplate = html `
<section id="login-page" class="auth">
            <form @submit= ${onLoginSubmit} id="login">

                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Login</h1>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

                    <label for="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password">
                    <input type="submit" class="btn submit" value="Login">
                    <p class="field">
                        <span>If you don't have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
`
export function loginView(){
    render(loginTemplate, mainContent)
}

async function onLoginSubmit(e){
    e.preventDefault()

    const form = new FormData(e.target);
    const email = form.get('email');
    const password = form.get('password');

    try {
        if (email == '' || password == ''){
            throw new Error('You must fill all the inputs!')
        }
        const response = await fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
        const data = await response.json();
        if (response.ok){
            localStorage.setItem('authToken', JSON.stringify(data.accessToken))
            localStorage.setItem('ownerId', JSON.stringify(data._id))
            page.redirect('/')
            checkUser()
        }else {
            throw Error(data.message)
        }

    }catch(err){
        alert(err)
        return;
    }
    
}