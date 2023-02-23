function sum (numOne, numTwo, numThree) {
    let result = numOne + numTwo;
    function subtractSum (i, j) {
        return i - j
    }
    console.log(subtractSum(result, numThree))
}