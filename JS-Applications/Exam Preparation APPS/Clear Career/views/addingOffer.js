import {html , render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const addingOfferUrl = 'http://localhost:3030/data/offers'

const addOfferTemplate = (onCreateSubmit) => html `
<section id="create">
          <div class="form">
            <h2>Create Offer</h2>
            <form @submit=${onCreateSubmit} class="create-form">
              <input
                type="text"
                name="title"
                id="job-title"
                placeholder="Title"
              />
              <input
                type="text"
                name="imageUrl"
                id="job-logo"
                placeholder="Company logo url"
              />
              <input
                type="text"
                name="category"
                id="job-category"
                placeholder="Category"
              />
              <textarea
                id="job-description"
                name="description"
                placeholder="Description"
                rows="4"
                cols="50"
              ></textarea>
              <textarea
                id="job-requirements"
                name="requirements"
                placeholder="Requirements"
                rows="4"
                cols="50"
              ></textarea>
              <input
                type="text"
                name="salary"
                id="job-salary"
                placeholder="Salary"
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>
`

export function addOffer(ctx) {
    ctx.render(addOfferTemplate(onCreateSubmit))

    async function onCreateSubmit(e) {
        e.preventDefault();
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

            const response = await fetch(addingOfferUrl, {
                method: 'POST',
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
                  })
            })

            if (response.ok) {
                page.redirect('/dashboard')
            }else {
                throw new Error(data.message)
            }
        } catch (err) {
            alert(err)
        }
    }
}
