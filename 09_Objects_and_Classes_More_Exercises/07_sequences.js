function filerSequences(inputArray) {
    inputArray = inputArray.map(el => JSON.parse(el));
    
    for (let i = 0; i < inputArray.length; i++) {
        let array1 = inputArray[i]
        for (let j = 0; j < inputArray.length; j++) {
            if (i !== j) {
                let array2 = inputArray[j]
                if (array1.length === array2.length && array1.every(r => array2.includes(r))) {
                        inputArray.splice(j, 1);
                        i--;
                }
            }
        }
    }

    inputArray.sort((a, b) => a.length - b.length).forEach(element => {
        console.log(`[${element.sort((a, b) => b - a).join(', ')}]`);
    });
}