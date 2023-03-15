function deleteByEmail() {
    const emails = Array.from(document.querySelectorAll('td:nth-child(even)'));
    const searchedEmail = document.getElementsByName('email')[0].value;
    result = document.getElementById('result');
    for (const email of emails) {
        if (email.textContent === searchedEmail) {
            email.parentElement.remove();
            result.textContent = 'Deleted.'
            document.getElementsByName('email')[0].value = ''
            return;
        }
    }
    document.getElementsByName('email')[0].value = ''
    result.textContent = 'Not found.'
}