import {html, render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

const getAlbumsUrl ='http://localhost:3030/data/albums?sortBy=_createdOn%20desc&distinct=name'


const myPostsTemplate = (albums) => html `
<section id="catalogPage">
            <h1>All Albums</h1>
            ${albums.length == 0 ? html `<p>No Albums in Catalog!</p>` : 
                albums.map((album) => html `
            <div class="card-box">
            <img src=${album.imgUrl}>
            <div>
                <div class="text-center">
                    <p class="name">Name: ${album.name}</p>
                    <p class="artist">Artist: ${album.artist}</p>
                    <p class="genre">Genre: ${album.genre}</p>
                    <p class="price">Price: $${album.price}</p>
                    <p class="date">Release Date: ${album.releaseDate}</p>
                </div>
                ${localStorage.getItem('user') ? html `<div class="btn-group">
                <a href="/details/${album._id}" id="details">Details</a>
            </div>`: ''}
                
            </div>
            </div>
            `)}
            }
            
                
            



        </section>

`

export async function catalogView(ctx){
    const request = await fetch(getAlbumsUrl)
    const data = await request.json()
    ctx.render(myPostsTemplate(data))
}
