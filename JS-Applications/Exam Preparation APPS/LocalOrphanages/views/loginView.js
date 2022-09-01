import {html, render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const loginUrl = 'http://localhost:3030/users/login'

const loginTemplate = (onLoginSubmit) => html `
<section id="login-page" class="auth">
            <form @submit=${onLoginSubmit} id="login">
                <h1 class="title">Login</h1>

                <article class="input-group">
                    <label for="login-email">Email: </label>
                    <input type="email" id="login-email" name="email">
                </article>

                <article class="input-group">
                    <label for="password">Password: </label>
                    <input type="password" id="password" name="password">
                </article>

                <input type="submit" class="btn submit-btn" value="Log In">
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
            const response = await fetch(loginUrl, {
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