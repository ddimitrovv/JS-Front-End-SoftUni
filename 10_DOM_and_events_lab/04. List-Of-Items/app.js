function addItem() {
    const textToAdd = document.getElementById('newItemText').value
    console.log(textToAdd)
    let li = document.createElement('li');
    li.textContent = textToAdd;
    document.getElementById('items').appendChild(li);
    document.getElementById('newItemText').value = '';
}