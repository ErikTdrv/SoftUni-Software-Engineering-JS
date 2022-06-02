function toggle() {
    let buttonElement = document.querySelector('span.button');
    let pElement = document.querySelector('div > p');
    let divElement = document.getElementById('extra');
    
    if (buttonElement.textContent === 'More'){
        buttonElement.textContent = 'Less';
        divElement.style.display = 'block'
    }else if(buttonElement.textContent === 'Less'){
        buttonElement.textContent = 'More';
        divElement.style.display = 'none'
    }

    
}