function toggle() {
    const button = Array.from(document.getElementsByClassName('button'))[0];
    const target = document.getElementById('extra');
    if (button.textContent === 'More') {
        button.textContent = 'Less';
        target.style.display = 'block';
    } else {
        button.textContent = 'More';
        target.style.display = 'none';
    } 
}