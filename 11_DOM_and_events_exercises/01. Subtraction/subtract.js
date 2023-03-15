function subtract() {
    const firstNum = Number(document.getElementById('firstNumber').value);
    const secondNum = Number(document.getElementById('secondNumber').value);
    let result = document.getElementById('result');
    result.textContent = firstNum - secondNum;
}