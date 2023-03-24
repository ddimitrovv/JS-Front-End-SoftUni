window.addEventListener("load", solve);

function solve() {
    const publishButton = document.getElementById('form-btn');
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const age = document.getElementById('age');
    const storyTitle = document.getElementById('story-title');
    const genre = document.getElementById('genre');
    const story = document.getElementById('story');
    let currentFirstName = null
    let currentLastName = null;
    let currentAge = null;
    let currentStoryTitle = null;
    let currentGenre = null;
    let currentStory = null;

    publishButton.addEventListener('click', publish);

    function publish() {

        if (firstName.value && lastName.value && age.value && storyTitle.value && story.value) {
            const ul = document.getElementById('preview-list')
            let li = document.createElement('li');
            li.className = 'story-info';
            let article = document.createElement('article');
            let heading = document.createElement('h4');
            heading.textContent = `Name: ${firstName.value} ${lastName.value}`;
            currentFirstName = firstName.value;
            currentLastName = lastName.value;
            currentAge = age.value;
            currentStoryTitle = storyTitle.value;
            currentGenre = genre.value;
            currentStory = story.value;
            
            firstName.value = '';
            lastName.value = '';
            let firstP = document.createElement('p');
            firstP.textContent = `Age: ${age.value}`;
            age.value = '';
            let secondP = document.createElement('p');
            secondP.textContent = `Title: ${storyTitle.value}`;
            storyTitle.value = '';
            let thirdP = document.createElement('p');
            thirdP.textContent = `Genre: ${genre.value}`;
            let fourthP = document.createElement('p');
            fourthP.textContent = story.value;
            story.value = ''
            let saveButton = document.createElement('button');
            saveButton.textContent = 'Save Story';
            saveButton.className = 'save-btn';
            saveButton.addEventListener('click', saveStory);
            let editButton = document.createElement('button');
            editButton.textContent = 'Edit Story';
            editButton.className = 'edit-btn';
            editButton.addEventListener('click', editStory);

            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete Story';
            deleteButton.className = 'delete-btn';
            deleteButton.addEventListener('click', deleteStory);

            // article.append(heading, firstP, secondP, thirdP, fourthP);
            // li.append(article, saveButton, editButton, deleteButton);
            article.appendChild(heading);
            article.appendChild(firstP);
            article.appendChild(secondP);
            article.appendChild(thirdP);
            article.appendChild(fourthP);
            li.appendChild(article);
            li.appendChild(saveButton);
            li.appendChild(editButton);
            li.appendChild(deleteButton);
            ul.appendChild(li);
            publishButton.disabled = 'disabled';
        }
    }

    function deleteStory() {
        const target = document.querySelector('#preview-list li');
        target.remove()
    }

    function editStory() {
        firstName.value = currentFirstName;
        lastName.value = currentLastName;
        age.value = currentAge;
        storyTitle.value = currentStoryTitle;
        genre.value = currentGenre;
        story.value = currentStory;
        editInfo = document.querySelector('.story-info');
        editInfo.remove();
        publishButton.disabled = false;
    }

    function saveStory() {
        const divMain = document.getElementById('main');
        divMain.textContent = '';
        let heading = document.createElement('h1');
        heading.textContent = 'Your scary story is saved!';
        divMain.appendChild(heading);
    }
}