window.addEventListener("load", solve);

function solve() {
    let productTypeElement = document.getElementById('type-product');
    let descriptionElement = document.getElementById('description');
    let clientNameElement = document.getElementById('client-name');
    let clientPhoneElement = document.getElementById('client-phone');
    let buttonElement = document.querySelector('button');
    let receivedOrdersElement = document.getElementById('received-orders')
    let buttonElement2 = document.querySelectorAll('button')[1];
    let completedOrdersElement = document.getElementById('completed-orders')
    buttonElement.addEventListener('click', (e) => {
        if (descriptionElement.value != '' && clientNameElement.value != '' && clientPhoneElement.value != ''){
            e.preventDefault()
            gettingInformation(e, productTypeElement.value, descriptionElement.value, clientNameElement.value , clientPhoneElement.value)
        }else {
            return
        }
    })
    
    function gettingInformation(e, productType, description, clientName, clientPhone){
    
        let newDivContainer = document.createElement('div');
        newDivContainer.classList.add('container');
        
        let newH2Element = document.createElement('h2');
        newH2Element.textContent = `Product type for repair: ${productType}`
        newDivContainer.appendChild(newH2Element);

        let newH3Element = document.createElement('h3');
        newH3Element.textContent = `Client information: ${clientName}, ${clientPhone}`
        newDivContainer.appendChild(newH3Element);

        let newH4Element = document.createElement('h4');
        newH4Element.textContent = `Description of the problem: ${description}`
        newDivContainer.appendChild(newH4Element);

        let newStartButton = document.createElement('button');
        newStartButton.classList.add('start-btn');
        newDivContainer.appendChild(newStartButton);
        newStartButton.textContent = 'Start repair'
        

        let newFinishButton = document.createElement('button');
        newFinishButton.classList.add('finish-btn');
        newFinishButton.disabled = true;
        newFinishButton.textContent = 'Finish repair'
        newDivContainer.appendChild(newFinishButton);

        receivedOrdersElement.appendChild(newDivContainer);
        clearInputs()

        newStartButton.addEventListener('click', (e) => {
            newStartButton.disabled = true;
            newFinishButton.disabled = false;
            newFinishButton.addEventListener('click', (event) => {
                console.log('ok')
                let newCompletedDiv = document.createElement('div');
                newCompletedDiv.classList.add('container')
                
                let newH2Element2 = document.createElement('h2');
                newH2Element2.textContent = newH2Element.textContent
                newCompletedDiv.appendChild(newH2Element2);

                let newH3Element2 = document.createElement('h3');
                newH3Element2.textContent = newH3Element.textContent
                newCompletedDiv.appendChild(newH3Element2);

                let newH4Element2 = document.createElement('h4');
                newH4Element2.textContent = newH4Element.textContent;
                newCompletedDiv.appendChild(newH4Element2);

                completedOrdersElement.appendChild(newCompletedDiv);
                
                receivedOrdersElement.removeChild(newDivContainer)
                buttonElement2.addEventListener('click', (e) => {
                    newCompletedDiv.remove()
                })
            })
        })
    }

    function clearInputs(){
        descriptionElement.value = "";
        clientNameElement.value = '';
        clientPhoneElement.value = '';
    }

    // buttonElement2.addEventListener('click', (e) => {
    //     completedOrdersElement.innerHTML = "<h2>Completed orders<h2><img src='./style/img/completed-order.png'><button class='clear-btn'>Clear</button>"
    //     // let length = Array.from(completedOrdersElement.children).length;
    //     // console.log(length)
    //     // for (let i = 0; i < length; i++){
    //     //     if (i > 2){
    //     //         let el = Array.from(completedOrdersElement.children)[i]
    //     //         console.log(el)
    //     //         el.remove()
    //     //     }
    //     // }
    // })
}
