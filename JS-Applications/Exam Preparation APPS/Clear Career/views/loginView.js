import {html , render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const loginUrl = 'http://localhost:3030/users/login'

const loginTemplate =(onLoginSubmit) => html `
<section id="login">
          <div class="form">
            <h2>Login</h2>
            <form @submit=${onLoginSubmit} class="login-form">
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
          </div>
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
                ctx.page.redirect('/dashboard')
            }else {
                throw Error(data.message)
            }
        }catch(err){
            alert(err)
        }
    }
}