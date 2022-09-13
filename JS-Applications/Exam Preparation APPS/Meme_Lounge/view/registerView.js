import { html, render } from '../node_modules/lit-html/lit-html.js';

import page from "../node_modules/page/page.mjs"
import { checkUser } from '../src/app.js';
const mainElement = document.querySelector('main');
const registerUrl = 'http://localhost:3030/users/register'
const registerTemplate = html `
<section id="register">
            <form @submit=${onRegisterSubmit} id="register-form">
                <div class="container">
                    <h1>Register</h1>
                    <label for="username">Username</label>
                    <input id="username" type="text" placeholder="Enter Username" name="username">
                    <label for="email">Email</label>
                    <input id="email" type="text" placeholder="Enter Email" name="email">
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="Enter Password" name="password">
                    <label for="repeatPass">Repeat Password</label>
                    <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
                    <div class="gender">
                        <input type="radio" name="gender" id="female" value="female">
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="male" value="male" checked>
                        <label for="male">Male</label>
                    </div>
                    <input type="submit" class="registerbtn button" value="Register">
                    <div class="container signin">
                        <p>Already have an account?<a href="#">Sign in</a>.</p>
                    </div>
                </div>
            </form>
        </section>
`





export function registerView(){
    render(registerTemplate, mainElement)
}

async function onRegisterSubmit(e){
    e.preventDefault();
    const form = new FormData(e.target);
    const username = form.get('username');
    const email = form.get('email');
    const password = form.get('password');
    const rePass = form.get('repeatPass');
    const gender = form.get('gender')

    
    try {
        if (email == '' || password == '' || rePass == '' || username == ''){
            throw new Error('You must fill all the inputs!')
        }
        if (password != rePass){
            throw new Error('Passwords must match!')
        }
        const response = await fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, email, password, gender})
        })
        const data = await response.json();
        if(response.ok){
            localStorage.setItem('email', JSON.stringify(email))
            localStorage.setItem('gender', JSON.stringify(gender))
            localStorage.setItem('username', JSON.stringify(username))
            localStorage.setItem('authToken', JSON.stringify(data.accessToken));
            localStorage.setItem('id', JSON.stringify(data._id))
            page.redirect('/allmemes')
        }
    }catch(err){
        return alert(err)
    }
}