import {render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { checkUser } from '../src/checkUser.js';
import { loginTemplate, url } from '../src/templates.js';


export function loginView(ctx){
    ctx.render(loginTemplate(onLoginSubmit))

    async function onLoginSubmit(e){
        e.preventDefault()
        const form = new FormData(e.target);
        const username = form.get('username');
        const password = form.get('password')

        try{
            if(username == '' || password == ''){
                throw new Error('You must fill all the inputs!')
            }
            const response = await fetch(url.login, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password})
            })
            const data = await response.json()
            if(response.ok){
                console.log(data.accessToken)
                const user = {
                    'authToken': data.accessToken,
                    'id': data._id,
                    'username': data.username,
                }
                localStorage.setItem('user', JSON.stringify(user))
                ctx.page.redirect('/all')
                checkUser()
            }else {
                throw Error(data.message)
            }      
        }catch(err){
            alert(err)
        }
    }
}