function smallestOfThree (numOne, numTwo, numThree) {
    let numbers = [numOne, numTwo, numThree];
    console.log(Math.min.apply(Math, numbers));
}