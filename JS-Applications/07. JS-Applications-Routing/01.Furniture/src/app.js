import page from "../node_modules/page/page.mjs"
import { html, render } from 'https://unpkg.com/lit-html?module.js';
import { loginView } from "../views/loginView.js";
import {registerView } from "../views/registerView.js";
import { loadDashboard } from "../views/dashboardView.js";
import { furnitureView } from "../views/createFurnitureView.js";
const logoutUrl = 'http://localhost:3030/users/logout';

// window.addEventListener('load', loadDashboard)
page('/catalog', loadDashboard)
page('/login', loginView)
page('/register', registerView)
page('/logout', logout)
page('/furniture', furnitureView)

page.start()
export function checkUser() {
    const userInterface = document.getElementById('user');
    const guestInterface = document.getElementById('guest');

    if (localStorage.length == 0) {
        userInterface.style.display = 'none';
        guestInterface.style.display = 'inline';
    }else {
        userInterface.style.display = 'inline';
        guestInterface.style.display = 'none';
    }
}

async function logout(){
    fetch(logoutUrl, {
        method: 'GET',
        headers: {
            'X-Authorization': localStorage.getItem('authToken')
        }
    });
    localStorage.removeItem('authToken');
    localStorage.removeItem('ownerId')
    checkUser()
    page.redirect('/catalog')
}
checkUser()

