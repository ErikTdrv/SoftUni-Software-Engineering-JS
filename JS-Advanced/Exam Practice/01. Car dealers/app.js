window.addEventListener("load", solve);

function solve() {
  let makeElement = document.getElementById('make');
  let modelElement = document.getElementById('model');
  let productionYearElement = document.getElementById('year');
  let fuelTypeElement = document.getElementById('fuel');
  let originalCostElement = document.getElementById('original-cost')
  let sellingPriceElement = document.getElementById('selling-price');
  let publishButton = document.getElementById('publish');
  let tbodyElement = document.getElementById('table-body')
  let ulElement = document.getElementById('cars-list');
  let profitElement = document.getElementById('profit')
  let totalProfit = 0;
  
    publishButton.addEventListener('click', (e) => {
      e.preventDefault()
      if (makeElement.value == '' || modelElement.value == '' || productionYearElement.value == '' || originalCostElement.value == ''|| sellingPriceElement.value == '' || sellingPriceElement.value < originalCostElement.value){
        return
      }
      let newTrElement = document.createElement('tr');
      newTrElement.classList.add('row');
      
      let newTd1 = document.createElement('td')
      newTd1.textContent = makeElement.value
      newTrElement.appendChild(newTd1);
      
      let newTd2 = document.createElement('td')
      newTd2.textContent = modelElement.value;
      newTrElement.appendChild(newTd2);
      
      let newTd3 = document.createElement('td')
      newTd3.textContent = productionYearElement.value;
      newTrElement.appendChild(newTd3);
      
      let newTd4 = document.createElement('td')
      newTd4.textContent = fuelTypeElement.value;
      newTrElement.appendChild(newTd4)
      
      let newTd5 = document.createElement('td')
      newTd5.textContent = originalCostElement.value;
      newTrElement.appendChild(newTd5);
      
      let newTd6 = document.createElement('td')
      newTd6.textContent = sellingPriceElement.value
      newTrElement.appendChild(newTd6)

      let newTd7 = document.createElement('td')
      newTrElement.appendChild(newTd7);

      let editButton = document.createElement('button');
      editButton.textContent = 'Edit'
      editButton.classList = 'action-btn edit'
      newTd7.appendChild(editButton)
      
      let sellButton = document.createElement('button');
      sellButton.textContent = 'Sell'
      sellButton.classList = 'action-btn sell'
      newTd7.appendChild(sellButton)
      
      tbodyElement.appendChild(newTrElement);

      makeElement.value = '';
      modelElement.value = '';
      productionYearElement.value = '';
      fuelTypeElement.value = '';
      originalCostElement.value = '';
      sellingPriceElement.value = '';
      
      editButton.addEventListener('click', (e) => {
        newTrElement.remove()
        makeElement.value = newTd1.textContent;
        modelElement.value = newTd2.textContent;
        productionYearElement.value = newTd3.textContent;
        fuelTypeElement.value = newTd4.textContent;
        originalCostElement.value = newTd5.textContent;
        sellingPriceElement.value = newTd6.textContent;
      })

      sellButton.addEventListener('click', (e) => {
        newTrElement.remove()

        let newLiElement = document.createElement('li');
        newLiElement.classList = 'each-list';
        let newSpan1 = document.createElement('span');
        newSpan1.textContent = newTd1.textContent + " " + newTd2.textContent
        newLiElement.appendChild(newSpan1)

        let newSpan2 = document.createElement('span');
        newSpan2.textContent = newTd3.textContent
        newLiElement.appendChild(newSpan2);

        let newSpan3 = document.createElement('span');
        newSpan3.textContent = Math.abs(Number(newTd5.textContent) - Number(newTd6.textContent));
        newLiElement.appendChild(newSpan3);

        ulElement.appendChild(newLiElement)
        totalProfit += Number(newSpan3.textContent)
        profitElement.textContent = totalProfit.toFixed(2)
      })
    })
    
}
