function validate() {
    let inputElement = document.getElementById('email');
    let regExp = new RegExp('[a-z]+@[a-z]+\.[a-z]+');

    inputElement.addEventListener('change', () => {
        if (regExp.test(inputElement.value)){
            inputElement.classList.remove('error')
        }else {
            inputElement.classList.add('error')
        }
    })
}