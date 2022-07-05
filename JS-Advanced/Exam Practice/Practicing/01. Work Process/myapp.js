function solve() {
    let firstNameElement = document.getElementById('fname');
    let lastNameElement = document.getElementById('lname');
    let emailElement = document.getElementById('email');
    let birthElement = document.getElementById('birth');
    let positionElement = document.getElementById('position');
    let salaryElement = document.getElementById('salary');
    let buttonElement = document.getElementById('add-worker');
    let tbodyElement = document.getElementById('tbody');
    let spanSalaryElement = document.getElementById('sum');
    
    buttonElement.addEventListener('click', (e) => {
        e.preventDefault()
        // Checking if inputs are empty with a boolean value
        let areEmpty = false;
        if (firstNameElement.value == '' || lastNameElement.value == ''
        || emailElement.value == '' || birthElement.value == '' || 
        positionElement.value == '' || salaryElement.value == ''){
            areEmpty = true;
            
        }
        
        //Adding the elements to the list
        if (!areEmpty){
            let newTrElement = document.createElement('tr');
            
            let newTdElement1 = document.createElement('td');
            newTdElement1.textContent = firstNameElement.value;
            newTrElement.appendChild(newTdElement1);
            let newTdElement2 = document.createElement('td');
            newTdElement2.textContent = lastNameElement.value;
            newTrElement.appendChild(newTdElement2);
            let newTdElement3 = document.createElement('td');
            newTdElement3.textContent = emailElement.value;
            newTrElement.appendChild(newTdElement3);
            let newTdElement4 = document.createElement('td');
            newTdElement4.textContent = birthElement.value;
            newTrElement.appendChild(newTdElement4);
            let newTdElement5 = document.createElement('td');
            newTdElement5.textContent = positionElement.value;
            newTrElement.appendChild(newTdElement5);
            let newTdElement6 = document.createElement('td');
            newTdElement6.textContent = salaryElement.value;
            newTrElement.appendChild(newTdElement6);
            let newTdElement7 = document.createElement('td');
            let newButtonElement = document.createElement('button');
            newButtonElement.textContent = 'Fired'
            newButtonElement.classList.add('fired')
            
            newButtonElement.addEventListener('click', (e) => {
                let myDocument = e.target.parentElement.parentElement;
                let currentAmountOfMoney = salaryElement.value
                
                spanSalaryElement.textContent = (Number(spanSalaryElement.textContent) - Number(newTdElement6.textContent)).toFixed(2)
                myDocument.remove()
            })
                newTdElement7.appendChild(newButtonElement);

            let newButtonElement2 = document.createElement('button');
            newButtonElement2.classList.add('edit')
            newButtonElement2.textContent = 'Edit';
            newButtonElement2.addEventListener('click', (e) => {
                let myDocument = e.target.parentElement.parentElement;
                
                firstNameElement.value = newTdElement1.textContent
                lastNameElement.value = newTdElement2.textContent
                emailElement.value = newTdElement3.textContent
                birthElement.value = newTdElement4.textContent
                positionElement.value = newTdElement5.textContent
                salaryElement.value = newTdElement6.textContent
                salary = Number(salaryElement.value);
                spanSalaryElement.textContent = (spanSalaryElement.textContent - salary).toFixed(2);
                myDocument.remove()
            })
            newTdElement7.appendChild(newButtonElement2);
            newTrElement.appendChild(newTdElement7);
            
            tbodyElement.appendChild(newTrElement)
            
            //Adjusting salary span element 
            spanSalaryElement.textContent = (Number(spanSalaryElement.textContent) + Number(salaryElement.value)).toFixed(2)
            
            
            
            //Removing input values
            firstNameElement.value = '';
            lastNameElement.value = '';
            emailElement.value = '';
            birthElement.value = '';
            positionElement.value = '';
            salaryElement.value = '';

            



            
        }
        
    })
    
    
}
solve()