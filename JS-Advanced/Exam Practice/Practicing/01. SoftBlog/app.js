function solve(){
   let authorElement = document.getElementById('creator');
   let titleElement = document.getElementById('title');
   let categoryElement = document.getElementById('category');
   let contentElement = document.getElementById('content');
   let btnElement = document.getElementsByClassName('btn create')[0];
   let sectionElement = document.querySelectorAll('section')[1]
   let olSection = document.querySelector('ol')
   let sortArray = [];
   btnElement.addEventListener('click', (e) => {
      
      e.preventDefault()
      setElements(authorElement.value, titleElement.value, categoryElement.value, contentElement.value)
      })
  

  function setElements(author, title, category, content){
   sortArray.push(title)
   let newArticle = document.createElement('article');
   sectionElement.appendChild(newArticle)
   let titleElement = createElements('h1', title, newArticle)
   
   
   let categoryElement = createElements('p', 'Category:', newArticle);
   createElements('strong', category, categoryElement)
   let pElement = createElements('p', 'Creator:', newArticle);
   createElements('strong', author, pElement);
   createElements('p', content, newArticle)
   let buttons = createElements('div', "", newArticle, 'buttons');
   let deleteButtonElement = createElements('button', 'Delete', buttons, 'btn');
   deleteButtonElement.classList.add('delete')
   let archiveButtonElement = createElements('button', 'Archive', buttons, 'btn');
   archiveButtonElement.classList.add('archive')

   archiveButtonElement.addEventListener('click', (e) => {
      e.preventDefault()
      newArticle.remove()
      archiveFunction(e, title)
   })

   deleteButtonElement.addEventListener('click', (e) => {
      newArticle.remove()
   })
  }

  function createElements(elToCreate, textElContent, appendToS, classText){
   let newElement = document.createElement(elToCreate);
   
   if (appendToS){
      appendToS.appendChild(newElement);
   }
   if (textElContent !== ""){
      newElement.textContent = textElContent;
   }
   if (classText){
      newElement.classList.add(classText)
   }
   return newElement
   }


   function archiveFunction(e, titleText){
      let newTitle = document.createElement('li');
      newTitle.textContent = titleText;
      olSection.appendChild(newTitle)
      
      let newArray = [];
      for (let el of Array.from(olSection.children)){
         newArray.push(el.textContent)
      }
      newArray.sort((a,b) => a.localeCompare(b))
      let counter = 0
      for (let el of Array.from(olSection.children)){
         el.textContent = newArray[counter]
         counter++
      }
      
   }

   
}