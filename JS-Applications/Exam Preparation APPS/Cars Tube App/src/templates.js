import {html, nothing, render} from '../node_modules/lit-html/lit-html.js';
import { checkUser } from './checkUser.js';
import { checkIfOwe, getUser } from './util.js';

const homeTemplate = html `
<section id="main">
            <div id="welcome-container">
                <h1>Welcome To Car Tube</h1>
                <img class="hero" src="/images/car-png.webp" alt="carIntro">
                <h2>To see all the listings click the link below:</h2>
                <div>
                    <a href="/all" class="button">Listings</a>
                </div>
            </div>
        </section>
`
const loginTemplate = (onLoginSubmit) => html `
<section id="login">
            <div class="container">
                <form @submit=${onLoginSubmit} id="login-form" action="#" method="post">
                    <h1>Login</h1>
                    <p>Please enter your credentials.</p>
                    <hr>

                    <p>Username</p>
                    <input placeholder="Enter Username" name="username" type="text">

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password">
                    <input type="submit" class="registerbtn" value="Login">
                </form>
                <div class="signin">
                    <p>Dont have an account?
                        <a href="/register">Sign up</a>.
                    </p>
                </div>
            </div>
        </section>
`

const registerTemplate = (onRegisterSubmit) => html `
<section id="register">
            <div class="container">
                <form @submit=${onRegisterSubmit} id="register-form">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr>

                    <p>Username</p>
                    <input type="text" placeholder="Enter Username" name="username" required>

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password" required>

                    <p>Repeat Password</p>
                    <input type="password" placeholder="Repeat Password" name="repeatPass" required>
                    <hr>

                    <input type="submit" class="registerbtn" value="Register">
                </form>
                <div class="signin">
                    <p>Already have an account?
                        <a href="/login">Sign in</a>.
                    </p>
                </div>
            </div>
        </section>
`

const allCarsTemplate = (cars) => html `
<section id="car-listings">
            <h1>Car Listings</h1>
            <div class="listings">
                ${cars.length == 0 ? html `<p class="no-cars">No cars in database.</p>` : cars.map((car) => html `
                <div class="listing">
                    <div class="preview">
                        <img src=${car.imageUrl}>
                    </div>
                    <h2>${car.brand} ${car.model}</h2>
                    <div class="info">
                        <div class="data-info">
                            <h3>Year: ${car.year}</h3>
                            <h3>Price: ${car.price} $</h3>
                        </div>
                        <div class="data-buttons">
                            <a href="/details/${car._id}" class="button-carDetails">Details</a>
                        </div>
                    </div>
                </div>
                `)}
                

            </div>
        </section>
`

const createCarTemplate = (onCreateSubmit) => html `
<section id="create-listing">
            <div class="container">
                <form @submit=${onCreateSubmit} id="create-form">
                    <h1>Create Car Listing</h1>
                    <p>Please fill in this form to create an listing.</p>
                    <hr>

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand">

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model">

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description">

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year">

                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl">

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price">

                    <hr>
                    <input type="submit" class="registerbtn" value="Create Listing">
                </form>
            </div>
        </section>
`

const editCarTemplate = (car, onSubmitEdit) => html `<section id="edit-listing">
<div class="container">

    <form @submit=${onSubmitEdit} id="edit-form">
        <h1>Edit Car Listing</h1>
        <p>Please fill in this form to edit an listing.</p>
        <hr>

        <p>Car Brand</p>
        <input type="text" placeholder="Enter Car Brand" name="brand" value=${car.brand}>

        <p>Car Model</p>
        <input type="text" placeholder="Enter Car Model" name="model" value=${car.model}>

        <p>Description</p>
        <input type="text" placeholder="Enter Description" name="description" value=${car.description}>

        <p>Car Year</p>
        <input type="number" placeholder="Enter Car Year" name="year" value=${car.year}>

        <p>Car Image</p>
        <input type="text" placeholder="Enter Car Image" name="imageUrl" value=${car.imageUrl}>

        <p>Car Price</p>
        <input type="number" placeholder="Enter Car Price" name="price" value=${car.price}>

        <hr>
        <input type="submit" class="registerbtn" value="Edit Listing">
    </form>
</div>
</section>`

const detailsTemplate = (car) => html `<section id="listing-details">
<h1>Details</h1>
<div class="details-info">
    <img src=${car.imageUrl}>
    <hr>
    <ul class="listing-props">
        <li><span>Brand:</span>${car.brand}</li>
        <li><span>Model:</span>${car.model}</li>
        <li><span>Year:</span>${car.year}</li>
        <li><span>Price:</span>${car.price} $</li>
    </ul>

    <p class="description-para">${car.description}</p>
    ${checkIfOwe(car._ownerId) == true ? html `<div class="listings-buttons">
    <a href="/edit/${car._id}" class="button-list">Edit</a>
    <a href="/delete/${car._id}" class="button-list">Delete</a>
</div>` : nothing}
    
</div>
</section>`

const myCarsTemplate = (cars) => html `<section id="my-listings">
<h1>My car listings</h1>
<div class="listings">
    ${cars.length == 0 ? html `<p class="no-cars"> You haven't listed any cars yet.</p>` : cars.map((car) => html `
    <div class="listing">
        <div class="preview">
            <img src="${car.imageUrl}">
        </div>
        <h2>${car.brand} ${car.model}</h2>
        <div class="info">
            <div class="data-info">
                <h3>Year: ${car.year}</h3>
                <h3>Price: ${car.price} $</h3>
            </div>
            <div class="data-buttons">
                <a href="/details/${car._id}" class="button-carDetails">Details</a>
            </div>
        </div>
    </div>
    `)}

    
</div>
</section>`

const searchPageTemplate = () => html `<section id="search-cars">
<h1>Filter by year</h1>

<div class="container">
    <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
    <button class="button-list">Search</button>
</div>

<h2>Results:</h2>
<div class="listings">

    <!-- Display all records -->
    <div class="listing">
        <div class="preview">
            <img src="/images/audia3.jpg">
        </div>
        <h2>Audi A3</h2>
        <div class="info">
            <div class="data-info">
                <h3>Year: 2018</h3>
                <h3>Price: 25000 $</h3>
            </div>
            <div class="data-buttons">
                <a href="#" class="button-carDetails">Details</a>
            </div>
        </div>
    </div>

    <!-- Display if there are no matches -->
    <p class="no-cars"> No results.</p>
</div>
</section>`


const url = {
    'login': 'http://localhost:3030/users/login',
    'register':'http://localhost:3030/users/register',
    'getCars': 'http://localhost:3030/data/cars?sortBy=_createdOn%20desc',
    'createCar': 'http://localhost:3030/data/cars',
    'carDetail': `http://localhost:3030/data/cars/`,
    'logout': `http://localhost:3030/users/logout`
}

export {
    homeTemplate, registerTemplate, allCarsTemplate,createCarTemplate,editCarTemplate,detailsTemplate,myCarsTemplate,searchPageTemplate, url, loginTemplate
}