import { html, render } from '../node_modules/lit-html/lit-html.js';

import page from "../node_modules/page/page.mjs"
import { checkUser } from '../src/app.js';
const mainElement = document.querySelector('main');
const loginUrl = 'http://localhost:3030/users/login'
const loginTemplate = html `
<section id="login">
<form @submit=${onLoginSubmit} id="login-form">
    <div class="container">
        <h1>Login</h1>
        <label for="email">Email</label>
        <input id="email" placeholder="Enter Email" name="email" type="text">
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Enter Password" name="password">
        <input type="submit" class="registerbtn button" value="Login">
        <div class="container signin">
            <p>Dont have an account?<a href="#">Sign up</a>.</p>
        </div>
    </div>
</form>
</section>
`

export function loginView(){
    render(loginTemplate, mainElement)
}

async function onLoginSubmit(e){
    const form = new FormData(e.target);
    const email = form.get('email');
    const password = form.get('password')
    e.preventDefault();
    try{
        if(email == '' || password == ''){
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
        console.log(data)
        if(response.ok){
            localStorage.setItem('authToken', JSON.stringify(data.accessToken))
            localStorage.setItem('id', JSON.stringify(data._id))
            localStorage.setItem('email', JSON.stringify(email))
            localStorage.setItem('username', JSON.stringify(data.username))
            localStorage.setItem('gender', JSON.stringify(data.gender))

            checkUser()
            page.redirect('/allmemes')
        }
    }catch(err){
        alert(err)
    }
}