function solve() {
    let onScreenElement = document.querySelectorAll('button')[0];
    let clearElement = document.querySelectorAll('button')[1];
    let nameInputElement = document.querySelectorAll('input')[0];
    let hallInputElement = document.querySelectorAll('input')[1];
    let ticketPriceElement = document.querySelectorAll('input')[2];
    let ulElement = document.querySelector('ul');
    let ulElement2 = document.querySelectorAll('ul')[1];
    let idArchive = document.getElementById('archive')
    
    

    clearElement.addEventListener('click', (e) => {

            let elements = Array.from(ulElement2.children)
            if(elements.length > 1){  
                for (let i = 0; i < elements.length; i++){
                    let child = elements[i]
                    
                    child.remove()
                }
    
            }else if(elements.length == 1){
                elements[0].remove()
            }
        
        

    })

    onScreenElement.addEventListener('click', (e) => {
        e.preventDefault()
        if (nameInputElement.value !== "" && hallInputElement.value !== "" && ticketPriceElement.value !== "" &&  !isNaN(ticketPriceElement.value)){
            addMovies(nameInputElement.value, hallInputElement.value, ticketPriceElement.value);
        }
        clearTheInput()
    })
    
    function addMovies(movieName, hallName, ticketPrice){
        let newLiElement = document.createElement('li');
        // ulElement.appendChild(newLiElement);
        ulElement.appendChild(newLiElement);
        creatingElements('span', movieName, newLiElement);
        creatingElements('strong', `Hall: ${hallName}`, newLiElement);
        let newDivElement = document.createElement('div');
        newLiElement.appendChild(newDivElement);
        let newStrongElement = document.createElement('strong');
        newStrongElement.textContent = Number(ticketPrice).toFixed(2);
        newDivElement.appendChild(newStrongElement);
        let newInputElement = document.createElement('input')
        newInputElement.placeholder = 'Tickets Sold';
        newDivElement.appendChild(newInputElement);
        let archiveButtonElement = document.createElement('button');
        archiveButtonElement.textContent = 'Archive';
        newDivElement.appendChild(archiveButtonElement)
        
        archiveButtonElement.addEventListener('click', (e) => archive(e, newInputElement.value, movieName,ticketPrice));
        
    }

    function archive(e,value, movieName,ticketPrice){
        if (value !== ""){
            e.target.parentNode.remove();
            let liElement = creatingElements('li', "", ulElement2);
            creatingElements('span', movieName, liElement)
            creatingElements('strong', `Total amount: ${(ticketPrice*value).toFixed(2)}`, liElement);
            let deleteButton = creatingElements('button', 'Delete', liElement)
            deleteButton.addEventListener('click', (e) => e.target.parentNode.parentNode.remove())
        }
    }



    function creatingElements(elementToCreate, textContent, appendTo, classElement){
        let newElement = document.createElement(elementToCreate);
        newElement.textContent = textContent;
        if (appendTo){
            appendTo.appendChild(newElement);
        }
        
        return newElement
    }

    function clearTheInput(){
        nameInputElement.value = '';
        hallInputElement.value = '';
        ticketPriceElement.value = '';
    }
}