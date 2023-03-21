function solve() {
    const dropDown = document.getElementById('selectMenuTo');
    let binary = document.createElement('option');
    binary.text = 'Binary';
    binary.value = 'binary';
    let hex = document.createElement('option');
    hex.text = 'Hexadecimal';
    hex.value = 'hexadecimal';
    dropDown.appendChild(binary);
    dropDown.appendChild(hex);

    const button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', (event) => {
        const number = Number(document.getElementById('input').value);
        const convertTo = document.getElementById('selectMenuTo').value;
        const outputTarget = document.getElementById('result');
        if (convertTo === 'binary') {
            outputTarget.value = number.toString(2);
        } else if (convertTo === 'hexadecimal') {
            outputTarget.value = number.toString(16).toUpperCase();
        }
    })
}