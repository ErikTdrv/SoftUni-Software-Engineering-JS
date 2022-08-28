import { html, render } from 'https://unpkg.com/lit-html?module.js';
import page from "../node_modules/page/page.mjs";
const mainContent = document.getElementById('main-content');
const registerUserUrl = 'http://localhost:3030/users/register'

const registerTemplate = html `
<section id="register-page" class="content auth">
            <form id="register" @submit=${onRegisterSubmit}>
                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Register</h1>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="maria@email.com">

                    <label for="pass">Password:</label>
                    <input type="password" name="password" id="register-password">

                    <label for="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password">

                    <input class="btn submit" type="submit" value="Register">

                    <p class="field">
                        <span>If you already have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
`

export function registerView(){
    render(registerTemplate, mainContent)
}

async function onRegisterSubmit(e){
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get('email');
    const password = form.get('password');
    const rePass = form.get('confirm-password');

    
    try {
        if (email == '' || password == '' || rePass == ''){
            throw new Error('You must fill all the inputs!')
        }
        if (password != rePass){
            throw new Error('Passwords must match!')
        }
        const response = await fetch(registerUserUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
        const data = await response.json();
        localStorage.setItem('authToken', JSON.stringify(data.accessToken));
        localStorage.setItem('ownerId', JSON.stringify(data._id))
        page.redirect('/')
    }catch(err){
        return alert(err)
    }
}