import {html, render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

const myPostsTemplate = (posts) => html `
<section id="my-posts-page">
            <h1 class="title">My Posts</h1>

            ${posts.length == 0 ? html `<h1 class="title no-posts-title">You have no posts yet!</h1>` : html `
            <div class="my-posts">
                ${posts.map((post) => html `
                <div class="post">
                    <h2 class="post-title">${post.title}</h2>
                    <img class="post-image" src=${post.imageUrl} alt="Material Image">
                    <div class="btn-wrapper">
                        <a href="/details/${post._id}" class="details-btn btn">Details</a>
                    </div>
                </div>

                `)}
            </div>
            `}
            
            
        </section>
`

export async function myListView(ctx){
    const userId = JSON.parse(localStorage.getItem('user')).id
    const myPostsUrl = `http://localhost:3030/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
    const request = await fetch(myPostsUrl)
    const data = await request.json()
    ctx.render(myPostsTemplate(data))
}
