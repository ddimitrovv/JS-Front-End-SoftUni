window.addEventListener('load', groceryList);

function groceryList() {
    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/'
    const loadButton = document.getElementById('load-product');
    const updateButton = document.getElementById('update-product');
    const addButton = document.getElementById('add-product');
    const tBody = document.getElementById('tbody');
    const productName = document.getElementById('product');
    const productCount = document.getElementById('count');
    const productPrice = document.getElementById('price');

    loadButton.addEventListener('click', loadAllProducts);
    addButton.addEventListener('click', addProduct);

    function loadAllProducts(event) {
        event?.preventDefault();
        fetch(BASE_URL)
        .then((response) => response.json())
        .then((data) => {
            tBody.textContent = '';
            for (key in data) {
                const id = data[key]._id;
                let tr = document.createElement('tr');
                let tdName = document.createElement('td');
                let tdCount = document.createElement('td');
                let tdPrice = document.createElement('td');
                let tdAction = document.createElement('td');
                let updateButton = document.createElement('button');
                let deleteButton = document.createElement('button');
                tdName.className = 'name';
                tdCount.className = 'count-product';
                tdPrice.className = 'product-price';
                tdAction.className = 'btn';
                updateButton.className = 'update-btn';
                deleteButton.className = 'delete';
                updateButton.id = id;
                deleteButton.id = id;
                updateButton.textContent = 'Update';
                deleteButton.textContent = 'Delete';
                updateButton.addEventListener('click', updateProduct);
                deleteButton.addEventListener('click', deleteProduct);
                tdName.textContent = data[key].product;
                tdCount.textContent = data[key].count;
                tdPrice.textContent = data[key].price;
                tdAction.append(updateButton, deleteButton);
                tr.append(tdName, tdCount, tdPrice, tdAction);
                tBody.appendChild(tr);
            }
        })
        .catch((err) => {console.error(err)})
    }

    function addProduct(event) {
        event?.preventDefault();
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({
                product: productName.value,
                count: productCount.value,
                price: productPrice.value
            })
        }

        fetch(BASE_URL, httpHeaders)
        .then(() => loadAllProducts())
        .catch((err) => {console.error(err)})
        productName.value = '';
        productCount.value = '';
        productPrice.value = '';
    }

    function updateProduct(event) {
        addButton.disabled = true;
        updateButton.disabled = false;
        const id = event.currentTarget.id;
        const currentTableRow = event.currentTarget.parentElement.parentElement;
        document.getElementById('product').value = currentTableRow.querySelector('.name').textContent;
        document.getElementById('count').value = currentTableRow.querySelector('.count-product').textContent;
        document.getElementById('price').value = currentTableRow.querySelector('.product-price').textContent;
        updateButton.addEventListener('click', updateProductInfo);   
        
        function updateProductInfo(event) {
            event?.preventDefault();
            const httpHeaders = {
                method: 'PATCH',
                body: JSON.stringify({
                    product: productName.value,
                    count: productCount.value,
                    price: productPrice.value
                })
            }
    
            fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => loadAllProducts())
            .catch((err) => {console.error(err)})
    
            productName.value = '';
            productCount.value = '';
            productPrice.value = '';
            addButton.disabled = false;
            updateButton.disabled = true;
        }
    
    }

    function deleteProduct(event) {
        const id = event.currentTarget.id;
        const httpHeaders = {
            method: 'DELETE'
        }

        fetch(`${BASE_URL}${id}`, httpHeaders)
        .then(() => loadAllProducts())
        .catch((err) => {console.error(err)})
    }
}