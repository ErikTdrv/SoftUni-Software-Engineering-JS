import { html, render } from '../node_modules/lit-html/lit-html.js';

import page from "../node_modules/page/page.mjs"
import { checkUser } from '../src/app.js';
const mainElement = document.querySelector('main');
const getUrl = 'http://localhost:3030/data/memes'  

const createTemplate = html `
<section id="create-meme">
            <form id="create-form" @submit=${onCreateSubmit}>
                <div class="container">
                    <h1>Create Meme</h1>
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title">
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                    <label for="imageUrl">Meme Image</label>
                    <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
                    <input type="submit" class="registerbtn button" value="Create Meme">
                </div>
            </form>
        </section>
`

export function createView(){
    render(createTemplate, mainElement)
}

async function onCreateSubmit(e){
    e.preventDefault();
    const form = new FormData(e.target);
    const title = form.get('title');
    const description = form.get('description');
    const imageUrl = form.get('imageUrl');
    try{
        if (title == '' || description == '' || imageUrl == ''){
            throw new Error('You must fill all the inputs!')
        }

        const response = await fetch(getUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': JSON.parse(localStorage.getItem('authToken'))

            },
            body: JSON.stringify({title,description,imageUrl})
        })

        if(response.ok){
            page.redirect('/allmemes')
        }
    }catch(err){
        alert(err)
    }
}