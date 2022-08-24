import {html , render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { checkUser } from '../src/checkUser.js';
const dashboardUrl = 'http://localhost:3030/data/offers?sortBy=_createdOn%20desc'

const dashboardTemplate = (offers) => html `
<section id="dashboard">
          <h2>Job Offers</h2>

          ${offers.length == 0 ? html `<h2>No offers yet.</h2>` : offers.map((offer) => html `
          <div class="offer">
            <img src=${offer.imageUrl} alt="./images/example3.png" />
            <p>
              <strong>Title: </strong
              ><span class="title">${offer.title}</span>
            </p>
            <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
            <a class="details-btn" href="/details/${offer._id}">Details</a>
          </div>
          `)}
          

          
        </section>
`

export async function dashboardView(ctx){
    checkUser()
    const request = await fetch(dashboardUrl)
    const data = await request.json()
    ctx.render(dashboardTemplate(data))
}