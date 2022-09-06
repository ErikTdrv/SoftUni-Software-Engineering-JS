import { html, render } from '../node_modules/lit-html/lit-html.js';

import page from "../node_modules/page/page.mjs"
import { checkUser } from '../src/app.js';
const mainElement = document.querySelector('main');
const getUrl = 'http://localhost:3030/data/memes?sortBy=_createdOn%20desc' 

const template = (memes) => html `
<section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
                ${memes.length == 0 ? html `<p class="no-memes">No memes in database.</p>` : memes.map((meme) => html `
                <div class="meme">
                    <div class="card">
                        <div class="info">
                            <p class="meme-title">${meme.title}</p>
                            <img class="meme-image" alt="meme-img" src=${meme.imageUrl}>
                        </div>
                        <div id="data-buttons">
                            <a class="button" href="/details/${meme._id}">Details</a>
                        </div>
                    </div>
                </div>
                `)}
			</div>
        </section>
`

export async function allMemesView(){
    checkUser()
    const request = await fetch(getUrl)
    console.log(request)
    const data = await request.json()
    render(template(data), mainElement)
}