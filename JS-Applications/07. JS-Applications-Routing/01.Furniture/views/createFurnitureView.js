import page from "../node_modules/page/page.mjs"
import { html, render } from 'https://unpkg.com/lit-html?module.js';
import { loadDashboard } from "./dashboardView.js";
const divContainer = document.querySelector('.container');
const addFurnitureUrl = 'http://localhost:3030/data/catalog';
const template = html `
<div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${(e) => onSubmit(e, 'POST', addFurnitureUrl)}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control valid" id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control is-valid" id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control is-invalid" id="new-year" type="number" name="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>
`
export async function furnitureView(){
    render(template, divContainer)
}

export async function onSubmit(e, methodType, url){
    e.preventDefault()
    let canSubmit = true;
    const form = new FormData(e.target);
    const makeInput = document.getElementById('new-make');
    const modelInput = document.getElementById('new-model');
    const yearInput = document.getElementById('new-year');
    const descriptionInput = document.getElementById('new-description');
    const priceInput = document.getElementById('new-price');
    const imgInput = document.getElementById('new-image');
    const materialInput = document.getElementById('new-material');
    
    makeInput.value < 4 ? makeInput.classList = 'is-invalid' : makeInput.classList = 'is-valid'
    modelInput.value < 4 ? modelInput.classList = 'is-invalid' : modelInput.classList = 'is-valid'
    yearInput.value < 1950 ? yearInput.classList = 'is-invalid' : yearInput.classList = 'is-valid'
    yearInput.value > 2050 ? yearInput.classList = 'is-invalid' : yearInput.classList = 'is-valid'
    descriptionInput.value < 10 ? descriptionInput.classList = 'is-invalid' : descriptionInput.classList = 'is-valid'
    priceInput.value < 0 ? priceInput.classList = 'is-invalid' : priceInput.classList = 'is-valid'
    imgInput.value.length == 0 ? imgInput.classList = 'is-invalid' : imgInput.classList = 'is-valid'

    if(e.target.innerHTML.includes('is-invalid')){
        canSubmit = false;
        return alert('Please sign the inputs correctly!')
    }

    const response = await fetch(url, {
        method: methodType,
        headers: {
            'Content-Type':'application/json',
            'X-Authorization': localStorage.getItem('authToken')
        },
        body: JSON.stringify({
            make: makeInput.value,
            model: modelInput.value,
            year: yearInput.value,
            description: descriptionInput.value,
            price:priceInput.value,
            img: imgInput.value, 
            material: materialInput.value
        })
    })
    page.redirect('/catalog')

}

// •	Make and Model must be at least 4 symbols long
// •	Year must be between 1950 and 2050
// •	Description must be more than 10 symbols
// •	Price must be a positive number
// •	Image URL is required
// •	Material is optional
