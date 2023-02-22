function sumDigits(number) {
    let sum = 0;
    while (number) {
        sum += number % 10;
        number = ~~(number / 10);
    }
    console.log(sum);
}