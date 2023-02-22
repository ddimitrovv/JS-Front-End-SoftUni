function fruit(fruit, weightGrams, priceKilograms) {
    let weightKilograms = weightGrams / 1000;
    let totalAmount = priceKilograms * weightKilograms;
    console.log(`I need $${totalAmount.toFixed(2)} to buy ${weightKilograms.toFixed(2)} kilograms ${fruit}.`)
}