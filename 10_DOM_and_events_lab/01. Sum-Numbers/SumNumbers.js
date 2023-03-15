function calc() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const sumNumbers = Number(num1) + Number(num2);
    const sum = document.getElementById('sum');
    sum.value = sumNumbers;
}
