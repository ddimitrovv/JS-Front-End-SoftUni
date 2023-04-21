window.addEventListener("load", solve);

function solve() {
  const inputs = {
    title: document.getElementById('task-title'),
    category: document.getElementById('task-category'),
    content: document.getElementById('task-content'),
  };
  const reviewList = document.getElementById('review-list');
  const publishedList = document.getElementById('published-list');

  const publishButton = document.getElementById('publish-btn');
  publishButton.addEventListener('click', publish);

  function publish() {
    for (const input in inputs) {
        if (inputs[input].value === '') {
            return;
        }
    }
    const li = document.createElement('li');
    li.className = 'rpost'
    const article = document.createElement('article');
    const h4 = document.createElement('h4');
    h4.textContent = inputs.title.value;
    article.appendChild(h4);
    const pCategory = document.createElement('p');
    pCategory.textContent = `Category: ${inputs.category.value}`;
    article.appendChild(pCategory);
    const pContent = document.createElement('p');
    pContent.textContent = `Content: ${inputs.content.value}`;
    article.appendChild(pContent);
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'action-btn edit';
    editButton.addEventListener('click', (event) => {
        const currentLi = event.currentTarget.parentElement;
        inputs.title.value = currentLi.querySelector('h4').textContent;
        inputs.category.value = Array.from(currentLi.querySelectorAll('p'))[0].textContent.split('Category: ')[1];
        inputs.content.value = Array.from(currentLi.querySelectorAll('p'))[1].textContent.split('Content: ')[1];
        currentLi.remove();
    })
    const postButton = document.createElement('button');
    postButton.textContent = 'Post';
    postButton.className = 'action-btn post';
    postButton.addEventListener('click', (event) => {
        const currentLi = event.currentTarget.parentElement;
        const buttons = Array.from(currentLi.querySelectorAll('.action-btn'));
        buttons.forEach((button) => {button.remove()})
        currentLi.remove();
        publishedList.appendChild(currentLi);
    })
    li.appendChild(article);
    li.appendChild(editButton);
    li.appendChild(postButton);
    reviewList.appendChild(li);

    Object.values(inputs).forEach((input) => { input.value = '' })
    }
}