import {render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { checkUser } from '../src/checkUser.js';
import { myCarsTemplate, url } from '../src/templates.js';
import { getUser } from '../src/util.js';

export async function myCarsView(ctx){
    const userId = getUser().id
    const getUrl = `http://localhost:3030/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
    console.log(getUrl)
    const request = await fetch(getUrl)
    const data = await request.json()
    console.log(data)
    ctx.render(myCarsTemplate(data))
}