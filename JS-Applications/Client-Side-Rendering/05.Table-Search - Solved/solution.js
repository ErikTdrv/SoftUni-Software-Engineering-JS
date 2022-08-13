   import {html, render} from 'https://unpkg.com/lit-html?module';
   const tbodyElement = document.querySelector('tbody');
   const url = 'http://localhost:3030/jsonstore/advanced/table';
   const inputElement = document.getElementById('searchField');
   
   const searchButton = document.querySelector('#searchBtn').addEventListener('click', onClick);
   window.addEventListener('load', onLoad);

   async function onClick() {
      const arrayOfStudents = tbodyElement.children;
      for (let el of arrayOfStudents){
         if (el.innerHTML.toLowerCase().includes(inputElement.value.toLowerCase())){
            el.classList.add('select')
         }else {
            el.classList.remove('select')
         }
      }
      inputElement.value = '';

   }

   async function onLoad(){
      tbodyElement.innerHTML = '';
      const request = await fetch(url);
      const response = await request.json();

      const template = Object.values(response).map(({course, email, firstName, lastName}) => {
         return html `
            <tr>
               <td>${firstName} ${lastName}</td>
               <td>${email}</td>
               <td>${course}</td>
            </tr>
         `
      })
      render(template, tbodyElement)
   }


   // <tr>
   //              <td>John Dan</td>
   //              <td>john@john-dan.com</td>
   //              <td>JS-CORE</td>
   //          </tr>