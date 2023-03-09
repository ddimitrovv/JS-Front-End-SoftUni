function store(stock, ordered) {
    storeProducts = {};
    for (let i = 0; i < stock.length; i += 2) {
        if (!(stock[i] in storeProducts)) {
            storeProducts[stock[i]] = 0
        }
        storeProducts[stock[i]] += Number(stock[i + 1]);
    }
    for (let i = 0; i < ordered.length; i += 2) {
        if (!(ordered[i] in storeProducts)) {
            storeProducts[ordered[i]] = 0
        }
        storeProducts[ordered[i]] += Number(ordered[i + 1]);
    }

    for (const [product, quantity] of Object.entries(storeProducts)) {
        console.log(`${product} -> ${quantity}`)
    }
}

// ---------- Solution 2 ----------

function store(stock, ordered) {

    let products = [...stock, ...ordered]
    let storeProducts = {};
    for (let i = 0; i < products.length; i += 2) {
        if (!(products[i] in storeProducts)) {
            storeProducts[products[i]] = 0
        }
        storeProducts[products[i]] += Number(products[i + 1]);
    }

    for (const key in storeProducts) {
        console.log(`${key} -> ${storeProducts[key]}`)
    }
}