import { html, render } from 'https://unpkg.com/lit-html?module.js';
import page from "../node_modules/page/page.mjs"
const mainContent = document.getElementById('main-content');
const getUrl = 'http://localhost:3030/data/games?sortBy=_createdOn%20desc'

const template = (games) => html `
<section id="catalog-page">
            <h1>All Games</h1>
            ${games.length == 0 ? html `<h3 class="no-articles">No articles yet</h3>` : games.map((game) => html `
            <div class="allGames">
                <div class="allGames-info">
                    <img src=${game.imageUrl}>
                    <h6>${game.category}</h6>
                    <h2>${game.title}</h2>
                    <a href=/details/${game._id} class="details-button">Details</a>
                </div>
            </div>
            `)}
        </section>
`

export async function allGamesView(){
    const request = await fetch(getUrl)
    const data = await request.json()
    render(template(data), mainContent)
}