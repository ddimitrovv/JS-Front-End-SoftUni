function solve() {
    const name = document.getElementById('recipientName');
    const title = document.getElementById('title');
    const text = document.getElementById('message');
    const addButton = document.getElementById('add');
    const resetButton = document.getElementById('reset');
    const ulToAddMail = document.getElementById('list');
    const ulSentMails = document.querySelector('.sent-list');
    const deletedMails = document.querySelector('.delete-list');

    addButton.addEventListener('click', addMail);
    resetButton.addEventListener('click', resetMail);


    function addMail(event) {
        event.preventDefault()
        if (!name.value || !title.value || !text.value) {
            return;
        }
        const li = document.createElement('li');
        const titleHeading = document.createElement('h4');
        const recipient = document.createElement('h4');
        const mailContent = document.createElement('span');
        titleHeading.textContent = `Title: ${title.value}`;
        recipient.textContent = `Recipient Name: ${name.value}`;
        mailContent.textContent = text.value;
        const buttonsDiv = document.createElement('div');
        buttonsDiv.id = 'list-action';
        const sendButton = document.createElement('button');
        sendButton.type = 'submit';
        sendButton.id = 'send';
        sendButton.textContent = 'Send';
        sendButton.addEventListener('click', sendMail);
        const deleteButton = document.createElement('button');
        deleteButton.type = 'submit';
        deleteButton.id = 'delete';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteMail);
        buttonsDiv.appendChild(sendButton);
        buttonsDiv.appendChild(deleteButton);
        li.appendChild(titleHeading);
        li.appendChild(recipient);
        li.appendChild(mailContent);
        li.appendChild(buttonsDiv);
        ulToAddMail.appendChild(li);
        name.value = '';
        title.value = '';
        text.value = '';
    }

    function resetMail(event) {
        event.preventDefault();
        name.value = '';
        title.value = '';
        text.value = '';
    }

    function sendMail(event) {
        event.preventDefault();
        const li = document.createElement('li');
        const targetElement = event.currentTarget.parentElement.parentElement;
        const sentToSpan = document.createElement('span');
        const text = targetElement.querySelector('h4:nth-child(1)').textContent
        sentToSpan.textContent = text
        const titleSpan = document.createElement('span');
        titleSpan.textContent = targetElement.querySelector('h4:nth-child(2)').textContent.replace('Recipient Name:', 'To:');
        const buttonDiv = document.createElement('div');
        buttonDiv.className = 'btn';
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.type = 'submit';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteMail);
        buttonDiv.appendChild(deleteButton);
        li.appendChild(titleSpan);
        li.appendChild(sentToSpan);
        li.appendChild(buttonDiv);
        ulSentMails.appendChild(li);
        ulToAddMail.removeChild(targetElement)
    }

    function deleteMail(event) {
        event.preventDefault();
        const targetLi = event.currentTarget.parentElement.parentElement;
        const buttons = Array.from(targetLi.querySelectorAll('button'));
        buttons.forEach((button) => {button.remove()})
        targetLi.parentElement.removeChild(targetLi);
        deletedMails.appendChild(targetLi);     
    }
}
solve()