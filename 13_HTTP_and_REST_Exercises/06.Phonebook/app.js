function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook/';
    const loadButton = document.getElementById('btnLoad');
    const createButton = document.getElementById('btnCreate');
    const person = document.getElementById('person');
    const phone = document.getElementById('phone');
    const ulPhoneBook = document.getElementById('phonebook');

    createButton.addEventListener('click', createObject);
    loadButton.addEventListener('click', loadAllObjects);

    function createObject() {
        httpHeaders = {
            method: 'POST',
            body: JSON.stringify({ person: `${person.value}`, phone: `${phone.value}` })
        };
        person.value = '';
        phone.value = '';

        fetch(BASE_URL, httpHeaders)
        .then((response) => response.json())
        .then(loadAllObjects)
        .catch((error) => console.error(error));
    }

    function loadAllObjects() {
        fetch(BASE_URL)
        .then((response) => response.json())
        .then((data) => {
            ulPhoneBook.textContent = '';
            for (const key in data) {
                let li = document.createElement('li');
                const personName = data[key].person;
                const personNumber = data[key].phone;
                const personId = data[key]._id;
                let deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.value = personId;
                deleteButton.addEventListener('click', deleteObject)
                li.textContent = `${personName}: ${personNumber}`
                li.appendChild(deleteButton);
                ulPhoneBook.appendChild(li);

            }
        })
        .catch((error) => console.error(error));
    }

    function deleteObject(e) {
        const httpHeaders = { 
            method: 'DELETE'
        }
        fetch(`${BASE_URL}${e.currentTarget.value}`, httpHeaders)
        .then((response) => response.json())
        .then(loadAllObjects)
        .catch((error) => console.error(error))
    }
}

attachEvents();