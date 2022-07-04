window.addEventListener('load', solution);


function solution() {
  let fullNameElement = document.getElementById('fname');
  let emailElement = document.getElementById('email');
  let phoneElement = document.getElementById('phone');
  let adressElement = document.getElementById('address');
  let codeElement = document.getElementById('code');
  let submitButtonElement = document.getElementById('submitBTN')
  let editButtonElement = document.getElementById('editBTN');
  let continueButtonElement = document.getElementById('continueBTN');
  let previewElement = document.getElementById('infoPreview');
  let divBlock = document.getElementById('block')

  submitButtonElement.addEventListener('click', (e) => {
    if (emailElement.value != '' && fullNameElement.value != ''){
      e.preventDefault();
      let fname = fullNameElement.value
      createElements('li', `Full Name: ${fullNameElement.value}`, previewElement);
      let email = emailElement.value
      createElements('li', `Email: ${emailElement.value}`, previewElement);
      let pnumber = phoneElement.value
      createElements('li', `Phone Number: ${phoneElement.value}`, previewElement);
      let address = adressElement.value
      createElements('li', `Address: ${adressElement.value}`, previewElement);
      let pcode = codeElement.value
      createElements('li', `Postal Code: ${codeElement.value}`, previewElement);
      clearInputs()

      editButtonElement.addEventListener('click', (e) => {
        fullNameElement.value = fname
        emailElement.value = email;
        phoneElement.value = pnumber;
        adressElement.value = address;
        codeElement.value = pcode;
        
        editButtonElement.disabled = true;
        continueButtonElement.disabled = true;
        submitButtonElement.disabled = false;
        for (let el of Array.from(previewElement.children)){
          previewElement.removeChild(el)
        }
      })

      continueButtonElement.addEventListener('click', (e) => {
        for (let el of Array.from(divBlock.children)){
          divBlock.removeChild(el)
        }
        createElements('h3', 'Thank you for your reservation!', divBlock)
      })
    }
  })

  function createElements(elToCreate, textElContent, appendToS) {
    let newElement = document.createElement(elToCreate);
  
    if (appendToS) {
      appendToS.appendChild(newElement);
    }
    if (textElContent !== "") {
        newElement.textContent = textElContent;
    }
    
    return newElement
  }
  
  function clearInputs(){
    fullNameElement.value = '';
    emailElement.value = '';
    phoneElement.value = '';
    adressElement.value = '';
    codeElement.value = '';
    submitButtonElement.disabled = true;
    editButtonElement.disabled = false;
    continueButtonElement.disabled = false;
  
  }
}
