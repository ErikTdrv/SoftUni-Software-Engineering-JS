import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
const createUrl = 'http://localhost:3030/data/posts'

const addPostTemplate = (onCreateSubmit) => html`
    <section id="create-page" class="auth">
            <form @submit=${onCreateSubmit} id="create">
                <h1 class="title">Create Post</h1>

                <article class="input-group">
                    <label for="title">Post Title</label>
                    <input type="title" name="title" id="title">
                </article>

                <article class="input-group">
                    <label for="description">Description of the needs </label>
                    <input type="text" name="description" id="description">
                </article>

                <article class="input-group">
                    <label for="imageUrl"> Needed materials image </label>
                    <input type="text" name="imageUrl" id="imageUrl">
                </article>

                <article class="input-group">
                    <label for="address">Address of the orphanage</label>
                    <input type="text" name="address" id="address">
                </article>

                <article class="input-group">
                    <label for="phone">Phone number of orphanage employee</label>
                    <input type="text" name="phone" id="phone">
                </article>

                <input type="submit" class="btn submit" value="Create Post">
            </form>
        </section>
    `
export function createBook(ctx) {
    ctx.render(addPostTemplate(onCreateSubmit))

    async function onCreateSubmit(e) {
        e.preventDefault();
        const form = new FormData(e.target);
        const title = form.get('title');
        const description = form.get('description');
        const imageUrl = form.get('imageUrl');
        const address = form.get('address')
        const phone = form.get('phone')
        try {
            if (title == '' || description == '' || imageUrl == '' || address == '' || phone == '') {
                throw new Error('You must fill all the inputs!')
            }

            const response = await fetch(createUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Authorization': JSON.parse(localStorage.getItem('user')).authToken

                },
                body: JSON.stringify({
                    title,
                    description,
                    imageUrl,
                    address,
                    phone
                }
                )
            })

            if (response.ok) {
                page.redirect('/')
            }else {
                throw new Error(data.message)
            }
        } catch (err) {
            alert(err)
        }
    }
}

