import {html , nothing, render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const detailsUrl = 'http://localhost:3030/data/offers/'

const detailsTemplate = (offer, onApplyClick, applyCount, clicked) => html `
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${offer.imageUrl} alt="example1" />
            <p id="details-title">${offer.title}</p>
            <p id="details-category">
              Category: <span id="categories">${offer.category}</span>
            </p>
            <p id="details-salary">
              Salary: <span id="salary-number">${offer.salary}</span>
            </p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Description</h4>
                <span
                  >${offer.description}</span
                >
              </div>
              <div id="details-requirements">
                <h4>Requirements</h4>
                <span
                  >${offer.requirements}</span
                >
              </div>
            </div>
            <p>Applications: <strong id="applications">${applyCount}</strong></p>

            <div id="action-buttons">
                ${JSON.parse(localStorage.getItem('user')).id == offer._ownerId ? html `<a href="/edit/${offer._id}" id="edit-btn">Edit</a>
                <a href="/delete/${offer._id}" id="delete-btn">Delete</a>`: nothing}
              

              <!--Bonus - Only for logged-in users ( not authors )-->
              ${localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).id != offer._ownerId && clicked == false ? html `<a @click=${onApplyClick} href="" id="apply-btn">Apply</a>` : nothing}
              
            </div>
          </div>
        </section>
`
const editTemplate = (offer, onEditSubmit) => html `
<section id="edit">
          <div class="form">
            <h2>Edit Offer</h2>
            <form @submit=${onEditSubmit} class="edit-form">
              <input
                type="text"
                name="title"
                id="job-title"
                placeholder="Title"
                value= ${offer.title}
              />
              <input
                type="text"
                name="imageUrl"
                id="job-logo"
                placeholder="Company logo url"
                value= ${offer.imageUrl}
              />
              <input
                type="text"
                name="category"
                id="job-category"
                placeholder="Category"
                value= ${offer.category}
              />
              <textarea
                id="job-description"
                name="description"
                placeholder="Description"
                rows="4"
                cols="50"
              >${offer.description}</textarea>
              <textarea
                id="job-requirements"
                name="requirements"
                placeholder="Requirements"
                rows="4"
                cols="50"

              >${offer.requirements}</textarea>
              <input
                type="text"
                name="salary"
                id="job-salary"
                placeholder="Salary"
                value= ${offer.salary}
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>
`

export async function offerDetails(ctx){
    const id = ctx.params.id

    //Checking for apply count
    const applyNumUrl = `http://localhost:3030/data/applications?where=offerId%3D%22${id}%22&distinct=_ownerId&count`
    const applyResponse = await fetch(applyNumUrl, {
        headers: {
            'X-Authorization': JSON.parse(localStorage.getItem('user')).authToken
        }
    })
    const applyNum = await applyResponse.json()

    //Getting details information
    const response = await fetch(detailsUrl + id);
    const data = await response.json()
    
    //Checking if user has already clicked 
    const checkApplyUrl = `http://localhost:3030/data/applications?where=offerId%3D%22${id}%22%20and%20_ownerId%3D%22${JSON.parse(localStorage.getItem('user')).id}%22&count`
    const checkResponse = await fetch(checkApplyUrl, {
        headers: {
            'X-Authorization': JSON.parse(localStorage.getItem('user')).authToken
        }
    })
    const checkData = await checkResponse.json()
    const clicked = checkData == 1 ? true : false

    //Rendering details template
    ctx.render(detailsTemplate(data, onApplyClick, applyNum, clicked))

    async function onApplyClick(e){
        e.preventDefault()
        const offerId = id
    const sendApplyUrl = `http://localhost:3030/data/applications`
    const applicationResponse = await fetch(sendApplyUrl, {
        method: 'POST',
        headers: {
            'X-Authorization': JSON.parse(localStorage.getItem('user')).authToken,
            'Content-Type': 'application/json',
        }, 
        body: JSON.stringify({offerId})
    })
    console.log('clicked')
    ctx.page.redirect(`/details/${id}`)
    }
}


export async function editList(ctx){
    const id = ctx.params.id
    const request = await fetch(detailsUrl + id)
    const data = await request.json();
    ctx.render(editTemplate(data, onEditSubmit))

    async function onEditSubmit(e){
        e.preventDefault()

        const form = new FormData(e.target);
        const title = form.get('title');
        const imageUrl = form.get('imageUrl');
        const category = form.get('category')
        const description = form.get('description');
        const requirements = form.get('requirements')
        const salary = form.get('salary')
        try {
            if (title == '' || description == '' || imageUrl == '' || category == '' || requirements == '' || salary == '') {
                throw new Error('You must fill all the inputs!')
            }

            const response = await fetch(detailsUrl + id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': JSON.parse(localStorage.getItem('user')).authToken

                },
                body: JSON.stringify({
                    title,
                    imageUrl, 
                    category, 
                    description, 
                    requirements, 
                    salary
                  }                   
                )
            })
            if (response.ok) {
                page.redirect(`/details/${id}`)
            }else {
                throw new Error(data.message)
            }
        }catch(err){
            alert(err)
        }
    }
}

export async function onDeleteSubmit(ctx){
    try{
        const id = ctx.params.id
        let doYouWant = '';
        confirm('Do you really want to delete the game?') ? doYouWant = true
         : doYouWant = false;


        if(doYouWant){
            const response = await fetch(detailsUrl + id, {
                method: 'DELETE',
                headers: {
                    'X-Authorization': JSON.parse(localStorage.getItem('user')).authToken
                }
            })
            const data = await response.json()
            if(response.ok){
                ctx.page.redirect('/dashboard')

            }else {
                throw Error(data.message)
            }
        }

    }catch(err){
        alert(err)
    }
}