import {render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { checkUser } from '../src/checkUser.js';
import { registerTemplate, url } from '../src/templates.js';

export function registerView(ctx){
    ctx.render(registerTemplate(onRegisterSubmit))

    async function onRegisterSubmit(e){
        e.preventDefault()
        const form = new FormData(e.target)
        const username = form.get('username');
        const password = form.get('password');
        const rePass = form.get('repeatPass')
        try{
            if(password != rePass){
                throw new Error('Passwords must match!')
            }
            if (username == '' || password == '' || rePass == ''){
                throw new Error('You must fill all the inputs!')
            }
            const response = await fetch(url.register, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password})
            })
            const data = await response.json()
            if(response.ok){
                const user = {
                    'authToken': data.accessToken,
                    'id': data._id,
                    'username': data.username,
                }
                localStorage.setItem('user', JSON.stringify(user))
                ctx.page.redirect('/all')
            }else {
                throw Error(data.message)
            }
        }catch(err){
            alert(err)
        }
    }
}