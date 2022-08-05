import {render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { checkUser } from '../src/checkUser.js';
import { detailsTemplate, editCarTemplate, url } from '../src/templates.js';
import { getAuthToken } from '../src/util.js';

export async function detailsView(ctx){
    const id = ctx.params.id
    const request = await fetch(url.carDetail + id)
    const data = await request.json();
    ctx.render(detailsTemplate(data))
}

export async function editView(ctx){

    const id = ctx.params.id
    const request = await fetch(url.carDetail + id)
    const data = await request.json();
    ctx.render(editCarTemplate(data, onEditSubmit))

    async function onEditSubmit(e){
        e.preventDefault()
        const form = new FormData(e.target);
        const brand = form.get('brand')
        const model = form.get('model')
        const description = form.get('description')
        const year = Number(form.get('year'))
        const imageUrl = form.get('imageUrl')
        const price  = Number(form.get('price'))
        try{
            if (brand == '' || model == '' || description == '' || year < 1 || imageUrl == '' || price < 1 || year == '' || price == ''){
                throw new Error('You must fill all the inputs!')
            }

            const response = await fetch(url.carDetail + id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': getAuthToken()
    
                },
                body: JSON.stringify({brand, model, description, year, imageUrl, price})
            })
            if(response.ok){
                page.redirect('/details/' + id)
            }
        }catch(err){
            alert(err)
        }
    }
}

export async function deleteCar(ctx){
    const id = ctx.params.id
    confirm('Do you really want to delete the game?') ? fetch(url.carDetail + id, {
        method: 'DELETE',
        headers: {
            'X-Authorization': getAuthToken()
        }
    }) : null

    page.redirect('/all')
}