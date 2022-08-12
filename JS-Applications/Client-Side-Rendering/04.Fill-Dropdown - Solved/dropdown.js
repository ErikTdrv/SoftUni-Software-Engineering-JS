import { html, render } from 'https://unpkg.com/lit-html?module';
const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
const menuElement = document.getElementById('menu');
const inputElement = document.getElementById('itemText');
const buttonElement = document.querySelector('input[type=submit]')
window.addEventListener('load', onLoad)
buttonElement.addEventListener('click', addOption)



async function onLoad() {
    menuElement.innerHTML = '';
    const request = await fetch(url);
    const response = await request.json();
    const thingy = Object.values(response)
    const template = html`
        ${thingy.map(({ text, _id }) => {
        return html`
                <option value="${_id}">${text}</option>
                `
    })}
    `
    render(template, menuElement)
}

async function addOption(e) {
    const value = inputElement.value
    console.log(value)
    await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: value})
    })
    return onLoad()
}