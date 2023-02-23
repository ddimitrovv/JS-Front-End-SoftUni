function orders(product, quantity) {
    let priceList = Object();
    priceList = {};
    priceList['coffee'] = 1.50;
    priceList['water'] = 1.00;
    priceList['coke'] = 1.40;
    priceList['snacks'] = 2.00;

    console.log((priceList[product] * quantity).toFixed(2))
}