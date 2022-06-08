function solve() {
  let generateButtonElement = document.querySelector('body div div button')
  let buyButtonElement = document.querySelector('body div div button:nth-of-type(2)')
  let firstTextAreaElement = document.querySelector('textarea')
  let secondTextAreaElement = document.querySelector('textarea:nth-of-type(2)')
  let rowElement = document.querySelector('tbody')
  //When the ["Generate"] button is clicked, 
  // add a new row to the table for each piece of furniture with image,
  //  name, price, and decoration factor (code example below). 
  generateButtonElement.addEventListener('click', (e) => {
    let tbodyElement = document.querySelector('tbody')
    let elements = JSON.parse(firstTextAreaElement.value);
    for (let el of elements){
    let newRow = document.createElement('tr');
    
    let firstTD = document.createElement('td')
    let newImg = document.createElement('img');
    newImg.src = el.img;
    firstTD.appendChild(newImg);
    
    let newP = document.createElement('p');
    let secondTD = document.createElement('td')
    newP.textContent = el.name
    secondTD.appendChild(newP);

    let newSecondP = document.createElement('p');
    let thirdTD = document.createElement('td')
    newSecondP.textContent = el.price;
    thirdTD.appendChild(newSecondP);

    let newThirdP = document.createElement('p');
    let fourthTD = document.createElement('td')
    newThirdP.textContent = el.decFactor;
    fourthTD.appendChild(newThirdP);

    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    
    let fifthTD = document.createElement('td')
    fifthTD.appendChild(checkBox);

    // newRow.append(firstTD, secondTD, thirdTD, fourthTD, fifthTD)
    newRow.appendChild(firstTD)
    newRow.appendChild(secondTD)
    newRow.appendChild(thirdTD)
    newRow.appendChild(fourthTD)
    newRow.appendChild(fifthTD)


    tbodyElement.appendChild(newRow)
  }
  })

  // When the ["Buy"] button is clicked,
  //  get all checkboxes that are marked and show in 
  //  the result textbox the names of the piece of furniture 
  //  that were checked, separated by a comma and single space 
  //  (", ") in the
  //  following format: "Bought furniture: {furniture1}, {furniture2}…".
  buyButtonElement.addEventListener('click', (e) =>{
    let stringie = 'Bought furniture: ';
    let totalPrice = 0;
    let avgDecorationFactor = 0;
    let counter = 0;
    let markElements = document.querySelectorAll('input[type="checkbox"]')
    let elementsLength = markElements.length;
    for (let el of markElements){
      if (el.checked === true){
        counter++
        elementsLength--

        let theParent = el.parentElement.parentElement
        let name = theParent.querySelector('td:nth-child(2)').textContent
        let price =Number(theParent.querySelector('td:nth-child(3)').textContent)
        let decFactor = Number(theParent.querySelector('td:nth-child(4)').textContent)

        totalPrice += price;
        avgDecorationFactor += decFactor
        if (elementsLength > 1){
          stringie += name + ','
        }else{
          stringie += name
        }
      }
    }
    
    avgDecorationFactor = avgDecorationFactor/counter

    secondTextAreaElement.value = stringie + '\n' + `Total price: ${totalPrice.toFixed(2)}` + '\n' + `Average decoration factor: ${avgDecorationFactor}`
  })
}