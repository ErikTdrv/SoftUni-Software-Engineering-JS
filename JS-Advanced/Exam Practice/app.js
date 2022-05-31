function solve() {
    let recipientElement = document.getElementById('recipientName');
    let titleElement = document.getElementById('title');
    let textAreaElement = document.getElementById('message');
    let ulListElement = document.getElementById('list');
    
    //Adjusting AddToTheList button
    let addToTheListButton = document.getElementById('add')
    addToTheListButton.addEventListener('click', (e) => {
        if (recipientElement.value !== '' && titleElement.value !== '' && textAreaElement.value !== ''){
            e.preventDefault()
            //Appending the LI main element
            let newLiElement = document.createElement('li');
            ulListElement.appendChild(newLiElement);
            

            let storedName = recipientElement.value;
            let storedTitle = titleElement.value
            //Appending [...rest]
            
            let newH4Element = document.createElement('h4');
            newH4Element.textContent = 'Title: ' + titleElement.value;
            newLiElement.appendChild(newH4Element)
            
            let newH4Element2 = document.createElement('h4');
            newH4Element2.textContent = 'Recipient Name: ' + recipientElement.value;
            newLiElement.appendChild(newH4Element2)
            let newSpanElement = document.createElement('span');
            newSpanElement.textContent = textAreaElement.value;
            newLiElement.appendChild(newSpanElement)
    
            //Appending buttons
            let newDivId = document.createElement('div');
            newDivId.setAttribute('id', 'list-action')
            newLiElement.appendChild(newDivId);
            let firstButton = document.createElement('button')
            firstButton.setAttribute('type', 'submit')
            firstButton.setAttribute('id', 'send')
            firstButton.textContent = 'Send'
            newDivId.appendChild(firstButton)
            
            let secondButton = document.createElement('button');
            secondButton.setAttribute('type', 'submit')
            secondButton.setAttribute('id', 'delete')
            secondButton.textContent = 'Delete'
            newDivId.appendChild(secondButton)
    
            
            let buttonElements = Array.from(ulListElement.querySelectorAll('li'));
            
            //Adjusting send button
            
            for (let el of buttonElements){
                let currentSendButtonElement = el.lastChild.firstChild;
                let currentDeleteButtonElement = el.lastChild.lastChild;
                
                
                currentSendButtonElement.addEventListener('click', (e) => {
                    let ulSendElement = document.querySelector('.sent-mails .sent-list')
                    let liElement = document.createElement('li');
                    let spanElement = document.createElement('span');
                    let secondSpanElement = document.createElement('span');
                let divClassBtnElement = document.createElement('div');
                divClassBtnElement.setAttribute('class', 'btn');
                let deleteButtonElement = document.createElement("button");
                deleteButtonElement.setAttribute('class', 'delete')
                deleteButtonElement.textContent = 'Delete';
                spanElement.textContent = 'To: ' + storedName
                secondSpanElement.textContent = 'Title: ' + storedTitle
                divClassBtnElement.appendChild(deleteButtonElement)
                ulSendElement.appendChild(liElement)
                liElement.appendChild(spanElement)
                liElement.appendChild(secondSpanElement)
                liElement.appendChild(divClassBtnElement)
                
                ulListElement.removeChild(el)
                
                let sentMailsElement = Array.from(document.querySelectorAll('.sent-mails .sent-list li'))
                
                for (let element of sentMailsElement){
                    
                    let deleteButton2Element = element.querySelector('button')
                    deleteButton2Element.addEventListener('click', (e) => {
                    let liSentElement = element.querySelector('li');

                    let ulDeleteElement = document.querySelector('.trash .delete-list')
                    let liElement = document.createElement('li');
                    let spanElement = document.createElement('span');
                    let secondSpanElement = document.createElement('span');
                    spanElement.textContent = 'To: ' + storedName
                    secondSpanElement.textContent = 'Title: ' + storedTitle
                    ulDeleteElement.appendChild(liElement)
                    liElement.appendChild(spanElement)
                    liElement.appendChild(secondSpanElement)
                    
                    let divClassSentMails = document.querySelector('.sent-mails .sent-list')
                    
                    divClassSentMails.removeChild(element)

                    })
                }
            })
            
            currentDeleteButtonElement.addEventListener('click', (e) => {
                let ulDeleteElement = document.querySelector('.trash .delete-list')
                let liElement = document.createElement('li');
                let spanElement = document.createElement('span');
                let secondSpanElement = document.createElement('span');
                spanElement.textContent = 'To: ' + storedName
                    secondSpanElement.textContent = 'Title: ' + storedTitle
                    ulDeleteElement.appendChild(liElement)
                    liElement.appendChild(spanElement)
                    liElement.appendChild(secondSpanElement)
                    ulListElement.removeChild(el)
                    
                })
            }
            
            
        }


    })

    //Adjusting reset button 
    let resetButton = document.getElementById('reset')
    resetButton.addEventListener('click', (e) => {
        e.preventDefault()
        recipientElement.value = '';
        titleElement.value = '';
        textAreaElement.value = '';
        
    })

    
}
solve()