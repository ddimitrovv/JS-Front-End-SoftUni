function addItem() {
    const textValue = document.getElementById('newItemText').value;
    document.getElementById('newItemText').value = '';
    const itemValue = document.getElementById('newItemValue').value;
    document.getElementById('newItemValue').value = '';
    const menu = document.getElementById('menu');
    let newOption = document.createElement('option');
    newOption.text = textValue;
    newOption.value = itemValue;
    menu.appendChild(newOption);
}