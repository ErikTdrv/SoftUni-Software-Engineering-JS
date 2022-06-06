function lockedProfile() {
    let buttonElements = Array.from(document.querySelectorAll('button'));
    for (let currentButton of buttonElements){
        // let isLocked = document.querySelector('input[type=radio]');
        let divElement = currentButton.parentElement
        let isLocked = divElement.querySelector('input[value=unlock]')
        let buttonElement = divElement.querySelector('button')
        
        currentButton.addEventListener('click', e => {
            console.log(divElement.lastChild)
            let hiddenElement = divElement.querySelector('div')
            
            if (isLocked.checked){
                if (buttonElement.textContent === 'Show more'){
                    buttonElement.textContent = 'Hide it'
                    hiddenElement.style.display = 'block'
                }else if(buttonElement.textContent === 'Hide it'){
                    buttonElement.textContent = 'Show more'
                    hiddenElement.style.display = 'none'
                }
            }
        })
    }
}