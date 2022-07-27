import page from "../node_modules/page/page.mjs"
import { html, render } from 'https://unpkg.com/lit-html?module.js';
const getUrl = 'http://localhost:3030/data/catalog';
const divContainer = document.querySelector('.container');

const template = (catalog) => html `
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
    </div>
    ${catalog.map(({ img, description, price, _id, _ownerId}) => {
        return html `
                <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src=${_ownerId == localStorage.getItem('ownerId') ? '' : './01.Furniture/'}${img} />
                            <p>${description}</p>
                            <footer>
                                <p>Price: <span>${price} $</span></p>
                            </footer>
                            <div>
                                <a href="/details/${_id}" class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>
                `
    })}
</div>
`





export async function loadDashboard() {
    const request = await fetch(getUrl);
    const data = await request.json();
    render(template(data), divContainer)
}

