function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/collections/books/';
    const loadButton = document.getElementById('loadBooks');
    const tBody = document.querySelector('body > table > tbody');
    const submitButton = document.querySelector('#form > button')
    const bookTitle = document.querySelector('#form > input[type=text]:nth-child(3)');
    const bookAuthor = document.querySelector('#form > input[type=text]:nth-child(5)');
    
    submitButton.addEventListener('click', addNewBook);
    loadButton.addEventListener('click', loadAllBooks);

    function loadAllBooks() {
        fetch(BASE_URL)
        .then((response) => response.json())
        .then((data) => {
            tBody.innerHTML = ''
            for (const key in data) {
				let tr = document.createElement('tr');
				let tdAuthor = document.createElement('td');
				tdAuthor.textContent = data[key].author;
				let tdTitle = document.createElement('td');
				tdTitle.textContent = data[key].title;
				let tdButtons = document.createElement('td');
                let editButton = document.createElement('button');
                editButton.addEventListener('click', editBook);
                editButton.textContent = 'Edit';
                editButton.value = key;
                let deleteButton = document.createElement('button')
                deleteButton.addEventListener('click', deleteBook);
                deleteButton.textContent = 'Delete';
                deleteButton.value = key;
                tdButtons.appendChild(editButton);
                tdButtons.appendChild(deleteButton);
				tr.appendChild(tdTitle);
				tr.appendChild(tdAuthor);
                tr.appendChild(tdButtons);
				tBody.appendChild(tr);
            }
        })
    }

    function editBook(event) {

        const id = event.currentTarget.value;
        const headingForm = document.querySelector('#form > h3')
        headingForm.textContent = 'Edit FORM';
        const currentBookTitle = event.currentTarget.parentNode.parentNode.querySelector('td:nth-child(1)').textContent;
        bookTitle.value = currentBookTitle;
        const currentBookAuthor = event.currentTarget.parentNode.parentNode.querySelector('td:nth-child(2)').textContent;
        bookAuthor.value = currentBookAuthor;

        const form = document.querySelector('#form');
        document.querySelector('#form > button').remove();
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.value = id
        saveButton.addEventListener('click', saveBook);
        form.appendChild(saveButton);
    }

    function saveBook(event) {
        const id = event.currentTarget.value;
        const headingForm = document.querySelector('#form > h3');
        headingForm.textContent = 'FORM';

        const httpHeaders = {
            method: 'PUT',
            body: JSON.stringify({
                author: bookAuthor.value,
                title: bookTitle.value,
            })
        }

        fetch(`${BASE_URL}${id}`, httpHeaders)
        .then(loadAllBooks)
        .catch(err => console.error(err));

        const form = document.querySelector('#form');
        document.querySelector('#form > button').remove();
        const newButton = document.createElement('button');
        newButton.textContent = 'Submit';
        newButton.addEventListener('click', addNewBook)
        form.appendChild(newButton);
        bookAuthor.value = '';
        bookTitle.value = '';
    }

    function addNewBook() {
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({
                author: bookAuthor.value,
                title: bookTitle.value,
            })
        }
        fetch(BASE_URL, httpHeaders)
        .then(loadAllBooks())
        .catch(err => console.error(err));
        bookTitle.value = '';
        bookAuthor.value = '';
    }

    function deleteBook(event) {
        const id = event.currentTarget.value;
        const httpHeaders = {
            method: 'DELETE'
        }
        fetch(`${BASE_URL}${id}`, httpHeaders)
        .then(loadAllBooks)
        .catch(err => console.error(err))
    }
}

attachEvents();