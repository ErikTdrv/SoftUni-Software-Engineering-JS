import {html, render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const registerUrl = 'http://localhost:3030/users/register'

const registerTemplate = (onRegisterSubmit) => html `
<section id="register-page" class="auth">
            <form @submit=${onRegisterSubmit} id="register">
                <h1 class="title">Register</h1>

                <article class="input-group">
                    <label for="register-email">Email: </label>
                    <input type="email" id="register-email" name="email">
                </article>

                <article class="input-group">
                    <label for="register-password">Password: </label>
                    <input type="password" id="register-password" name="password">
                </article>

                <article class="input-group">
                    <label for="repeat-password">Repeat Password: </label>
                    <input type="password" id="repeat-password" name="repeatPassword">
                </article>

                <input type="submit" class="btn submit-btn" value="Register">
            </form>
        </section>
`

export function registerView(ctx){
    ctx.render(registerTemplate(onRegisterSubmit))

    async function onRegisterSubmit(e){
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get('email');
        const password = form.get('password');
        const rePass = form.get('repeatPassword')
        try{
            if(password != rePass){
                throw new Error('Passwords must match!')
            }
            if (email == '' || password == '' || rePass == ''){
                throw new Error('You must fill all the inputs!')
            }
            const response = await fetch(registerUrl, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            })
            const data = await response.json()
            console.log(data);
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
