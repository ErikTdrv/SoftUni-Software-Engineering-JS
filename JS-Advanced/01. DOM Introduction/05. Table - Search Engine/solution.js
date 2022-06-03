function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let searchElement = document.getElementById('searchField');
   let tableElement = document.querySelectorAll('tbody tr');
   console.log(tableElement[0].textContent)


   function onClick() {
   for (let i = 0; i < tableElement.length; i++){
      tableElement[i].classList.remove('select')
         if (tableElement[i].textContent.includes(searchElement.value)){
            tableElement[i].setAttribute('class', 'select');
         }
   }
   searchElement.value = ''
   }
}