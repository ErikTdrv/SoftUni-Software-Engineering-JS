import {render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { checkUser } from '../src/checkUser.js';
import { homeTemplate, url } from '../src/templates.js';

export function homeView(ctx){
    ctx.render(homeTemplate)
}