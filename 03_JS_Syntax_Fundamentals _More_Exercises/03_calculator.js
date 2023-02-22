function calculator(num1, operator, num2) {

    if (operator === '+') {
        console.log((num1 + num2).toFixed(2));
    } else if (operator === '-') {
        console.log((num1 - num2).toFixed(2));
    } else if (operator === '*') {
        console.log((num1 * num2).toFixed(2));
    } else if (operator === '/' && num2 !== 0) {
        console.log((num1 / num2).toFixed(2));
    }
}