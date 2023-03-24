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
        if (firstName && lastName && age.value && storyTitle && story.value) {
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
            saveButton.addEventListener('click', () => {
                const divMain = document.getElementById('main');
                divMain.textContent = '';
                let heading = document.createElement('h1');
                heading.textContent = 'Your scary story is saved!';
                divMain.appendChild(heading);
            });
            let editButton = document.createElement('button');
            editButton.textContent = 'Edit Story';
            editButton.className = 'edit-btn';
            editButton.addEventListener('click', () => {
                firstName.value = currentFirstName;
                lastName.value = currentLastName;
                age.value = currentAge;
                storyTitle.value = currentStoryTitle;
                genre.value = currentGenre;
                story.value = currentStory;
                editInfo = Array.from(document.getElementsByClassName('story-info'))[0];
                editInfo.remove();
                publishButton.disabled = false;
                
            });
            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete Story';
            deleteButton.className = 'delete-btn';
            deleteButton.addEventListener('click', () => {
                let target = document.querySelector('#preview-list li');
                target.remove();
                publishButton.disabled = '';
            });

            article.append(heading, firstP, secondP, thirdP, fourthP);
            li.append(article, saveButton, editButton, deleteButton);
            ul.append(li);
            publishButton.disabled = 'disabled';
        }
    }
}