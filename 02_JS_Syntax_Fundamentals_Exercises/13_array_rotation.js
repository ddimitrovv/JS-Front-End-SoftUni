function arrayRotation(inputArray, numberRotations) {
    for (let i = 0; i < numberRotations; i++ ) {
        inputArray.push(inputArray.shift());
    }
    console.log(inputArray.join(' '));
}