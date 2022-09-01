import {html, render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { checkUser } from '../src/checkUser.js';
const getUrl = 'http://localhost:3030/data/posts?sortBy=_createdOn%20desc'

const dashboardTemplate = (posts) => html `
<section id="dashboard-page">
            <h1 class="title">All Posts</h1>

            ${posts.length == 0?html `<h1 class="title no-posts-title">No posts yet!</h1>` : html `<div class="all-posts">
            ${posts.map((post) => html `
            <div class="post">
                    <h2 class="post-title">${post.title}</h2>
                    <img class="post-image" src=${post.imageUrl} alt="Material Image">
                    <div class="btn-wrapper">
                        <a href="/details/${post._id}" class="details-btn btn">Details</a>
                    </div>
                </div>
            `)}
            </div>`}
            
        </section>
`

export async function dashboardView(ctx){
    checkUser()
    const request = await fetch(getUrl)
    const data = await request.json()
    ctx.render(dashboardTemplate(data))
}