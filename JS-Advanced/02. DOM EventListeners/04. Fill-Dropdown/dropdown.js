function addItem() {
    let menuElement = document.getElementById('menu');
    let textElement = document.getElementById('newItemText');
    let valueElement = document.getElementById('newItemValue');
    let addButtonElement = document.querySelector('input[type=button]');
    let optionElement = document.createElement('option');
    optionElement.textContent = textElement.value + valueElement.value
    menuElement.appendChild(optionElement)
    optionElement
    //Clearing input fields
    textElement.value = '';
    valueElement.value = '';
}