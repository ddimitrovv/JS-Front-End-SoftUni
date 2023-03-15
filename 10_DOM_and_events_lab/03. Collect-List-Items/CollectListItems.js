function extractText() {
    const elements = document.getElementsByTagName('li');
    let text = '';
    for (const element of elements) {
        text += element.textContent + '\n';
    }
    console.log(text);
    const output = document.getElementById('result');
    output.textContent = text;
}