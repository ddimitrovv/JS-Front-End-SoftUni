function arrayRotation(inputArray, numberRotations) {

    let rotations = numberRotations % inputArray.length;
    for (let i = 0; i < numberRotations % inputArray.length; i++ ) {
        inputArray.push(inputArray.shift());
    }
    console.log(inputArray.join(' '));
}