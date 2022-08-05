import {render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { checkUser } from '../src/checkUser.js';
import { allCarsTemplate, url } from '../src/templates.js';

export async function allCarsView(ctx){
    checkUser()
    const request = await fetch(url.getCars)
    const data = await request.json()
    ctx.render(allCarsTemplate(data))
}
