const tbodyElement = document.querySelector('tbody');
const formElement = document.getElementById('form')
const submitButton = document.getElementById('submit')
const url = 'http://localhost:3030/jsonstore/collections/students'

formElement.addEventListener('submit', (e) => addStudent(e))
window.addEventListener('load', (e) => loadStudents(e))


async function addStudent(e){
    e.preventDefault()
    const form = new FormData(formElement)
    const firstName = form.get('firstName');
    const lastName = form.get('lastName');
    const facultyNumber = form.get('facultyNumber');
    const grade = form.get('grade');
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            firstName,
            lastName, 
            facultyNumber,
            grade
        })
    })
    loadStudents(e)
}
async function loadStudents(e){
    e.preventDefault()
    tbodyElement.innerHTML = ''
    const response = await fetch(url)
    const data = await response.json()
  
    Object.values(data).map(({firstName, lastName, facultyNumber, grade}) => {
        const newTrElement = document.createElement('tr');

        const td1 = document.createElement('td');
        td1.textContent = firstName
        newTrElement.appendChild(td1)

        const td2 = document.createElement('td');
        td2.textContent = lastName
        newTrElement.appendChild(td2)

        const td3 = document.createElement('td');
        td3.textContent = facultyNumber
        newTrElement.appendChild(td3)

        const td4 = document.createElement('td');
        td4.textContent = grade
        newTrElement.appendChild(td4)

        tbodyElement.appendChild(newTrElement)

    })
}