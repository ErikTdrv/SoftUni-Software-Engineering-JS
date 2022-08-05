import {html, render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { allCarsView } from '../views/allCarsView.js';
import { createView } from '../views/createView.js';
import { deleteCar, detailsView, editView } from '../views/detailsView.js';
import { homeView } from '../views/homePageView.js';
import { loginView } from '../views/loginView.js';
import { myCarsView } from '../views/myCarsView.js';
import { registerView } from '../views/registerView.js';
import { checkUser } from './checkUser.js';
import { allCarsTemplate, detailsTemplate, myCarsTemplate, url } from './templates.js';
import { getAuthToken} from './util.js';


checkUser()
page(decorateContext)
page('/', homeView)
page('/my', myCarsView)
page('/all', allCarsView)
page('/create', createView)
page('/details/:id', detailsView)
page('/edit/:id', editView)
page('/delete/:id', deleteCar)
page('/login', loginView)
page('/logout', logout)
page('/register', registerView)
page.start()





function decorateContext(ctx, next){
    ctx.render = renderMain;
    next();
}
function renderMain(templateResult){
    const main = document.querySelector('main');
    render(templateResult, main)
}

async function logout(){

    const request = await fetch(url.logout, {
        method: 'GET', 
        headers: {
            'X-Authorization': getAuthToken()
        }
    })


    if(request.ok){
        page.redirect('/')
        localStorage.clear()
        checkUser()
    }
}