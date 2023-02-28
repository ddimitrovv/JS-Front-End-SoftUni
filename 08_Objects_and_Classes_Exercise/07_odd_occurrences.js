function oddOccurrences(inputString) {
    let wordsList = inputString.split(' ');
    let wordsCount = {};
    let words = [];
    let output = [];

    for (let i = 0; i < wordsList.length; i++) {
        let currentWord = wordsList[i].toLowerCase()

        if (!(currentWord in wordsCount)) {
            wordsCount[currentWord] = 0;
            words.push(currentWord)
        }
        wordsCount[currentWord]++
    }


    for (const word of words) {
        if (wordsCount[word] % 2 !== 0) {
            output.push(word)
        }
    }

    console.log(output.join(' '))

}