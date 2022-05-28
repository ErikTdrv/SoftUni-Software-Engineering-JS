function solve() {
  let inputElement = document.getElementById('input');
  let inputArr = inputElement.value.split('. ').filter(s => s !== '')
  let divOutputElement = document.getElementById('output');
  while (inputArr.length > 0){

    
    let text = inputArr.splice(0, 3).join('. ') + '.';
    
    let newPElement = document.createElement('p');
    newPElement.textContent = text
    divOutputElement.appendChild(newPElement)
  }

}