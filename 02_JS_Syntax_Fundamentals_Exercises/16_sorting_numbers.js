function sortingNumbers(numbers) {
    numbers.sort((a, b) => a - b);
    let output = [];
    
    while (numbers[0] !== undefined) {
        output.push(numbers.shift());
        output.push(numbers.pop());
    }

    return output
}