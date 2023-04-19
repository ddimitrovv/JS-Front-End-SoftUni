function solve(){
   //Todo: Write your code here!
   const articleDetails = {
      author: document.getElementById('creator'),
      title: document.getElementById('title'),
      category: document.getElementById('category'),
      content: document.getElementById('content'),
   }
   const createButton = document.querySelector('.create');
   const sectionToAdd = document.querySelector('body > div > div > main > section');
   createButton.addEventListener('click', createArticle);
   const articleTitles = [];
   const ol = document.querySelector('ol');

   function createArticle(event){
      event.preventDefault();
      // for (const item in articleDetails){
      //    if (articleDetails[item].value === '') {
      //       return;
      //    }
      // }
      const article = document.createElement('article');
      const h1 = document.createElement('h1');
      h1.textContent = articleDetails.title.value;
      article.appendChild(h1);
      const pCategory = document.createElement('p');
      pCategory.innerHTML = `Category:<strong>${articleDetails.category.value}</strong>`;
      article.appendChild(pCategory);
      const pAuthor = document.createElement('p');
      pAuthor.innerHTML = `Creator:<strong>${articleDetails.author.value}</strong>`;
      article.appendChild(pAuthor);
      const pContent = document.createElement('p');
      pContent.textContent = articleDetails.content.value;
      article.appendChild(pContent);
      sectionToAdd.appendChild(article);
      const divButtons = document.createElement('div');
      divButtons.className = 'buttons';
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'btn delete'
      deleteButton.addEventListener('click', (event) => {
         event.currentTarget.parentElement.parentElement.remove();
      })
      divButtons.appendChild(deleteButton);
      const archiveButton = document.createElement('button');
      archiveButton.textContent = 'Archive';
      archiveButton.className = 'btn archive';
      archiveButton.addEventListener('click', (event) => {
         const articleName = event.currentTarget.parentElement.parentElement.querySelector('h1').textContent;
         articleTitles.push(articleName);
         event.currentTarget.parentElement.parentElement.remove();
         const sortedArticles = articleTitles.sort((a, b) => a.localeCompare(b));
         ol.textContent = '';
         for (const article of sortedArticles) {
            const li = document.createElement('li');
            li.textContent = article
            ol.appendChild(li);
         }
      })
      divButtons.appendChild(archiveButton);
      article.appendChild(divButtons);
      Object.values(articleDetails).forEach((element) => {element.value = ''});
   }
}