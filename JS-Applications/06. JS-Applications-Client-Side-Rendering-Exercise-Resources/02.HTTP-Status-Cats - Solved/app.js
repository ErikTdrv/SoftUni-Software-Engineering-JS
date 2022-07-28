import {html, render} from 'https://unpkg.com/lit-html?module';
import { cats } from './catSeeder.js';
window.addEventListener('load', loadingCats)

const catsSection = document.getElementById('allCats');
function loadingCats(){
    const template = html `
    <ul>
        ${cats.map((e) => {
            return html `<li>
                <img src="./images/${e.imageLocation}.jpg" width = "250" alt = "Card image cap">
                <div class = "info">
                    <button class="showBtn" @click= ${onToggle}>Show status code</button>
                    <div class="status" style="display: none" id=${e.id}>
                        <h4>Status Code: ${e.statusCode}</h4>
                        <p>${e.statusMessage}</p>
                    </div>
                </div>
            </li>
            `
        })}
    </ul>
    `
    render(template, catsSection)
    const button = document.querySelector('.showBtn')
    
}

function onToggle(e){
    const cat = e.target.parentNode
    const statusElement = cat.querySelector('.status')
    if (e.target.textContent == 'Show status code'){
        e.target.textContent = 'Hide status code'
        statusElement.style.display = 'block'
    }else {
        e.target.textContent = 'Show status code'
        statusElement.style.display = 'none'

    }
}

