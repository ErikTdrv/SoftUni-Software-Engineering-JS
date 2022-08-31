import {html, render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { createBook } from '../views/createView.js';
import { dashboardView } from '../views/dashboardView.js';
import { editList, onDeleteSubmit, postDetails } from '../views/details.js';
import { loginView } from '../views/loginView.js';
import { myListView } from '../views/myPostsView.js';
import { registerView } from '../views/registerView.js';
import { checkUser } from './checkUser.js';

checkUser()
page(decorateContext);
page('/', dashboardView)
page('/login', loginView)
page('/register', registerView)
page('/logout', logout)
page('/create', createBook)
page('/details/:id', postDetails)
page('/edit/:id', editList)
page('/delete/:id', onDeleteSubmit)
page('/my', myListView)
page.start()




function decorateContext(ctx, next){
    ctx.render = renderMain;
    next();
}
function renderMain(templateResult){
    const main = document.querySelector('main');
    render(templateResult, main)
}

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