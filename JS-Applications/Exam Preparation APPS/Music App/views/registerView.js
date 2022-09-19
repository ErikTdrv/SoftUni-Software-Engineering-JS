import {html, render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { host } from '../src/app.js';
const registerUrl = 'http://localhost:3030/users/register'

const registerTemplate = (onRegisterSubmit) => html `
<section id="registerPage">
            <form @submit=${onRegisterSubmit}>
                <fieldset>
                    <legend>Register</legend>

                    <label for="email" class="vhide">Email</label>
                    <input id="email" class="email" name="email" type="text" placeholder="Email">

                    <label for="password" class="vhide">Password</label>
                    <input id="password" class="password" name="password" type="password" placeholder="Password">

                    <label for="conf-pass" class="vhide">Confirm Password:</label>
                    <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

                    <button type="submit" class="register">Register</button>

                    <p class="field">
                        <span>If you already have profile click <a href="#">here</a></span>
                    </p>
                </fieldset>
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
        const rePass = form.get('conf-pass')
        try{
            if(password != rePass){
                throw new Error('Passwords must match!')
            }
            if (email == '' || password == '' || rePass == ''){
                throw new Error('You must fill all the inputs!')
            }
            const response = await fetch(host + '/users/register', {
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
