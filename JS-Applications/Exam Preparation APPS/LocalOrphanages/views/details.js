import {html, nothing, render} from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

const detailsUrl = `http://localhost:3030/data/posts/`
   
const detailsTemplate = (post, donationData, donated) => html `
    <section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src=${post.imageUrl} alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${post.title}</h2>
                <p class="post-description">Description: ${post.description}</p>
                <p class="post-address">Address: ${post.address}</p>
                <p class="post-number">Phone number: ${post.phone}</p>
                <p class="donate-Item">Donate Materials: ${donationData}</p>

                
                <div class="btns">
                ${localStorage.getItem('user') && post._ownerId == JSON.parse(localStorage.getItem('user')).id ? html `<a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
                <a href="/delete/${post._id}" class="delete-btn btn">Delete</a>`:nothing}
                    

                    ${localStorage.getItem('user') && post._ownerId != JSON.parse(localStorage.getItem('user')).id && !donated? html `<a @click=${(e) => onDonate(e, post._id)} href="#" class="donate-btn btn">Donate</a>`:nothing}
                    
                </div>

            </div>
        </div>
    </div>
</section>
`


const editTemplate = (post, onEditSubmit) => html `<section id="edit-page" class="auth">
<form @submit=${onEditSubmit} id="edit">
    <h1 class="title">Edit Post</h1>

    <article class="input-group">
        <label for="title">Post Title</label>
        <input type="title" name="title" id="title" value=${post.title}>
    </article>

    <article class="input-group">
        <label for="description">Description of the needs </label>
        <input type="text" name="description" id="description" value=${post.description}>
    </article>

    <article class="input-group">
        <label for="imageUrl"> Needed materials image </label>
        <input type="text" name="imageUrl" id="imageUrl" value=${post.imageUrl}>
    </article>

    <article class="input-group">
        <label for="address">Address of the orphanage</label>
        <input type="text" name="address" id="address" value=${post.address}>
    </article>

    <article class="input-group">
        <label for="phone">Phone number of orphanage employee</label>
        <input type="text" name="phone" id="phone" value=${post.phone}>
    </article>

    <input type="submit" class="btn submit" value="Edit Post">
</form>
</section>`


export async function postDetails(ctx){
    const id = ctx.params.id
    const response = await fetch(detailsUrl + id);
    const data = await response.json()

    const getDonationsUrl = `http://localhost:3030/data/donations?where=postId%3D%22${id}%22&distinct=_ownerId&count`
    const donationResponse = await fetch(getDonationsUrl)
    const donationData = await donationResponse.json();
    const checkForDonationUrl = `http://localhost:3030/data/donations?where=postId%3D%22${id}%22%20and%20_ownerId%3D%22${JSON.parse(localStorage.getItem('user')).id}%22&count`
    const checkResponse = await fetch(checkForDonationUrl);
    let donated;
    const checkData = await checkResponse.json()
    checkData == 0 ? donated = false : donated = true;
    ctx.render(detailsTemplate(data, donationData, donated))
}

async function onDonate(e, postId){
    e.preventDefault()
    const donationsUrl = `http://localhost:3030/data/donations`
    const response = await fetch(donationsUrl, {
        'method': 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': JSON.parse(localStorage.getItem('user')).authToken
        },
        body: JSON.stringify({postId})
    })

    if(response.ok){
        page.redirect(`/details/${postId}`)
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
        const description = form.get('description');
        const imageUrl = form.get('imageUrl');
        const address = form.get('address')
        const phone = form.get('phone')
        try {
            if (title == '' || description == '' || imageUrl == '' || address == '' || phone == '') {
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
                    description,
                    imageUrl,
                    address,
                    phone
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
        const response = await fetch(`http://localhost:3030/data/posts/` + id, {
            method: 'DELETE',
            headers: {
                'X-Authorization': JSON.parse(localStorage.getItem('user')).authToken
            }
        })
        const data = await response.json()
        if(response.ok){
            setTimeout(() =>ctx.page.redirect('/'), 2000)
            // ctx.page.redirect('/')
    
        }else {
            throw new Error(data.message)
        }

    }catch(err){
        alert(err)
    }
}