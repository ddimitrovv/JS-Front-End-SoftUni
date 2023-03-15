function create(words) {
   let result = [];
   for (const word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display ='none';
      div.appendChild(p);
      div.addEventListener('click', (e) => {e.target.children[0].style.display = 'inline';});
      result.push(div);    
   }
   const target = document.getElementById('content');
   result.forEach(element => {
      target.appendChild(element);
   });
}