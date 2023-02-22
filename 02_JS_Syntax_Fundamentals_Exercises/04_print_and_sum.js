function printAndSum(start, end) {
    let sum = 0;
    let numbers = [];
    for (let i = start; i <= end; i++) {
        sum += i;
        numbers.push(i);
    }
    console.log(numbers.join(` `));
    console.log(`Sum: ${sum}`);
}