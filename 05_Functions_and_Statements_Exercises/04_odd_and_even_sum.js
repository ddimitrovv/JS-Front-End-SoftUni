function oddEvenSum(number) {
    let oddSum = 0;
    let evenSum = 0;

    while (number) {
        let current = number % 10;
        if (current % 2 === 0) {
            evenSum += current;
        } else {
            oddSum += current;
        }
        number = Math.floor(number / 10);
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}