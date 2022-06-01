function subtract() {
    let firstElement = document.getElementById('firstNumber').value;
    let secondElement = document.getElementById('secondNumber').value;
    let divElement = document.getElementById('result')
    let result = Number(firstElement) - Number(secondElement);
    divElement.textContent = result;

}