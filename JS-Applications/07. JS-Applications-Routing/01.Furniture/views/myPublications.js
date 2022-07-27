import page from "../node_modules/page/page.mjs"
import { html, render } from 'https://unpkg.com/lit-html?module.js';
import { onSubmit } from "./createFurnitureView.js";
const divContainer = document.querySelector('.container');
let userId = localStorage.getItem('ownerId');
const myFurnitureUrl = `http://localhost:3030/data/catalog?where=_ownerId%3D%22${userId}%22`;


let onDetailsTemplate = ({ img, make, model, year, description, price, material, _id, _ownerId }) => html`
<div class="row space-top">
<div class="col-md-12">
<h1>Furniture Details</h1>
</div>
</div>
<div class="row space-top">
<div class="col-md-4">
<div class="card text-white bg-primary">
    <div class="card-body">
        <img src=${_ownerId == localStorage.getItem('ownerId') ? '' : './01.Furniture/'}${img} />
    </div>
</div>
</div>
<div class="col-md-4">
<p>Make: <span>${make}</span></p>
<p>Model: <span>${model}</span></p>
<p>Year: <span>${year}</span></p>
<p>Description: <span>${description}</span></p>
<p>Price: <span>${price}</span></p>
<p>Material: <span>${material}</span></p>

</div>
        <div style= display:${_ownerId == localStorage.getItem('ownerId') ? 'inline' : 'none'}>
            <a href="/edit/${_id}" class="btn btn-info">Edit</a>
            <a href="/delete/${_id}"class="btn btn-red">Delete</a>
        </div>
        </div>
`
let onEditTemplate = (pubblication) => html`
<div class="row space-top">
            <div class="col-md-12">
                <h1>Edit Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${(e) => onSubmit(e, 'PUT', `http://localhost:3030/data/catalog/${pubblication._id}`)}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control" id="new-make" type="text" name="make" value=${pubblication.make}>
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control is-valid" id="new-model" type="text" name="model" value=${pubblication.model}>
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control is-invalid" id="new-year" type="number" name="year" value=${pubblication.year}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description" value=${pubblication.description}>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price" value=${pubblication.price}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img" value=${pubblication._ownerId == localStorage.getItem('ownerId') ? '' : './01.Furniture/'}${img}${pubblication.img}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" value=${pubblication.material}>
                    </div>
                    <input type="submit" class="btn btn-info" value="Edit" />
                </div>
            </div>
        </form>
`
let template = (publications) => html`
<div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
        ${publications.map(({ img, description, price, _id, _ownerId }) => {
    return html`
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

export async function publicationView(e) {
    const response = await fetch(myFurnitureUrl);
    const data = await response.json();
    if (data.length == 0) {
        template = html`
        <p> You don't have any pubblications yet </p>
        `
        render(template, divContainer)
        return;
    }

    render(template(Object.values(data)), divContainer)

}
export async function onDetailsClick(ctx) {

    const idUrl = `http://localhost:3030/data/catalog?where=_id%3D%22${ctx.params.detailsId}%22`
    const response = await fetch(idUrl);
    const data = await response.json();
    render(onDetailsTemplate(data[0]), divContainer)
}

export async function onEdit(ctx) {

    const idUrl = `http://localhost:3030/data/catalog?where=_id%3D%22${ctx.params.id}%22`
    const response = await fetch(idUrl);
    const data = await response.json();
    render(onEditTemplate(data[0]), divContainer)
}

export async function onDelete(ctx) {
    let wantToDelete = null;
    const deleteUrl = `http://localhost:3030/data/catalog/`
    const currId = ctx.params.id;
    confirm(`Do you really want to delete the post?`) ? wantToDelete = true : wantToDelete = false;

    if (wantToDelete) {
        await fetch(deleteUrl + currId, {
            method: 'DELETE',
            headers: {
                'X-Authorization': localStorage.getItem('authToken')
            }
        })
    }
    page.redirect('/catalog')

}

// "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
// "make": "Table",
// "model": "Swedish",
// "year": 2015,
// "description": "Medium table",
// "price": 235,
// "img": "./images/table.png",
// "material": "Hardwood",
// "_createdOn": 1615545143015,
// "_id": "53d4dbf5-7f41-47ba-b485-43eccb91cb95"