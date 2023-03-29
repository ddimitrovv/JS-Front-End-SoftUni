// TODO
function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
    const loadAllButton = document.getElementById('load-button');
    const addButton = document.getElementById('add-button');
    const toDoList = document.getElementById('todo-list');

    loadAllButton.addEventListener('click', loadAllTasks);
    addButton.addEventListener('click', addNewTask);


    function loadAllTasks(event) {
        event?.preventDefault();
        fetch(BASE_URL)
        .then((response) => response.json())
        .then((data) => {
            toDoList.textContent = ''
            for (key in data) {
                let li = document.createElement('li');
                let span = document.createElement('span');
                let removeButton = document.createElement('button');
                let editButton = document.createElement('button');
                span.textContent = data[key].name;
                removeButton.id = data[key]._id;
                removeButton.textContent = 'Remove';
                removeButton.addEventListener('click', removeTask);
                editButton.id = data[key]._id;
                editButton.textContent = 'Edit';
                editButton.addEventListener('click', editTask);
                li.appendChild(span);
                li.appendChild(removeButton);
                li.appendChild(editButton);
                toDoList.appendChild(li);
            }
        })
        .catch((err) => console.error(err));
    }

    function addNewTask(event) {
        event.preventDefault();
        const newTask = document.getElementById('title');
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({name: newTask.value})
        }
        fetch(BASE_URL, httpHeaders)
        .then(() => loadAllTasks())
        .catch((err) => console.error(err));
        newTask.value = '';
    }

    function editTask(event) {
        const li = event.currentTarget.parentNode;
        const [span, deleteBtn, _editBtn] = Array.from(event.currentTarget.parentNode.children);
        const taskText = span.textContent;
        let newInput = document.createElement('input');
        newInput.value = taskText;
        let newButton = document.createElement('button');
        newButton.textContent = 'Submit';
        newButton.addEventListener('click', saveChanges);
        newButton.id = deleteBtn.id;
        li.textContent = '';
        li.append(newInput, deleteBtn, newButton);
    }

    function saveChanges(event) {
        const id = event.currentTarget.id;
        const newTaskText = event.currentTarget.parentElement.firstChild.value;
        const httpHeaders = {
            method: 'PATCH',
            body: JSON.stringify({
                name: newTaskText
            })
        }
        fetch(`${BASE_URL}${id}`, httpHeaders)
        .then(() => loadAllTasks())
        .catch((err) => console.error(err));
    }

    function removeTask(event) {
        const id = event.currentTarget.id;
        const httpHeaders = { 
            method: 'DELETE' 
        };
        fetch(`${BASE_URL}${id}`, httpHeaders)
        .then(() => loadAllTasks())
        .catch((err) => console.error(err));
    }
}

attachEvents();
