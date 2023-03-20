function validate() {
    const target = document.getElementById('email');
    target.addEventListener('change', (event) => {
        const email = event.target.value;
        if (!email.includes('@') || !email.includes('.')) {
            target.classList += 'error';
        } else {
            target.classList.remove('error');
        }
    });
}