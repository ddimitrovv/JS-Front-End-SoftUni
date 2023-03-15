function addItem() {
    const textToAdd = document.getElementById('newItemText').value;
    console.log(textToAdd);
    let anchor = document.createElement('a');
    anchor.href = '#';
    let li = document.createElement('li');
    anchor.appendChild(document.createTextNode('[Delete]'));
    anchor.addEventListener('click', deleteItem);
    li.textContent = textToAdd;
    li.appendChild(anchor);
    document.getElementById('items').appendChild(li);
    document.getElementById('newItemText').value = '';

    function deleteItem() {
        li.remove();
    }
}