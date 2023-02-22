function cookingByNumbers(number, ...operands) {
    for (let i = 0; i < operands.length; i++) {
        if (operands[i] === 'chop') {
            number /= 2;
        } else if (operands[i] === 'dice') {
            number = Math.sqrt(number);
        } else if (operands[i] === 'spice') {
            number += 1;
        } else if (operands[i] === 'bake') {
            number *= 3;
        } else if (operands[i] === 'fillet') {
            number -= number * 0.2;
        }
        console.log(number)
    }
}