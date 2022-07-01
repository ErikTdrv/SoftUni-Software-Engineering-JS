window.addEventListener('load', solve);


function solve() {
    
    let addButtonElement = document.getElementById('add-btn');
let genreElement = document.getElementById('genre');
let nameElement = document.getElementById('name');
let authorElement = document.getElementById('author');
let dateElement = document.getElementById('date');
let divClassElement = document.getElementsByClassName('all-hits-container')[0]
let divClassHits = document.getElementsByClassName('saved-container')[0];

    
    addButtonElement.addEventListener('click', (e) => {
        
        addingSong(e, genreElement.value, nameElement.value, authorElement.value, dateElement.value)})
    
        function addingSong(e, genre, name, author, date){
            
            e.preventDefault()
            if (genreElement.value !== "" && nameElement.value !== "" && authorElement.value !== "" && dateElement.value !== ""){
                let newDivElement = creatingElements('div', "", divClassElement);
                newDivElement.setAttribute('class', 'hits-info');
                let newImg = creatingElements('img', "", newDivElement);
                newImg.src = "./static/img/img.png";
                creatingElements('h2', `Genre: ${genre}`, newDivElement);
                creatingElements('h2', `Name: ${name}`, newDivElement);
                creatingElements('h2', `Author: ${author}`, newDivElement);
                creatingElements('h3', `Date: ${date}`, newDivElement);
                let saveButton = creatingElements('button', "Save song", newDivElement);
                saveButton.classList.add("save-btn");
                let likeButton = creatingElements('button', "Like song", newDivElement);
                likeButton.classList.add("like-btn");
                let deleteButton = creatingElements('button', "Delete", newDivElement);
                deleteButton.classList.add('delete-btn');
                newDivElement.classList.add('hits-info');
        
        
                likeButton.addEventListener('click', (e) => likeFunctionality(e))
                saveButton.addEventListener('click', (e) => saveFunctionality(e, genre, name, author, date))
                deleteButton.addEventListener('click', (e) => deleteFunctionality(e))
                clearInputs()
            }
        }
        
        function saveFunctionality(e, genre, name, author, date){
            e.target.parentNode.remove();
            let createdDiv = creatingElements('div', "", divClassHits)
            createdDiv.classList.add('hits-info');
            let img = creatingElements('img', "", createdDiv)
            img.src = "./static/img/img.png"
            creatingElements("h2", `Genre: ${genre}`, createdDiv);
            creatingElements('h2', `Name: ${name}`, createdDiv);
            creatingElements('h2', `Author: ${author}`, createdDiv);
            creatingElements('h3', `Date: ${date}`, createdDiv);
            let buttonEl = creatingElements('button', "Delete", createdDiv);
            buttonEl.classList.add("delete-btn")
            buttonEl.addEventListener('click', (e) => deleteFunctionality(e))
        
        }
        
        function creatingElements(elementToCreate, textContent, appendTo){
            let newElement = document.createElement(elementToCreate);
            newElement.textContent = textContent;
            if (appendTo){
                appendTo.appendChild(newElement);
            }
            return newElement
        }
        
        function likeFunctionality(e){
            // e.target.style.background = "grey"
            e.target.disabled = true;
            let counter = 0
            let divElement = document.getElementsByClassName('likes')[0];
            let totalLikesElement = divElement.children[0]
            
            let currentLikes = Number(totalLikesElement.textContent.split(': ')[1]) + 1 
            
            
            // let currentLikes = Number(totalLikesElement.textContent[13]) + 1
            
            totalLikesElement.textContent = `Total Likes: ${currentLikes}`
        }
        
        function deleteFunctionality(e){
            e.target.parentNode.remove();
        
        }

        function clearInputs(){
            genreElement.value = "";
            nameElement.value = "";
            authorElement.value = "";
            dateElement.value = "";
        }
}


