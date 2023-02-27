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