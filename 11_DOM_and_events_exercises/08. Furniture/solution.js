function solve() {
    const button = document.querySelector('#exercise > button:nth-child(3)');
    const buyButton = document.querySelector('#exercise > button:nth-child(6)');
    const table = document.querySelector('#exercise > div > div > div > div > table > tbody');
    button.addEventListener('click', (e) => {
        const info = JSON.parse(document.querySelector('#exercise > textarea:nth-child(2)').value);
        info.forEach(element => {
            let newRow = document.createElement('tr');

            let elements = []

            let img = document.createElement('img');
            img.src = element['img'];
            elements.push(img);

            let name = document.createElement('p');
            name.textContent = element['name'];
            elements.push(name);

            let price = document.createElement('p');
            price.textContent = element['price'];
            elements.push(price);

            let decFactor = document.createElement('p');
            decFactor.textContent = element['decFactor'];
            elements.push(decFactor);
            
            elements.forEach(element => {
                let col = document.createElement('td');
                col.appendChild(element);
                newRow.appendChild(col);
            });

            let col = document.createElement('td');
            let check = document.createElement('input');
            check.type = 'checkbox';
            col.appendChild(check);
            newRow.appendChild(col);
            table.appendChild(newRow);
        });
        document.querySelector('#exercise > textarea:nth-child(2)').value = ''
    });

    buyButton.addEventListener('click', (e) => {
        let shoppingList = {
            'Bought furniture': [],
            'Total price': 0,
            'Average decoration factor': [], 
        }
        let row = Array.from(table.children)
        row.forEach(element => {
            let cols = Array.from(element.children)
            cols.forEach(col => {
                if (Array.from(col.children)[0].checked) {                    
                    shoppingList['Bought furniture'].push(Array.from(element.children)[1].children[0].textContent)
                    shoppingList['Total price'] += Number(Array.from(element.children)[2].children[0].textContent)
                    shoppingList['Average decoration factor'].push(Number((Array.from(element.children)[3].children[0].textContent)))
                }
            });
        });
        let textArea = document.querySelector('#exercise > textarea:nth-child(5)');
        textArea.textContent = [`Bought furniture: ${shoppingList['Bought furniture'].join(', ')}`+'\n'+`Total price: ${shoppingList['Total price'].toFixed(2)}`+'\n'+`Average decoration factor: ${shoppingList['Average decoration factor'].reduce((partialSum, a) => partialSum + a, 0) / shoppingList['Average decoration factor'].length}`]         
    })

}