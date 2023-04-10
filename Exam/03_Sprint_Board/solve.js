// TODO:
function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const loadBoardButton = document.getElementById('load-board-btn');
    const createTaskButton = document.getElementById('create-task-btn');
    const toDoSection = document.querySelector('#todo-section > .task-list');
    const inProgressSection = document.querySelector('#in-progress-section > .task-list');
    const codeReview = document.querySelector('#code-review-section > .task-list');
    const done = document.querySelector('#done-section > .task-list');

    const buttons = {
        'ToDo': 'Move to In Progress',
        'In Progress': 'Move to Code Review',
        'Code Review': 'Move to Done',
        'Done': 'Close'
    }

    const addTo = {
        'ToDo': toDoSection,
        'In Progress': inProgressSection,
        'Code Review': codeReview,
        'Done': done
    }

    const moveTo = {
        'ToDo': 'In Progress',
        'In Progress': 'Code Review',
        'Code Review': 'Done'
    }

    createTaskButton.addEventListener('click', addNewTask)
    function addNewTask() {
        console.log(title.value, description.value)
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({
                description: description.value,
                status: 'ToDo',
                title: title.value,
            })
        }
        fetch(BASE_URL, httpHeaders)
        .then(loadBoard())
        title.value = '';
        description.value = '';
    }

    function loadBoard() {
        fetch(BASE_URL)
        .then((response) => response.json())
        .then((data) => {
            toDoSection.textContent = '';
            inProgressSection.textContent = '';
            codeReview.textContent = '';
            done.textContent = '';

            for (key in data) {
                const li = document.createElement('li');
                li.className = 'task';
                li.id = data[key].status;
                const h3 = document.createElement('h3');
                h3.textContent = data[key].title
                const p = document.createElement('p');
                p.textContent = data[key].description
                const button = document.createElement('button');
                button.id = data[key]._id;
                button.textContent = buttons[data[key].status];
                button.addEventListener('click', (e) => {

                    if (e.currentTarget.textContent === 'Close') {
                        httpHeaders = {
                            method: 'DELETE'
                        }
                        fetch(BASE_URL+e.currentTarget.id, httpHeaders)
                        .then(loadBoard())
                    } else {
                        httpHeaders = {
                            method: 'PATCH', 
                            body: JSON.stringify({
                                status: moveTo[e.currentTarget.parentElement.id]
                            })
                        }
                        fetch(BASE_URL+e.currentTarget.id, httpHeaders)
                        .then(loadBoard())
                    }
                })
                li.append(h3, p, button);
                addTo[data[key].status].appendChild(li);
            }
        })
    }

    loadBoardButton.addEventListener('click', loadBoard)
        
}

attachEvents();