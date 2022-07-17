const textArea = document.getElementById('messages')
const nameInput = document.querySelector('input');
const messageInput = document.querySelectorAll('input')[1]
const submitButton = document.getElementById('submit');
const refreshButton = document.getElementById('refresh');
const url = 'http://localhost:3030/jsonstore/messenger'
function attachEvents() {

    refreshButton.addEventListener('click', refreshPage)
    submitButton.addEventListener('click', submitMessage)
}

attachEvents();
async function refreshPage() {
    textArea.value = ''
    const response = await fetch(url)
    const data = await response.json()
    
    Object.values(data).map(({author, content}) => {
        let msg = `${author}: ${content}`
        textArea.value += msg
        textArea.value += '\n'
    })
}

async function submitMessage(){
    const response = await fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            author: nameInput.value,
            content: messageInput.value
        })
    })
}
/*
"{author}: {message}"
*/