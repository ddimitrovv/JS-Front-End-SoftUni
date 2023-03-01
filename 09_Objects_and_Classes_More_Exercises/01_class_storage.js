class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }
    
    
    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product['quantity']
        this.totalCost += product['price'] * product['quantity']
    }
    getProducts() {
        let productsJSON = [];
        for (const product of this.storage) {
            productsJSON.push(JSON.stringify(product))
        }
        return productsJSON.join('\n')
    }
}