function factorialDivision (firstNum, secondNum) {
    let firstSum = 1;
    let secondSum = 1;

    for (let i = firstNum; i > 0; i--) {
        firstSum *= i;
    }

    for (let i = secondNum; i > 0; i--) {
        secondSum *= i;
    }

    console.log((firstSum / secondSum).toFixed(2))
}