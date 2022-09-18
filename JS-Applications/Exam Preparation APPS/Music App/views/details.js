import {html, nothing, render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

const detailsUrl = `http://localhost:3030/data/albums/`
   
const detailsTemplate = (album) => html `
<section id="detailsPage">
<div class="wrapper">
    <div class="albumCover">
        <img src=${album.imgUrl}>
    </div>
    <div class="albumInfo">
        <div class="albumText">

            <h1>Name: ${album.name}</h1>
            <h3>Artist: ${album.artist}</h3>
            <h4>Genre: ${album.genre}</h4>
            <h4>Price: $${album.price}</h4>
            <h4>Date: ${album.releaseDate}</h4>
            <p>Description: ${album.description}</p>
        </div>

        ${localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).id == album._ownerId ? html `<div class="actionBtn">
        <a href="/edit/${album._id}" class="edit">Edit</a>
        <a href="/delete/${album._id}" class="remove">Delete</a>
    </div>`: nothing}
        
    </div>
</div>
</section>
`


const editTemplate = (post, onEditSubmit) => html `<section class="editPage">
<form @submit=${onEditSubmit}>
    <fieldset>
        <legend>Edit Album</legend>

        <div class="container">
            <label for="name" class="vhide">Album name</label>
            <input id="name" name="name" class="name" type="text" value=${post.name}>

            <label for="imgUrl" class="vhide">Image Url</label>
            <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" value=${post.imgUrl}>

            <label for="price" class="vhide">Price</label>
            <input id="price" name="price" class="price" type="text" value=${post.price}>

            <label for="releaseDate" class="vhide">Release date</label>
            <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" value=${post.releaseDate}>

            <label for="artist" class="vhide">Artist</label>
            <input id="artist" name="artist" class="artist" type="text" value=${post.artist}>

            <label for="genre" class="vhide">Genre</label>
            <input id="genre" name="genre" class="genre" type="text" value=${post.genre}>

            <label for="description" class="vhide">Description</label>
            <textarea name="description" class="description" rows="10"
                cols="10">${post.description}</textarea>

            <button class="edit-album" type="submit">Edit Album</button>
        </div>
    </fieldset>
</form>
</section>`


export async function postDetails(ctx){
    const id = ctx.params.id
    const response = await fetch(detailsUrl + id);
    const data = await response.json()

    
    ctx.render(detailsTemplate(data))
}



export async function editList(ctx){
    const id = ctx.params.id
    const request = await fetch(detailsUrl + id)
    const data = await request.json();
    ctx.render(editTemplate(data, onEditSubmit))

    async function onEditSubmit(e){
        e.preventDefault()

        const form = new FormData(e.target);
        const name = form.get('name');
        const imgUrl = form.get('imgUrl');
        const price = form.get('price');
        const releaseDate = form.get('releaseDate')
        const artist = form.get('artist')
        const genre = form.get('genre');
        const description = form.get('description')
        try {
            if (name == '' || price == '' || imgUrl == '' || releaseDate == '' || artist == '' || genre == '' || description == '') {
                throw new Error('You must fill all the inputs!')
            }

            const response = await fetch(detailsUrl + id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': JSON.parse(localStorage.getItem('user')).authToken

                },
                body: JSON.stringify({
                    name,
                    imgUrl,
                    price,
                    releaseDate,
                    artist,
                    genre,
                    description
                  }
                )
            })
            if (response.ok) {
                ctx.page.redirect(`/details/${id}`)
            }else {
                throw new Error(data.message)
            }
        }catch(err){
            alert(err)
        }
    }
}

export async function onDeleteSubmit(ctx){
    try{
        const id = ctx.params.id
        const response = await fetch(`http://localhost:3030/data/albums/` + id, {
            method: 'DELETE',
            headers: {
                'X-Authorization': JSON.parse(localStorage.getItem('user')).authToken
            }
        })
        const data = await response.json()

        if(response.ok){
            // setTimeout(() =>ctx.page.redirect('/'), 2000)
            ctx.page.redirect('/catalog')
    
        }else {
            throw new Error(data.message)
        }

    }catch(err){
        alert(err)
    }
}