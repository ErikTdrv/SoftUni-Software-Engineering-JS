import {html, render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { host } from '../src/app.js';
const loginUrl = 'http://localhost:3030/users/login'

const loginTemplate = (onLoginSubmit) => html `
<section id="loginPage">
            <form @submit=${onLoginSubmit}>
                <fieldset>
                    <legend>Login</legend>

                    <label for="email" class="vhide">Email</label>
                    <input id="email" class="email" name="email" type="text" placeholder="Email">

                    <label for="password" class="vhide">Password</label>
                    <input id="password" class="password" name="password" type="password" placeholder="Password">

                    <button type="submit" class="login">Login</button>

                    <p class="field">
                        <span>If you don't have profile click <a href="/register">here</a></span>
                    </p>
                </fieldset>
            </form>
        </section>
`

export function loginView(ctx){
    ctx.render(loginTemplate(onLoginSubmit))

    async function onLoginSubmit(e){
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');

        try {
            if(email == '' || password == ''){
                throw new Error('You must fill all the inputs!')
            }
            const response = await fetch('http://localhost:3030/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            })
            const data = await response.json()
            if(response.ok){
                const user = {
                    'authToken': data.accessToken,
                    'id': data._id,
                    'email': data.email,
                }
                localStorage.setItem('user', JSON.stringify(user))
                ctx.page.redirect('/')
            }else {
                throw Error(data.message)
            }
        }catch(err){
            alert(err)
        }
    }
}