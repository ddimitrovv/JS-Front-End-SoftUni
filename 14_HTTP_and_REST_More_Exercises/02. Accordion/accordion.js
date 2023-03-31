window.addEventListener('load', solution);

function solution() {
    const BASE_URL = 'http://localhost:3030/jsonstore/advanced/articles/';
    const ALL_ENDPOINT = 'list';
    const DETAILS_ENDPOINT = 'details/'
    const mainSection = document.getElementById('main');
    fetch(`${BASE_URL}${ALL_ENDPOINT}`)
    .then((response) => response.json())
    .then((data) => {
        data.forEach((article) => {
            const accordion = document.createElement('div');
            accordion.className = 'accordion';
            // Head div
            const headDiv = document.createElement('div');
            headDiv.className = 'head';
            const span = document.createElement('span');
            span.textContent = article.title;
            const showMoreButton = document.createElement('button');
            showMoreButton.textContent = 'More';
            showMoreButton.className = 'button';
            showMoreButton.id = article._id;
            showMoreButton.addEventListener('click', showMoreInformation)
            headDiv.append(span, showMoreButton);
            // Extra Div
            const extraDiv = document.createElement('div');
            extraDiv.className = 'extra';
            const p = document.createElement('p');
            extraDiv.appendChild(p);
            accordion.append(headDiv, extraDiv);
            mainSection.appendChild(accordion);
        })

    })
    .catch((err) => console.error(err));

    function showMoreInformation(event) {
        const div = event.currentTarget.parentElement.parentElement;
        // Hide other div's extra information
        // const allDivExtra = Array.from(document.querySelectorAll('.extra'));
        // allDivExtra.forEach((div) => {div.style.display = 'none'});
        const pTarget = div.querySelector('.extra > p')
        const id = event.currentTarget.id;
        fetch(`${BASE_URL}${DETAILS_ENDPOINT}${id}`)
        .then((response) => response.json())
        .then((data) => {
            const info = Object.values(data)
            pTarget.textContent = info[2];
            pTarget.parentElement.style.display = 'inline-block';
        })
    }
}