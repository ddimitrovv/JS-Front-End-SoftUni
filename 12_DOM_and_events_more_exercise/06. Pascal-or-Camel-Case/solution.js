function solve() {
    const text = document.getElementById('text').value.toLowerCase();
    const lettersCase = document.getElementById('naming-convention').value;
    const result = document.getElementById('result');
    
    if (lettersCase === 'Camel Case') {
        let converted = convertToUpperCase(text);
        result.textContent = converted.charAt(0).toLowerCase() + converted.substring(1);
    } else if (lettersCase === 'Pascal Case') {
        result.textContent = convertToUpperCase(text);
    } else {
        result.textContent = 'Error!';
    }

    function convertToUpperCase(string) {
        let newText = string.split(' ');
        let convertedString = [];
        newText.forEach(word => {
            word = word.charAt(0).toUpperCase() + word.substring(1);
            convertedString.push(word);
        });      
        return convertedString.join('');
    }
}