import {html, render} from 'https://unpkg.com/lit-html?module';
import { towns } from './towns.js';
const townsElement = document.getElementById('towns');
const inputElement = document.getElementById('searchText');
const resultElement = document.getElementById('result');
const buttonElement = document.querySelector('button');
window.addEventListener('load', loadTowns)
buttonElement.addEventListener('click', onClick)
function loadTowns() {
   const template = html `
   <ul>
      ${towns.map((town) => {
         return html `<li> ${town} </li>`
      })}
   </ul>
   `;
   render(template, townsElement);
}

function onClick(){
   const townsToIterate = document.querySelectorAll('ul li');
   let counter = 0;
   for (let el of townsToIterate){
      const currTown = el.textContent
      const currInput = inputElement.value
      if(currTown.toLowerCase().includes(currInput.toLowerCase())){
         el.classList = 'active'
         counter++
      }else {
         el.classList = ''
      }
   }
   resultElement.textContent = `${counter} matches found`
}
