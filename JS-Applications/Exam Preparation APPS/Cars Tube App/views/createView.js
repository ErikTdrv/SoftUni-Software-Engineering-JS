import {render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { checkUser } from '../src/checkUser.js';
import { createCarTemplate, url } from '../src/templates.js';
import { getAuthToken } from '../src/util.js';

export function createView(ctx){
    ctx.render(createCarTemplate(onCreateSubmit))

    async function onCreateSubmit(e){
        e.preventDefault();
        const form = new FormData(e.target);
        const brand = form.get('brand')
        const model = form.get('model')
        const description = form.get('description')
        const year = Number(form.get('year'))
        const imageUrl = form.get('imageUrl')
        const price  = Number(form.get('price'))

        try{
            if (brand == '' || model == '' || description == '' || imageUrl == '' || year == '' || price == ''){
                throw new Error('You must fill all the inputs!')
            }
            
            if(year > 0 && price > 0){

                console.log(JSON.parse(localStorage.getItem('user')).authToken)
                const response = await fetch('http://localhost:3030/data/cars', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Authorization': getAuthToken()
        
                    },
                    body: JSON.stringify({brand, model, description, year, imageUrl, price})
                })
                const data = await response.json()
                if(response.ok){
                    page.redirect('/all')
                }else {
                    throw Error(data.message)
                }
            }
        }catch(err){
            alert(err)
        }
    }
}