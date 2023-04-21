function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/'
    const buttons = {
        load: document.getElementById('load-course'),
        add: document.getElementById('add-course'),
        edit: document.getElementById('edit-course'),
    }

    const inputs = {
        name: document.getElementById('course-name'),
        type: document.getElementById('course-type'),
        description: document.getElementById('description'),
        teacher: document.getElementById('teacher-name'),
    }

    const divToAddCourses = document.getElementById('list')

    buttons.load.addEventListener('click', loadCourses);
    buttons.add.addEventListener('click', addCourse);

    function addCourse(event) {
        event?.preventDefault();
        for (const input in inputs) {
            if (inputs[input] === '') {
                return
            }
        }
        if (!(['Long', 'Medium', 'Short'].includes(inputs.type.value))) {
            return
        }
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({
                title: inputs.name.value,
                type: inputs.type.value,
                description: inputs.description.value,
                teacher: inputs.teacher.value,
            })
        }
        fetch(BASE_URL, httpHeaders)
        .then(loadCourses())
        Object.values(inputs).forEach((input) => {input.value = ''})
    }

    function finishCourse(event) {
        const currentDiv = event.currentTarget.parentElement;
        httpHeaders = {
            method: 'DELETE'
        }
        fetch(BASE_URL+currentDiv.id, httpHeaders)
        .then(loadCourses());
        currentDiv.remove();
    }

    function editCourse(event) {
        const currentDiv = event.currentTarget.parentElement;
        const id = currentDiv.id
        inputs.name.value = currentDiv.querySelector('h2').textContent;
        inputs.teacher.value = currentDiv.querySelectorAll('h3')[0].textContent;
        inputs.type.value = currentDiv.querySelectorAll('h3')[1].textContent;
        inputs.description.value = currentDiv.querySelector('h4').textContent;
        currentDiv.remove();
        buttons.edit.disabled = false;
        buttons.add.disabled = true;
        buttons.edit.addEventListener('click', () => {
            httpHeaders = {
                method: 'PUT',
                body: JSON.stringify({
                    title: inputs.name.value,
                    type: inputs.type.value,
                    description: inputs.description.value,
                    teacher: inputs.teacher.value,
                    _id: id
                })
            }
            fetch(BASE_URL+id, httpHeaders)
            .then(loadCourses());
            Object.values(inputs).forEach((input) => {input.value = ''});
            buttons.edit.disabled = true;
            buttons.add.disabled = false;
        })
    }

    function loadCourses() {
        fetch(BASE_URL)
        .then((response) => response.json())
        .then((data) => {
            divToAddCourses.textContent = '';
            for (const key in data) {
                const mainDiv = document.createElement('div');
                mainDiv.className = 'container';
                const h2 = document.createElement('h2');
                h2.textContent = data[key].title;
                mainDiv.appendChild(h2);
                const teacherName = document.createElement('h3');
                teacherName.textContent = data[key].teacher;
                mainDiv.appendChild(teacherName);
                const courseType = document.createElement('h3');
                courseType.textContent = data[key].type;
                mainDiv.appendChild(courseType);
                const courseDesc = document.createElement('h4');
                courseDesc.textContent = data[key].description;
                mainDiv.appendChild(courseDesc);
                mainDiv.id = data[key]._id;
                const editButton = document.createElement('button');
                editButton.textContent = 'Edit Course';
                editButton.className = 'edit-btn';
                editButton.addEventListener('click', editCourse);
                mainDiv.appendChild(editButton);
                const finishButton = document.createElement('button');
                finishButton.textContent = 'Finish Course';
                finishButton.className = 'finish-btn';
                finishButton.addEventListener('click', finishCourse);
                mainDiv.appendChild(finishButton);
                divToAddCourses.appendChild(mainDiv);
            }
        })
    }
}

solve()