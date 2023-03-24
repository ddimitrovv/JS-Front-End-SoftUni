window.addEventListener('load', solve);

function solve() {
    const addButton = document.getElementById('add-btn')
    addButton.addEventListener('click', addFunction);
    const allHitsDiv = document.querySelector('.all-hits-container');
    const savedSongsDiv = document.querySelector('.saved-container')


    function addFunction(e) {
        e.preventDefault();
        const genre = document.getElementById('genre');
        const name = document.getElementById('name');
        const author = document.getElementById('author');
        const date = document.getElementById('date');

        if (!genre.value || !name.value || !author.value || !date.value) {
            return;
        }
        const newDiv = document.createElement('div');
        newDiv.className = 'hits-info';
        const imgElement = document.createElement('img');
        imgElement.src = './static/img/img.png';
        newDiv.appendChild(imgElement);
        const genreHeading = document.createElement('h2');
        genreHeading.textContent = `Genre: ${genre.value}`;
        newDiv.appendChild(genreHeading);
        const nameHeading = document.createElement('h2');
        nameHeading.textContent = `Name: ${name.value}`;
        newDiv.appendChild(nameHeading);
        const authorHeading = document.createElement('h2');
        authorHeading.textContent = `Author: ${author.value}`;
        newDiv.appendChild(authorHeading);
        const dateHeading = document.createElement('h3');
        dateHeading.textContent = `Date: ${date.value}`;
        newDiv.appendChild(dateHeading);
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save song';
        saveButton.className = 'save-btn';
        saveButton.addEventListener('click', saveSong);
        newDiv.appendChild(saveButton);
        const likeButton = document.createElement('button');
        likeButton.textContent = 'Like song';
        likeButton.className = 'like-btn';
        likeButton.addEventListener('click', likeSong);
        newDiv.appendChild(likeButton);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-btn';
        deleteButton.addEventListener('click', deleteSong);
        newDiv.appendChild(deleteButton);
        allHitsDiv.appendChild(newDiv);
    }

    function saveSong() {
        const songDiv = document.querySelector('.hits-info');
        const saveButton = document.querySelector('.save-btn');
        const likeButton = document.querySelector('.like-btn');
        songDiv.removeChild(saveButton);
        songDiv.removeChild(likeButton);
        savedSongsDiv.appendChild(songDiv);
    }

    function likeSong(e) {
        likes = document.querySelector('#total-likes > div > p');
        let totalLikes = Number(likes.textContent.split(': ')[1]);
        totalLikes++
        likes.textContent = `Total Likes: ${totalLikes}`;
        e.currentTarget.disabled = true;
    }

    function deleteSong(e) {
        e.currentTarget.parentNode.remove()
    }
}