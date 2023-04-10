window.addEventListener('load', solve);

function solve() {
    const title =  document.getElementById('title');
    const description = document.getElementById('description');
    const optionSelect = document.getElementById('label');
    const points = document.getElementById('points');
    const taskAssignee = document.getElementById('assignee');
    const createTaskButton = document.getElementById('create-task-btn');
    const deleteTaskButton = document.getElementById('delete-task-btn');
    const tasksSection = document.getElementById('tasks-section');
    const totalPoints = document.getElementById('total-sprint-points');
    const hiddenInput = document.getElementById('task-id')
    let totalSprintPoints = 0
    let taskID = 0

    const features = {
        'Feature': '&#8865;',
        'Low Priority Bug': '&#9737;',
        'High Priority Bug': '&#9888;'
    }

    const divClasses = {
        'Feature': 'feature',
        'Low Priority Bug': 'low-priority',
        'High Priority Bug': 'high-priority'
    }

    const articles = {}

    createTaskButton.addEventListener('click', createTask)

    function createTask() {
        if (!title.value || !description.value || !optionSelect.value || !points.value || !taskAssignee.value || points.value < 0) {
            return;
        }
        totalSprintPoints += Number(points.value);
        totalPoints.textContent = `Total Points ${totalSprintPoints}pts`
        taskID++;

        const article = document.createElement('article')
        article.id = `task-${taskID}`;
        article.className = 'task-card';
        const firstDiv = document.createElement('div');
        firstDiv.classList.add('task-card-label', `${divClasses[optionSelect.value]}`)
        firstDiv.innerHTML = `${optionSelect.value} ${features[optionSelect.value]}`
        article.appendChild(firstDiv);
        const h3 = document.createElement('h3');
        h3.className = 'task-card-title';
        h3.textContent = title.value;
        article.appendChild(h3);
        const p = document.createElement('p');
        p.className = 'task-card-description';
        p.textContent = description.value;
        article.appendChild(p);
        const secondDiv = document.createElement('div');
        secondDiv.className = 'task-card-points';
        secondDiv.textContent = `Estimated at ${points.value} pts`;
        article.appendChild(secondDiv);
        const thirdDiv = document.createElement('div');
        thirdDiv.className = 'task-card-assignee';
        thirdDiv.textContent =`Assigned to: ${taskAssignee.value}`
        article.appendChild(thirdDiv);
        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'task-card-actions';
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', confirmDelete);
        buttonsDiv.appendChild(deleteButton);
        article.appendChild(buttonsDiv);
        tasksSection.appendChild(article);
        articles[`task-${taskID}`] = {
            title: title.value,
            description: description.value,
            optionSelect: optionSelect.value,
            points: Number(points.value),
            taskAssignee: taskAssignee.value,
            hiddenInput: hiddenInput.value
        }

        title.value = '';
        description.value = '';
        optionSelect.value = '';
        points.value = '';
        taskAssignee.value = '';
        hiddenInput.value = '';
    }

    function confirmDelete(event) {
        const article = event.currentTarget.parentNode.parentNode;

        const id = article.id
        title.value = articles[id].title;
        description.value = articles[id].description;
        optionSelect.value = articles[id].optionSelect;
        points.value = articles[id].points;
        taskAssignee.value = articles[id].taskAssignee;
        hiddenInput.value = articles[id].hiddenInput;
        title.disabled = true;
        description.disabled = true;
        optionSelect.disabled = true;
        points.disabled = true;
        taskAssignee.disabled = true;
        createTaskButton.disabled = true;
        deleteTaskButton.disabled = false;
        deleteTaskButton.addEventListener('click', () => {
            totalSprintPoints -= points.value;
            article.remove()
            createTaskButton.disabled = false;
            deleteTaskButton.disabled = true;
            title.disabled = false;
            description.disabled = false;
            optionSelect.disabled = false;
            points.disabled = false;
            taskAssignee.disabled = false;
            totalPoints.textContent = `Total Points ${totalSprintPoints}pts`
            title.value = '';
            description.value = '';
            optionSelect.value = '';
            points.value = '';
            taskAssignee.value = '';
            hiddenInput.value = '';
        });

    }
}