function encodeAndDecodeMessages() {
    const buttons = Array.from(document.getElementsByTagName('button'));
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === 'Encode and send it') {
                const inputText = document.querySelector('#main > div:nth-child(1) > textarea');
                const text = inputText.value;
                let encodedText = '';
                for (let i = 0; i < text.length; i++) {
                    current = Number(text.charCodeAt(i));
                    encodedText += String.fromCharCode(current + 1)
                }
                document.querySelector('#main > div:nth-child(2) > textarea').value = encodedText;
                inputText.value = ''
            } else if (button.textContent === 'Decode and read it') {
                const inputText = document.querySelector('#main > div:nth-child(2) > textarea');
                const text = inputText.value;
                let encodedText = '';
                for (let i = 0; i < text.length; i++) {
                    current = Number(text.charCodeAt(i));
                    encodedText += String.fromCharCode(current - 1)
                }
                document.querySelector('#main > div:nth-child(2) > textarea').value = encodedText;
            }
        })
    })
}