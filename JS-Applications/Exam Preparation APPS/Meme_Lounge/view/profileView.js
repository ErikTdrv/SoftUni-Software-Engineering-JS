import { html, render } from '../node_modules/lit-html/lit-html.js';

import page from "../node_modules/page/page.mjs"
import { checkUser } from '../src/app.js';
const mainElement = document.querySelector('main');

const profileTemplate =  (memes) => html `
<section id="user-profile-page" class="user-profile">
<article class="user-info">
<img id="user-avatar-url" alt="user-profile" src=/images/${JSON.parse(localStorage.getItem('gender'))}.png>
<div class="user-content">
<p>Username: ${localStorage.getItem('username')}</p>
<p>Email: ${JSON.parse(localStorage.getItem('email'))}</p>
<p>My memes count: ${memes.length}</p>
</div>
</article>
<h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
${memes.length == 0 ? html `
<p class="no-memes">No memes in database.</p>
` : memes.map((meme) => html `
<div class="user-meme">
<p class="user-meme-title">${meme.title}</p>
<img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
<a class="button" href="/details/${meme._id}">Details</a>
</div>
`)}

    </div>
</section>
`





export async function profileView(){
    const userId = localStorage.getItem('id')
    const loginUrl = 'http://localhost:3030/data/memes?where=_ownerId%3D%22' + JSON.parse(userId) + '%22&sortBy=_createdOn%20desc'
    const request = await fetch(loginUrl)
    const data = await request.json()
    render(profileTemplate(data), mainElement)
}