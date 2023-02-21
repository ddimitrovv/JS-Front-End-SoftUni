function evenOddSubstract (inputArr) {
    let evenSum=0;
    let oddSum=0;
    for (let i=0; i<inputArr.length; i++) {
        let currentNum = inputArr[i]
        if (currentNum%2==0) {
            evenSum+=currentNum
        } else {
            oddSum+=currentNum
        }
    }
    console.log(evenSum-oddSum)
}