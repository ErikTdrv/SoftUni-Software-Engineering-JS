import { html, render } from 'https://unpkg.com/lit-html?module.js';
import page from "../node_modules/page/page.mjs"
const mainContent = document.getElementById('main-content');
const getUrl = 'http://localhost:3030/data/games?sortBy=_createdOn%20desc&distinct=category'

const template = (games) => html `
<section id="welcome-world">

            <div class="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero">

            <div id="home-page">
                <h1>Latest Games</h1>

                <!-- Display div: with information about every game (if any) -->
                
                
                ${games.length == 0 ? html `<p class="no-articles">No games yet</p>`: games.map((game) => html `
                <div class="game">
                    <div class="image-wrap">
                        <img src=${game.imageUrl}>
                    </div>
                    <h3>${game.title}</h3>
                    <div class="rating">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div class="data-buttons">
                        <a href=/details/${game._id} class="btn details-btn">Details</a>
                    </div>
                </div>
                `)}
                
            </div>
        </section>
`
export async function homeView(){
    const response = await fetch(getUrl);
    const data = await response.json();
    render(template(Object.values(data).splice(0, 3)), mainContent)
}