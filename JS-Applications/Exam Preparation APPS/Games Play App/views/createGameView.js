import { html, render } from 'https://unpkg.com/lit-html?module.js';
import page from "../node_modules/page/page.mjs"
const mainContent = document.getElementById('main-content');
const getUrl = 'http://localhost:3030/data/games'


const createGameTemplate = html `
<section id="create-page" class="auth">
            <form @submit=${createGame} id="create">
                <div class="container">

                    <h1>Create Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter game title...">

                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter game category...">

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">

                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input class="btn submit" type="submit" value="Create Game">
                </div>
            </form>
        </section>
`

export function createGameView(){
    console.log(JSON.parse(localStorage.getItem('authToken')))
    render(createGameTemplate, mainContent)
}

async function createGame(e){
    e.preventDefault();
    const form = new FormData(e.target);
    const title = form.get('title');
    const category = form.get('category');
    const maxLevel = form.get('maxLevel');
    const imageUrl = form.get('imageUrl');
    const summary = form.get('summary')
    try{
        if (title == '' || category == '' || maxLevel == '' || imageUrl == '' || summary == ''){
            throw new Error('You must fill all the inputs!')
        }

        const response = await fetch(getUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': JSON.parse(localStorage.getItem('authToken'))
            },
            body: JSON.stringify({title, category, maxLevel, imageUrl, summary})
        })

        if(response.ok){
            page.redirect('/')
        }
    }catch(err){
        alert(err)
    }
}