import { html, render } from 'https://unpkg.com/lit-html?module.js';
import page from "../node_modules/page/page.mjs"
import { checkUser } from '../src/app.js';
const registerUrl = 'http://localhost:3030/users/register';

const divContainer = document.querySelector('.container')

const template = html `
<div class="row space-top">
            <div class="col-md-12">
                <h1>Register New User</h1>
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
                    <div class="form-group">
                        <label class="form-control-label" for="rePass">Repeat</label>
                        <input class="form-control" id="rePass" type="password" name="rePass">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Register" />
                </div>
            </div>
        </form>
`
export function registerView(){
    render(template, divContainer)
}


async function onSubmit(e){
    e.preventDefault()
    const form = new FormData(e.target);
    const email = form.get('email');
    const password = form.get('password');
    const rePass = form.get('rePass');

    try{
        if (password != rePass){
            alert('Password must match RePassword')
            return;
        }
        const request = await fetch(registerUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({email, password})
        })
        const data = await request.json()
        if (!request.ok){
            throw Error(data.message)
        }
        localStorage.setItem('authToken', data.accessToken);
        localStorage.setItem('ownerId', data._id)

    }catch(err){
        alert(err)
        return;
    }
    checkUser()
    page.redirect('/catalog')
}