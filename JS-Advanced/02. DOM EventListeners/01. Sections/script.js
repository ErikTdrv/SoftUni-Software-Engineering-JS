function create(words) {
   
   let resultElement = document.getElementById('content');
   for (let el of words){
      let newDivElement = document.createElement('div');
      let newPElement = document.createElement('p');
      newPElement.textContent = el;
      newPElement.style.display = 'none';
      newDivElement.appendChild(newPElement);
      
      newDivElement.addEventListener('click', e => 
      newPElement.style.display = 'block')

      resultElement.appendChild(newDivElement)
   }
   

}
// ['Section 1', 'Section 2', 'Section 3', 'Section 4']