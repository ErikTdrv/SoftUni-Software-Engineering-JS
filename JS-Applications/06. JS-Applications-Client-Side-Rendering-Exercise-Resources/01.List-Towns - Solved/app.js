import {html, render} from 'https://unpkg.com/lit-html?module';

const rootElement = document.getElementById('root');
const inputElement = document.getElementById('towns');
const loadButton = document.getElementById('btnLoadTowns');

loadButton.addEventListener('click', onClick)

function onClick(e){
    e.preventDefault()
    const towns = inputElement.value.split(', ')
    const template = html `
    <ul>
    ${towns.map(e => html `<li>${e}</li>`)}
    </ul>
    `
    render(template, rootElement)
}
