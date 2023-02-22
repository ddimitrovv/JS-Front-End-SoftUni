function printNthElement(inputArray, nthElem) {
    let nthElements = []
    
    for (let i = 0; i < inputArray.length; i++) {
        if (i % nthElem === 0) {
            nthElements.push(inputArray[i]);
        }
    }

    return nthElements
}