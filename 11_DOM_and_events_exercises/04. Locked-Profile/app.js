function lockedProfile() {
    const divElements = Array.from(document.getElementsByClassName('profile'));
    divElements.forEach(element => {
        const radioButton = Array.from(element.getElementsByTagName('input'));
        const radioLock = radioButton[0];
        const radioUnlock = radioButton[1];
        const button = Array.from(element.getElementsByTagName('button'))[0];

        radioLock.addEventListener('change', () => {
            element.getElementsByTagName('button').disabled = true;
        })
        radioUnlock.addEventListener('change', () => {
            element.getElementsByTagName('button').disabled = false;
        })

        button.addEventListener('click', (e) => {
            if (radioUnlock.checked){
                Array.from(element.getElementsByTagName('div'))[0].style.display = 'block';
                button.textContent = 'Hide it';
                button.addEventListener('click', (e) => {
                    if (radioUnlock.checked) {
                        Array.from(element.getElementsByTagName('div'))[0].style.display = 'none';
                        button.textContent = 'Show more';
                    }
                });
            }
        });
    });
}