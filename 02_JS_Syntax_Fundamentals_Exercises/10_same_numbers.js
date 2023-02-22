function sameNumbers(number) {
    let sum = 0;
    let condition = true;
    let firstNumber = Number(number.toString()[0]);

    while (number) {
        let currentNumber = number % 10;
        if (firstNumber !== currentNumber) {
            condition = false;
        }
        sum += currentNumber;
        number = ~~(number / 10);
    }

    console.log(condition);
    console.log(sum);
}
