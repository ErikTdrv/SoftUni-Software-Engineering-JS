
const tbodyElement = document.querySelector('tbody');
const formElement = document.querySelector('form')
const submitButton = document.querySelector('form button')
const loadButton = document.getElementById('loadBooks');
const editForm = document.getElementById('editForm')
const deleteUrl = 'http://localhost:3030/jsonstore/collections/books/'
const getUrl = 'http://localhost:3030/jsonstore/collections/books';

loadButton.addEventListener('click', loadBook)
formElement.addEventListener('submit', (e) => addBook(e))


async function loadBook() {
    tbodyElement.innerHTML = ''
    const response = await fetch(getUrl);
    const data = await response.json()

    Object.entries(data).map(([id, { author, title }]) => {
        const newTr = document.createElement('tr');

        const td1 = document.createElement('td');
        td1.textContent = title;

        const td2 = document.createElement('td');
        td2.textContent = author

        const td3 = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        td3.append(editButton, deleteButton)

        newTr.append(td1, td2, td3)
        tbodyElement.appendChild(newTr)

        deleteButton.addEventListener('click', (e) => deleteElement(e, id))
        editButton.addEventListener('click', (e) => editElement(e, id, td1.textContent, td2.textContent))
    })


}

async function addBook(e) {
    e.preventDefault()
    const form = new FormData(formElement);
    const title = form.get('title');
    const author = form.get('author');
    formElement.reset()
    try {
        if (title == '' || author == '') {
            throw Error('You must fill the inputs!')
        }
        const response = await fetch(getUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, author })
        })
    } catch (err) {
        alert(err)
    }
}

async function deleteElement(e, id) {
    await fetch(deleteUrl + id, {
        method: 'DELETE'
    })
    e.target.parentNode.parentNode.remove()
}

function editElement(e, id, titleText, authorText) {
    editForm.querySelector('input').value = titleText
    editForm.querySelectorAll('input')[1].value = authorText


    e.target.parentNode.parentNode.remove()
    editForm.style.display = 'block';
    formElement.style.display = 'none';

    editForm.addEventListener('submit', async (e) => {
        e.preventDefault()
        const form = new FormData(editForm)
        const author = form.get('author');
        const title = form.get('title')
        await fetch(deleteUrl + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ author, title })
        })
        editForm.reset()
        setTimeout(() => {
            editForm.style.display = 'none';
            formElement.style.display = 'block';
        }, 2000)
    })
}
    // <!-- <tr>
    //             <td>Harry Poter</td>
    //             <td>J. K. Rowling</td>
    //             <td>
    //                 <button>Edit</button>
    //                 <button>Delete</button>
    //             </td>
    //         </tr>