function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searched = document.querySelector('#searchField');
      const tableRowsInfo = Array.from(document.querySelectorAll('tbody > tr > td'))
      tableRowsInfo.forEach(element => {
         if (element.textContent.includes(searched.value)) {
            element.parentElement.className = 'select';
         }
      });
      searched.value = '';
   }
}