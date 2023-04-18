window.addEventListener('load', solve);

function solve() {
    //TODO
    const sendFormButton = document.querySelector('#right > form > button');
    const clearButton = document.querySelector('.clear-btn')
    const form = document.querySelector('#right > form');
    const inputs = {
        productSelectInput: document.getElementById('type-product'),
        productDescription: document.getElementById('description'),
        clientName: document.getElementById('client-name'),
        clientPhone: document.getElementById('client-phone'),
    }

    const sections = {
        receivedOrders: document.getElementById('received-orders'),
        completedOrders: document.getElementById('completed-orders'),
    }

    sendFormButton.addEventListener('click', sendForm);
    clearButton.addEventListener('click', clearTasks)

    function sendForm(event) {
        // event?.preventDefault();

        for (const input in inputs) {
            if (!inputs[input].value) {
                return
            }
        }

        const newDiv = document.createElement('div');
        newDiv.className = 'container';
        const h2 = document.createElement('h2');
        h2.textContent = `Product type for repair: ${inputs.productSelectInput.value}`;
        newDiv.appendChild(h2);
        const h3 = document.createElement('h3');
        h3.textContent = `Client information: ${inputs.clientName.value}, ${inputs.clientPhone.value}`;
        newDiv.appendChild(h3);
        const h4 = document.createElement('h4');
        h4.textContent = `Description of the problem: ${inputs.productDescription.value}`;
        newDiv.appendChild(h4);
        const startRepairButton = document.createElement('button');
        startRepairButton.textContent = 'Start repair';
        startRepairButton.className = 'start-btn';
        startRepairButton.addEventListener('click', (e) => {
            e.currentTarget.disabled = true;
            e.currentTarget.nextSibling.disabled = false;
        })
        newDiv.appendChild(startRepairButton);
        const finishRepairButton = document.createElement('button');
        finishRepairButton.textContent = 'Finish repair';
        finishRepairButton.className = 'finish-btn';
        finishRepairButton.disabled = true;
        finishRepairButton.addEventListener('click', (e) => {
            const targetDiv = e.currentTarget.parentElement;
            targetDiv.parentElement.removeChild(targetDiv);
            sections.completedOrders.appendChild(targetDiv);
            const buttons = Array.from(targetDiv.querySelectorAll('button'));
            buttons.forEach((button) => {button.remove()})
        })
        newDiv.appendChild(finishRepairButton);
        sections.receivedOrders.appendChild(newDiv);
        form.reset()
    }

    function clearTasks() {
        const divToRemove = Array.from(document.querySelectorAll('#completed-orders > div'));
        divToRemove ? divToRemove.forEach((div) => div.remove()) : false;
    }

}