const ulPhoneBook = document.getElementById('phonebook');
const loadButton = document.getElementById('btnLoad')
const personInput = document.getElementById('person');
const phoneInput = document.getElementById('phone');
const createButton = document.getElementById('btnCreate')
const getUrl = 'http://localhost:3030/jsonstore/phonebook';
const deleteUrl = 'http://localhost:3030/jsonstore/phonebook/'
function attachEvents() {
    loadButton.addEventListener('click', loadBooks)
}

attachEvents();

async function loadBooks(){
    const response = await fetch(getUrl)
    const data = await response.json();
    Object.values(data).map(({person, phone, _id}) => {
        const liElement = document.createElement('li');
        liElement.textContent = `${person}: ${phone}`
        const deleteButton = document.createElement('button');
        deleteButton.textContent ='Delete'
        liElement.appendChild(deleteButton)
        ulPhoneBook.appendChild(liElement)

        deleteButton.addEventListener('click', (e) => deletePhone(e, _id))
    })
}

async function deletePhone(e, id){
    console.log(id)
    e.target.parentNode.remove()
    fetch(deleteUrl + id, {
        method: 'DELETE',
    })
}