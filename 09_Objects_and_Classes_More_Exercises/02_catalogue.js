function catalogue(inputArray) {

    let output = {};
    for (const current of inputArray) {
        let [productName, productPrice] = current.split(' : ');
        let key = productName[0].toUpperCase()

        if (!output.hasOwnProperty(key)) {
            output[key] = []
        }
        output[key].push({productName, productPrice})

    }

    for (const key of Object.keys(output).sort()) {
        console.log(key)
        for (const product of output[key].sort((a, b) => a.productName.localeCompare(b.productName)))  {
            console.log(`  ${product.productName}: ${product.productPrice}`)
        }
    }  
}