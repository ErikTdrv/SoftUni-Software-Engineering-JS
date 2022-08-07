import {html , render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { addOffer } from '../views/addingOffer.js';
import { dashboardView } from '../views/dashboardView.js';
import { editList, offerDetails, onDeleteSubmit } from '../views/details.js';
import { homeView } from '../views/homeView.js';
import { loginView } from '../views/loginView.js';
import { registerView } from '../views/registerView.js';
import { checkUser } from './checkUser.js';


checkUser()
// Routing
page(decorateContext);
page('/', homeView)
page('/dashboard', dashboardView)
page('/login', loginView)
page('/logout', logout)
page('/register', registerView)
page('/create', addOffer)
page('/details/:id', offerDetails)
page('/edit/:id', editList)
page('/delete/:id', onDeleteSubmit)

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