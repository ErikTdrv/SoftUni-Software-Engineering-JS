function solve(){

    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const birth = document.getElementById("birth");
    const position = document.getElementById("position");
    const salary = document.getElementById("salary");
    const tbody = document.getElementById("tbody");
    const addSalary = document.getElementById("sum");


    document.getElementById("add-worker").addEventListener("click", (e) => {
        if (fname.value !== "" && lname.value !== "" && email.value !== "" && birth.value !== "" && position.value !== "" && salary.value !== "") {
            console.log("tyk")
            addWorker(e, fname.value, lname.value, email.value, birth.value, position.value, salary.value);
            clearInputFileds();
        }
    });

    function addWorker(e, fname, lname, email, birth, position, salary){
        e.preventDefault();
        const trElement = createElement('tr');
        createElement('td', `${fname}`, trElement);
        createElement('td', `${lname}`, trElement);
        createElement('td', `${email}`, trElement);
        createElement('td', `${birth}`, trElement);
        createElement('td', `${position}`, trElement);
        createElement('td', `${salary}`, trElement);

        const td = createElement('td', "", trElement);
        let firedBtn = createElement('button', 'Fired', td);
        firedBtn.setAttribute('class', 'fired');
        let editBtn = createElement('button', 'Edit', td);
        editBtn.setAttribute('class', 'edit');

        tbody.appendChild(trElement)

        const currentSalary = Number(addSalary.textContent);
        addSalary.textContent = (Number(salary) + currentSalary).toFixed(2)

        editBtn.addEventListener('click', (e) => editWorker(e, fname, lname, email, birth, position, salary));

        firedBtn.addEventListener('click', (e) => firedWorker(e, salary))

    }
    function firedWorker(e, salary){
        e.preventDefault();

        e.target.parentNode.parentNode.remove();
        reduceSalary(salary);

    }
    function editWorker(e, _fname, _lname, _email, _birth, _position, _salary){
        e.preventDefault()
        e.target.parentNode.parentNode.remove();
        fname.value = _fname;
        lname.value = _lname;
        email.value = _email;
        birth.value = _birth;
        position.value = _position;
        salary.value = _salary;

        reduceSalary(_salary);

    }
    function reduceSalary(salary){
        const currentSalary = Number(addSalary.textContent);
        addSalary.textContent =Math.abs((Number(salary) - currentSalary)).toFixed(2);
    }
    function clearInputFileds() {
        fname.value = "";
        lname.value = "";
        email.value = "";
        birth.value = "";
        position.value = "";
        salary.value = "";
    }

    function createElement(type, content, parent){
        const element = document.createElement(type);
        element.textContent = content;

        if (parent){
            parent.appendChild(element)
        }
        return element
    }


    
    
}
solve()