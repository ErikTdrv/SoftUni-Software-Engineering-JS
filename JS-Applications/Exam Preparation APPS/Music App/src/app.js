export const host = 'http://localhost:3030';
import {html ,render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { catalogView } from '../views/catalogView.js';
import { createView } from '../views/createView.js';
import { editList, onDeleteSubmit, postDetails } from '../views/details.js';
import { homeView } from '../views/homeView.js';
import { loginView } from '../views/loginView.js';
import { registerView } from '../views/registerView.js';
import { checkUser } from './checkUser.js';


// Routing
checkUser() //Checking if the user is logged and show the right navBar
page(decorateContext);
page('/', homeView)
page('/login', loginView)
page('/logout', logout)
page('/register', registerView)
page('/create', createView)
page('/catalog', catalogView)
page('/details/:id', postDetails)
page('/edit/:id', editList)
page('/delete/:id', onDeleteSubmit)
page.start()



async function logout(ctx){
    const logoutUrl = `http://localhost:3030/users/logout`
    const request = await fetch(logoutUrl, {
        method: 'GET', 
        headers: {
            'X-Authorization': JSON.parse(localStorage.getItem('user')).authToken
        }
    })


    if(request.ok){
        ctx.page.redirect('/')
        localStorage.clear()
        checkUser()
    }
    
}


function decorateContext(ctx, next){
    ctx.render = renderMain;
    next();
}
function renderMain(templateResult){
    const main = document.querySelector('main');
    render(templateResult, main)
}