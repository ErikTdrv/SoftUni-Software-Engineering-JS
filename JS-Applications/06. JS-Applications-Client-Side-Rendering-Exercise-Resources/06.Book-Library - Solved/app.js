import { addBook, loadBook } from "./booksFunctionality.js";

const tbodyElement = document.querySelector('tbody');
const formElement = document.querySelector('form')
const submitButton = document.querySelector('form button')
const loadButton = document.getElementById('loadBooks');
const editForm = document.getElementById('editForm')
const deleteUrl = 'http://localhost:3030/jsonstore/collections/books/'
const getUrl = 'http://localhost:3030/jsonstore/collections/books';

loadButton.addEventListener('click', loadBook)
formElement.addEventListener('submit', addBook)

