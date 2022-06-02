function search() {
   let searchTextElement = document.getElementById('searchText');
   let townsElement = document.getElementById('towns').children;
   let resultElement = document.getElementById('result');
   let counter = 0;
   for (let i = 0; i < townsElement.length; i++){
      if (townsElement[i].textContent.includes(searchTextElement.value)){
         townsElement[i].style.textDecoration = 'underline'
         townsElement[i].style.textDecoration = 'bold'
         counter++;
      } 
   }
   resultElement.textContent = `${counter} matches found`
   searchTextElement.value = '';
}
