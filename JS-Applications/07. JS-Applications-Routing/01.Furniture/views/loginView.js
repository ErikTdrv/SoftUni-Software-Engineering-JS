import { html, render } from 'https://unpkg.com/lit-html?module.js';
import { checkUser } from '../src/app.js';
import page from "../node_modules/page/page.mjs"

const divContainer = document.querySelector('.container')
const template = html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Login User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class="form-control" id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class="form-control" id="password" type="password" name="password">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Login" />
                </div>
            </div>
        </form>

`
export function loginView() {
    render(template, divContainer)
}

async function onSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.target);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password)
    try {
        const response = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (data.message) {
            throw Error(data.message)
        }
        localStorage.setItem('authToken', data.accessToken);
        localStorage.setItem('ownerId', data._id);

    } catch (err) {
        return alert(err.message)
    }
    page.redirect('/')
    checkUser()

}