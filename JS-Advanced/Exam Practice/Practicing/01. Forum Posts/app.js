window.addEventListener("load", solve);

function solve() {
  let titleElement = document.getElementById('post-title')
  let categoryElement = document.getElementById('post-category')
  let contentElement = document.getElementById('post-content')
  let publishElement = document.getElementById('publish-btn');
  let reviewList = document.getElementById('review-list')
  let publishedList = document.getElementById('published-list')
  let clearBtn = document.getElementById('clear-btn')

  publishElement.addEventListener('click', (e) => {
    e.preventDefault()
    if (titleElement.value != '' && categoryElement.value != '' && contentElement.value != ''){
      publish(e, titleElement.value, categoryElement.value, contentElement.value)
    }
  })

  function publish(e){
    let title = titleElement.value;
    let category = categoryElement.value;
    let content = contentElement.value;
    let newLiElement = document.createElement('li');
    newLiElement.classList.add('rpost');
    reviewList.appendChild(newLiElement)

    let newArticle = document.createElement('article');
    newLiElement.appendChild(newArticle);

    let newH4Element = document.createElement('h4');
    newH4Element.textContent = title;
    newArticle.appendChild(newH4Element)


    let newPelement = document.createElement('p')
    newPelement.textContent = `Category: ${category}`
    newArticle.appendChild(newPelement)

    let newPContent = document.createElement('p');
    newPContent.textContent = `Content: ${content}`
    newArticle.appendChild(newPContent)

    let newEditButton = document.createElement('button')
    newEditButton.classList = 'action-btn edit'
    newEditButton.textContent = 'Edit'
    newLiElement.appendChild(newEditButton)

    let newApproveButton = document.createElement('button')
    newApproveButton.classList = 'action-btn approve'
    newApproveButton.textContent = 'Approve'
    newLiElement.appendChild(newApproveButton)

    titleElement.value = '';
    categoryElement.value = '';
    contentElement.value = '';

    newEditButton.addEventListener('click', (e) => {
      newLiElement.remove()
      titleElement.value = title;
      categoryElement.value = category;
      contentElement.value = content
    })

    newApproveButton.addEventListener('click', () => {
      newApproveButton.remove()
      newEditButton.remove()
      newLiElement.remove()
      publishedList.appendChild(newLiElement)
    })

  }

  clearBtn.addEventListener('click', (e) => {
    publishedList.innerHTML = ""
  })
}
