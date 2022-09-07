import { html, render } from '../node_modules/lit-html/lit-html.js';

import page from "../node_modules/page/page.mjs"
import { checkUser } from '../src/app.js';
const mainElement = document.querySelector('main');
const getUrl = 'http://localhost:3030/data/memes/' 
const editTemplate = (meme, ctx) => html `
<section id="edit-meme">
            <form id="edit-form" @submit=${(e) => onSubmitEdit(e, ctx)}>
                <h1>Edit Meme</h1>
                <div class="container">
                    <label for="title">Title</label>
                    <input id="title" type="text" value= ${meme.title} name="title">
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description">${meme.description}</textarea>
                    <label for="imageUrl">Image Url</label>
                    <input id="imageUrl" type="text" value= ${meme.imageUrl} name="imageUrl">
                    <input type="submit" class="registerbtn button" value="Edit Meme">
                </div>
            </form>
        </section>
`
const template = (meme) => html `
<section id="meme-details">
            <h1>Meme Title: ${meme.title}

            </h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src=${meme.imageUrl}>
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>
                    ${meme.description}
                    </p>

                    <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
                    ${meme._ownerId == JSON.parse(localStorage.getItem('id')) ? html `<a class="button warning" href=/edit/${meme._id}>Edit</a>
                    <button class="button danger" @click=${(e) => onDelete(e, meme._id)}>Delete</button>` : ''}
                    
                </div>
            </div>
        </section>
`



export async function details(ctx){
    const id = ctx.params.id
    const response = await fetch(getUrl + id);
    const data = await response.json()
    console.log(data)
render(template(data, ctx), mainElement)
}

export async function editView(ctx){
    const id = ctx.params.id
    const request = await fetch(getUrl + id)
    const data = await request.json();
    render(editTemplate(data, ctx), mainElement)
}


async function onSubmitEdit(e, ctx){
    e.preventDefault()
    const id = ctx.params.id

    const form = new FormData(e.target);
    const title = form.get('title');
    const description = form.get('description');
    const imageUrl = form.get('imageUrl');
    try{
        if (title == '' || description == '' || imageUrl == ''){
            throw new Error('You must fill all the inputs!')
        }

        const response = await fetch(getUrl + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': JSON.parse(localStorage.getItem('authToken'))

            },
            body: JSON.stringify({title,description,imageUrl})
        })
        if(response.ok){
            page.redirect('/details/' + id)
        }
    }catch(err){
        alert(err)
    }
}

export async function onDelete(e, id){
    confirm('Do you really want to delete the game?') ? fetch(getUrl + id, {
        method: 'DELETE',
        headers: {
            'X-Authorization': JSON.parse(localStorage.getItem('authToken'))
        }
    }) : null

    page.redirect('/allmemes')
}