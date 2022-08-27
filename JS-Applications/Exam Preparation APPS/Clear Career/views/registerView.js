import {html , render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const registerUrl = 'http://localhost:3030/users/register'

const registerTemplate = (onRegisterSubmit) => html `
<section id="register">
          <div class="form">
            <h2>Register</h2>
            <form @submit=${onRegisterSubmit} class="login-form">
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="#">Login</a></p>
            </form>
          </div>
        </section>
`
export function registerView(ctx){
    ctx.render(registerTemplate(onRegisterSubmit))

    async function onRegisterSubmit(e){
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get('email');
        const password = form.get('password');
        const rePass = form.get('re-password')
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
                ctx.page.redirect('/dashboard')
            }else {
                throw Error(data.message)
            }
        }catch(err){
            alert(err)
        }
    }
}
