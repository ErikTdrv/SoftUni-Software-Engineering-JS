import { html, render } from 'https://unpkg.com/lit-html?module.js';
import page from "../node_modules/page/page.mjs"
const mainContent = document.getElementById('main-content');
const getUrl = 'http://localhost:3030/data/games/'
const postCommentUrl = 'http://localhost:3030/data/comments'

const template = (game) => html `
<section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">

                <div class="game-header">
                    <img class="game-img" src=${game.imageUrl} />
                    <h1>${game.title}</h1>
                    <span class="levels">MaxLevel: ${game.maxLevel}</span>
                    <p class="type">${game.category}</p>
                    </div>


                <p class="text">
                    ${game.summary}
                </p>

                <!-- Bonus ( for Guests and Users ) -->
                <div class="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        <li class="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li class="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    <!-- Display paragraph: If there are no games in the database -->
                    <p class="no-comment">No comments.</p>
                </div>

                <!-- Edit/Delete buttons ( Only for creator of this game )  -->
                ${game._ownerId == JSON.parse(localStorage.getItem('ownerId')) ? html `
                <div class="buttons">
                    <a href=/edit/${game._id} class="button">Edit</a>
                    <a href=/delete/${game._id} class="button">Delete</a>
                </div>
                ` : html `
                <div class="buttons">
                    <a href=/edit/${game._id} style="display: none;" class="button">Edit</a>
                    <a href=/delete/${game._id} style="display: none;" class="button">Delete</a>
                </div>
                `}
                
            </div>

            <!-- Bonus -->
            <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
            ${!(game._ownerId == JSON.parse(localStorage.getItem('ownerId'))) && localStorage.getItem('authToken') ? html `
            <article class="create-comment">
                <label>Add new comment:</label>
                <form @submit= ${(e) => addNewComment(e, game._id)} class="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article>
            `: html `
            <article style="display: none;" class="create-comment">
                <label>Add new comment:</label>
                <form class="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article>
            `}
            

        </section>
`
const editTemplate = (game, ctx) => html `
<section id="edit-page" class="auth">
            <form @submit=${(e) => onEditSubmit(e, ctx)} id="edit">
                <div class="container">

                    <h1>Edit Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value=${game.title}>

                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" value=${game.category}>

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" value=${game.maxLevel}>

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value=${game.imageUrl}>

                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary" >${game.summary}</textarea>
                    <input class="btn submit" type="submit" value="Edit Game">

                </div>
            </form>
        </section>
`
export async function details(ctx){
    const id = ctx.params.id
    const response = await fetch(getUrl + id);
    const data = await response.json()

render(template(data), mainContent)
}

export async function edit(ctx){
    const id = ctx.params.id
    const request = await fetch(getUrl + id)
    const data = await request.json();
    render(editTemplate(data, ctx), mainContent)
}

async function onEditSubmit(e, ctx){
    e.preventDefault()
    const id = ctx.params.id

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

        const response = await fetch(getUrl + id, {
            method: 'PUT',
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

export async function onDeleteSubmit(ctx){

    const id = ctx.params.id
    confirm('Do you really want to delete the game?') ? fetch(getUrl + id, {
        method: 'DELETE',
        headers: {
            'X-Authorization': JSON.parse(localStorage.getItem('authToken'))
        }
    }) : page.redirect('/home')
    page.redirect('/')
}

async function addNewComment(e, gameId){
    e.preventDefault()


    const form = new FormData(e.target);
    const comment = form.get('comment');
    try{
        if(comment == ''){
            throw new Error('You must add a comment!')
        }
        const request = await fetch(postCommentUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': JSON.parse(localStorage.getItem('authToken'))
            },
            body: JSON.stringify({gameId, comment})
        })
        if(request.ok){
            form.reset()
        }
    }catch(err){
        alert(err)
    }
}

async function fetchComments(id){
    console.log
    const getCommentsUrl = `/data/comments?where=gameId%3D%22${id}%22`;
    const request = await fetch(getCommentsUrl)
    const data = await request.json()
    console.log(data)
}