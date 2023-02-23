function signCheck(numOne, numTwo, numThree) {
    if (
        (numOne > 0 && numTwo > 0 && numThree < 0) || 
        (numOne > 0 && numTwo < 0 && numThree > 0) ||
        (numOne < 0 && numTwo > 0 && numThree > 0) ||
        (numOne < 0 && numTwo < 0 && numThree < 0)) {
        console.log('Negative');
    } else {
        console.log('Positive');
    }
}